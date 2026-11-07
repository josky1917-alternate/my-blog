import type { ResearchPost } from "./summer-2026";
const b = (en: string, zh: string) => ({ en, zh });

export const vllmNeuronPost: ResearchPost = {
  slug: "deploy-vllm-inferentia-trainium-vs-gpu",
  date: "2026-10-15",
  title: "Deploying vLLM on AWS Inferentia and Trainium: A Practical Guide and GPU Comparison",
  titleZh: "在Inferentia和Trainium上部署vLLM：从环境准备到上线，以及与GPU的取舍",
  excerpt: "Two Neuron deployment paths, step-by-step examples, first-run compilation, API checks, and a workload-based comparison with NVIDIA GPU serving.",
  excerptZh: "分清两条Neuron部署路径，用命令示例串起环境准备、模型编译、API验证和上线流程，再比较它与NVIDIA GPU部署vLLM的优劣。",
  tags: ["vLLM", "AWS Neuron", "Inferentia", "Trainium", "Deployment"],
  readTime: "12 min",
  sections: [
    {
      heading: b("1. Pick the route before installing packages", "一、先选路线，再安装软件"),
      paragraphs: [
        b("On AWS, Inf means Inferentia instances and Trn means Trainium instances. This guide focuses on Inf2 and modern Trn systems; it does not assume the same recipe works on Inf1. vLLM can expose a familiar API across hardware backends, while the code that compiles and executes the model differs underneath.", "AWS中，Inf是Inferentia实例系列，Trn是Trainium实例系列。本文主要讨论Inf2和较新的Trn系统，不默认同一套命令也适用于Inf1。vLLM可以在不同后端上提供熟悉的API，但底层负责模型编译和执行的实现并不相同。"),
        b("As of this article's October 15, 2026 date, there are two routes worth distinguishing. The NxD Inference integration covers Inf2, Trn1/Trn1n, and Trn2. The newer standalone vLLM Neuron plugin targets Trn2/Trn3 and implements models without depending on NxD Inference. Sharing a repository name does not make the release lines interchangeable.", "按本文2026年10月15日的时点，需要区分两条路线：基于NxD Inference的集成覆盖Inf2、Trn1/Trn1n和Trn2；较新的独立vLLM Neuron插件面向Trn2/Trn3，不依赖NxD Inference来实现模型。即便仓库名称相同，也不能把不同发布线混装。"),
        b("To keep the examples concrete, route A follows the documented NxD combination: Neuron SDK 2.29.0, PyTorch 2.9.1, plugin 0.5.0, and vLLM 0.16.0. Route B follows the SDK 2.32.0 DLC with plugin 0.24.0.1.1.0. These are separate environments. The commands are documentation-based examples; no paid AWS instances were launched or hardware benchmarks run for this article.", "为了让示例有明确边界，路线A采用文档列出的NxD组合：Neuron SDK 2.29.0、PyTorch 2.9.1、插件0.5.0与vLLM 0.16.0；路线B采用SDK 2.32.0 DLC与插件0.24.0.1.1.0。请使用独立环境。命令依据官方文档整理，本文没有创建付费AWS实例，也没有进行芯片实测。")
      ], sources: [1, 3, 4, 6]
    },
    {
      heading: b("2. Prepare the host: make the hardware visible first", "二、准备主机：先让系统看见芯片"),
      paragraphs: [
        b("Start with a Neuron DLAMI or a base host configured for the chosen SDK, rather than a CUDA-only image. Confirm the instance generation, CPU memory, disk space for weights and compilation, and access to the model repository. For gated checkpoints, accept the model license and configure download credentials separately; the small examples below use publicly accessible models.", "先选择与目标SDK匹配的Neuron DLAMI，或安装好相应驱动的基础主机，不要直接使用只有CUDA环境的镜像。确认实例代际、主机内存、权重与编译所需磁盘空间，以及模型仓库访问条件。受限模型还需要单独接受许可并配置下载凭据；下文的小示例使用公开模型。"),
        b("Run the checks on the EC2 host before entering a container. If neuron-ls finds no devices, fix the instance type or host driver first. Installing another Python package cannot supply a missing kernel driver. Inside a container, the selected /dev/neuron devices must also be passed through.", "进入容器前，先在EC2宿主机运行检查。如果neuron-ls看不到设备，应先修正实例类型或宿主机驱动。多安装一个Python包，不能补出缺失的内核驱动。进入容器时，也要把选定的/dev/neuron设备传进去。")
      ],
      code: [{ title: b("Host checks", "宿主机检查"), language: "bash", value: "neuron-ls\nls /dev/neuron*\npython --version\n# Inside the chosen Neuron environment:\npython -m pip show torch vllm vllm-neuron neuronx-distributed-inference", caption: b("The package check inventories the active environment; not every package belongs in both routes. Record the versions rather than upgrading them independently.", "包检查用于查看当前环境，不代表两条路线都要安装所有这些包。记录版本组合，不要各自随意升级。") }],
      sources: [1, 3]
    },
    {
      heading: b("3. Route A: Inf2 with the NxD Inference integration", "三、路线A：在Inf2上使用NxD Inference集成"),
      paragraphs: [
        b("Use a dedicated SDK 2.29.0 NxD Inference environment with PyTorch 2.9.1, provided by a matching Neuron DLAMI or the corresponding PyTorch inference DLC. The host still needs its compatible Neuron driver. Activate that environment before the following commands. The tagged plugin installs the vLLM version it expects; do not install a separate CUDA wheel over it.", "使用独立的SDK 2.29.0 NxD Inference环境及PyTorch 2.9.1，可通过匹配的Neuron DLAMI或对应PyTorch推理DLC准备；宿主机仍需兼容的Neuron驱动。先激活该环境，再执行下面的命令。指定标签的插件会安装它要求的vLLM版本，不要再用CUDA wheel覆盖它。"),
        b("TinyLlama is a smoke-test model here, not a production recommendation. Start with a 128-token total sequence budget and the documented two-way tensor-parallel configuration. On Neuron, tensor-parallel size refers to the execution ranks/NeuronCores used by that configuration, not automatically to a count of chips. Check the logical-core configuration before changing it.", "这里的TinyLlama只用于冒烟测试，不是生产模型推荐。先使用128个token的总序列预算，以及文档中的两路张量并行配置。Neuron上的张量并行度指该配置使用的执行rank/NeuronCore，不能直接当成芯片数量；调整前先检查逻辑核心配置。")
      ],
      code: [
        { title: b("A1 · Install the pinned NxD plugin", "A1 · 安装固定版本的NxD插件"), language: "bash", value: "git clone --depth 1 --branch 0.5.0 \\\n  https://github.com/vllm-project/vllm-neuron.git vllm-neuron-nxdi\ncd vllm-neuron-nxdi\npython -m pip install --extra-index-url \\\n  https://pip.repos.neuron.amazonaws.com -e .\npython -m pip check", caption: b("Run inside the prepared SDK 2.29.0 / PyTorch 2.9.1 environment. The 0.5.0 release is the NxD line, not the newer standalone plugin.", "在准备好的SDK 2.29.0 / PyTorch 2.9.1环境中执行。0.5.0属于NxD发布线，不是较新的独立插件。") },
        { title: b("A2 · Start a small API endpoint", "A2 · 启动小模型API"), language: "bash", value: "vllm serve TinyLlama/TinyLlama-1.1B-Chat-v1.0 \\\n  --host 127.0.0.1 --port 8000 \\\n  --tensor-parallel-size 2 \\\n  --max-model-len 128 --max-num-seqs 4 \\\n  --block-size 32 --num-gpu-blocks-override 16", caption: b("A short-context smoke test adapted from the NxD guide. The historically named num-gpu-blocks option also appears in this Neuron example; it does not mean the model is running on a GPU.", "根据NxD指南改写的短上下文冒烟测试。历史命名的num-gpu-blocks选项也出现在Neuron示例中，并不表示模型运行在GPU上。") }
      ], sources: [1]
    },
    {
      heading: b("4. Route B: Trn2/Trn3 with the standalone plugin", "四、路线B：Trn2/Trn3使用独立插件"),
      paragraphs: [
        b("For a separate Trn2/Trn3 deployment, the SDK 2.32.0 vLLM DLC packages the standalone plugin and its user-space dependencies. It still relies on the host driver. The container example below maps the host's Neuron device files, keeps model downloads in a host cache, and publishes the API only on loopback for the first test. Use a host whose devices are allocated to this workload.", "如果单独部署Trn2/Trn3，可使用SDK 2.32.0的vLLM DLC，它打包了独立插件及用户态依赖，但仍依赖宿主机驱动。下例映射宿主机Neuron设备、把模型下载放进主机缓存，并先仅向本机发布API。请在这些设备已分配给当前任务的主机上运行。"),
        b("The next command opens a shell inside the container. From that shell, start GPT-OSS 20B using the plugin-specific configuration shown below. Eight-way TP is an example from the Trainium recipe, not a default for every instance. A single-host setup without EFA may need NEURON_SKIP_EFA_AFFINITY=1 as documented; distributed serving requires its own network and topology setup.", "下一条命令会进入容器shell，再从容器内按后面的插件配置启动GPT-OSS 20B。八路TP来自Trainium示例，不是所有实例的默认值。文档说明，不带EFA的单机环境可能需要设置NEURON_SKIP_EFA_AFFINITY=1；分布式服务则需要单独配置网络和拓扑。")
      ],
      code: [
        { title: b("B1 · Enter the versioned Trainium container", "B1 · 进入固定版本的Trainium容器"), language: "bash", value: "VLLM_NEURON_IMAGE=public.ecr.aws/neuron/pytorch-inference-vllm-neuronx:0.24.0.1.1.0-neuronx-py313-sdk2.32.0-ubuntu24.04\ndocker pull \"$VLLM_NEURON_IMAGE\"\n\nNEURON_DEVICES=()\nfor device_path in /dev/neuron[0-9]*; do\n  [ -e \"$device_path\" ] && NEURON_DEVICES+=(--device=\"$device_path\")\ndone\ndocker run --rm -it --name vllm-trn \\\n  \"${NEURON_DEVICES[@]}\" \\\n  --cap-add SYS_ADMIN --cap-add IPC_LOCK \\\n  -p 127.0.0.1:8000:8000 \\\n  -v \"$HOME/.cache/huggingface:/root/.cache/huggingface\" \\\n  \"$VLLM_NEURON_IMAGE\" bash", caption: b("Bash example for a dedicated Trn2/Trn3 host, adapted from the DLC guide. Device visibility is not a substitute for checking the available logical cores. Pin an image digest as well when recording a production release.", "根据DLC指南整理的Bash示例，用于独立Trn2/Trn3主机。设备可见不代表逻辑核心配置已经正确；记录生产发布时还应固定镜像digest。") },
        { title: b("B2 · Launch inside the container", "B2 · 在容器内启动服务"), language: "bash", value: "export VLLM_NEURON_COMPILATION_TIMEOUT=1200\nexport VLLM_EXECUTE_MODEL_TIMEOUT_SECONDS=1200\n\nvllm serve openai/gpt-oss-20b \\\n  --host 0.0.0.0 --port 8000 \\\n  --tensor-parallel-size 8 \\\n  --max-model-len 4096 \\\n  --max-num-batched-tokens 2048 --max-num-seqs 2 \\\n  --hf-overrides '{\"quantization_config\": {}}' \\\n  --additional-config '{\"neuron_config\": {\"num_batched_tokens_buckets\": [2048], \"num_seqs_buckets\": [2]}}'", caption: b("Only for route B. The neuron_config object belongs to the standalone plugin. Do not replace it with an NxD override object or assume a GPU quantization recipe applies unchanged.", "仅用于路线B。neuron_config属于独立插件配置，不能直接替换成NxD的override对象，也不要照搬GPU量化配方。") }
      ], sources: [3, 4, 5]
    },
    {
      heading: b("5. Wait for compilation, then prove the API works", "五、先等编译完成，再验证API"),
      paragraphs: [
        b("The first start can spend substantial time compiling. Treat downloading weights, compiling, loading artifacts, and serving requests as separate milestones. Wait for the ready log and a successful health response before sending traffic. A process being alive does not yet mean a model is available.", "第一次启动可能花较长时间编译。应区分下载权重、编译、加载产物和接收请求这几个阶段。看到就绪日志，并确认健康检查成功后，再导入流量。进程还活着，并不表示模型已经可用。"),
        b("Use a second terminal on the same host. Both routes expose the familiar health, model-list, and chat-completion endpoints. Set the model name to match the route you started. Keep the initial request short enough for route A's 128-token budget; it is deliberately a connectivity test, not a useful long-context configuration.", "在同一主机打开第二个终端。两条路线都提供熟悉的健康检查、模型列表与聊天接口。模型名称要与启动的路线一致；首个请求应足够简短，适配路线A的128-token预算。这一步刻意只测连通性，不是实用的长上下文配置。")
      ],
      code: [{ title: b("C · Verify from the host", "C · 从宿主机验证接口"), language: "bash", value: "curl -f http://127.0.0.1:8000/health\ncurl -sS http://127.0.0.1:8000/v1/models\n\nSERVED_MODEL=TinyLlama/TinyLlama-1.1B-Chat-v1.0\n# For route B instead:\n# SERVED_MODEL=openai/gpt-oss-20b\ncurl -sS http://127.0.0.1:8000/v1/chat/completions \\\n  -H 'Content-Type: application/json' \\\n  --data \"{\\\"model\\\":\\\"$SERVED_MODEL\\\",\\\"messages\\\":[{\\\"role\\\":\\\"user\\\",\\\"content\\\":\\\"Say hello.\\\"}],\\\"max_tokens\\\":16,\\\"temperature\\\":0}\"", caption: b("A successful response proves the request path works. It does not establish throughput, model quality, or feature parity with a GPU backend.", "收到成功响应，说明请求链路已经跑通；它不等于吞吐达标、质量达标，或与GPU后端功能完全一致。") }],
      sources: [2, 4]
    },
    {
      heading: b("6. A GPU baseline: similar API, different engine room", "六、GPU对照：相似的API，不同的机房"),
      paragraphs: [
        b("On a compatible NVIDIA host, a pinned CUDA vLLM environment can provide a compact baseline. The following uses vLLM 0.16.0 to match route A's engine version, but leaves GPU driver/CUDA compatibility to that version's installation requirements. Use a separate environment; do not reuse the Neuron virtual environment. The same TinyLlama endpoint makes client-side checks easy to compare.", "在兼容的NVIDIA主机上，可以建立固定版本的CUDA vLLM环境作为基线。下例使用vLLM 0.16.0，与路线A的引擎版本对齐；驱动和CUDA仍要满足该版本安装要求。使用独立环境，不要复用Neuron虚拟环境。同一个TinyLlama接口，便于对照客户端验证。"),
        b("This is an API baseline, not an equal-resource performance experiment: route A uses Neuron TP=2 while the GPU example uses one GPU. A fair cost comparison must include the actual instance sizes, memory, software versions, and service-level targets. The same URL shape makes application migration easier, but it does not imply identical scheduling, cache behavior, or kernel support.", "这只是API基线，并非资源相等的性能实验：路线A使用Neuron TP=2，GPU示例使用一张GPU。公平成本比较还必须纳入实例规格、内存、软件版本和服务目标。接口形式相同，方便迁移应用层，却不代表调度、缓存行为或kernel支持完全一致。")
      ],
      code: [{ title: b("D · A minimal NVIDIA GPU endpoint", "D · NVIDIA GPU最小接口示例"), language: "bash", value: "nvidia-smi\npython -m venv .venv-vllm-gpu\nsource .venv-vllm-gpu/bin/activate\npython -m pip install 'vllm==0.16.0'\nvllm serve TinyLlama/TinyLlama-1.1B-Chat-v1.0 \\\n  --host 127.0.0.1 --port 8000 \\\n  --tensor-parallel-size 1 \\\n  --max-model-len 128 --max-num-seqs 4", caption: b("Run on the GPU host, not the Inf/Trn host. Check that the selected vLLM build supports that GPU and its driver; the Neuron plugin is not installed here.", "在GPU主机运行，不是在Inf/Trn主机运行。确认该vLLM构建支持所用GPU与驱动；这里不安装Neuron插件。") }],
      table: {
        headers: [b("Dimension", "维度"), b("Inf/Trn + Neuron", "Inf/Trn + Neuron"), b("NVIDIA GPU + CUDA", "NVIDIA GPU + CUDA")],
        rows: [
          [b("Getting started", "上手方式"), b("Choose a supported model and a matched SDK/plugin line", "先匹配模型与SDK/插件发布线"), b("Match GPU/driver/CUDA and the vLLM build", "匹配GPU、驱动、CUDA与vLLM构建")],
          [b("Startup & artifacts", "启动与产物"), b("Plan compilation, warm-up, and reusable artifacts", "规划编译、预热和产物复用"), b("Still has weight loading, warm-up, and possible compilation", "也有权重加载、预热及可能的编译")],
          [b("Model & feature fit", "模型与功能"), b("Check each plugin, generation, and configuration", "逐项核对插件、芯片代际与配置"), b("Often convenient for existing CUDA-specific integrations; check versions", "对已有CUDA专项实现往往更方便，仍需检查版本")],
          [b("Potential advantage", "潜在优势"), b("An alternative capacity and cost path for supported AWS workloads", "为受支持的AWS工作负载提供另一条容量与成本路径"), b("Reuse a CUDA-heavy stack; wider deployment-location choices", "复用依赖CUDA的技术栈，部署位置选择更多")],
          [b("Potential downside", "潜在代价"), b("Porting, compilation planning, and another backend to operate", "适配、编译规划及第二套后端运维"), b("Actual GPU rental cost and availability may dominate the budget", "实际GPU租用成本与容量可能成为预算主项")],
          [b("What decides", "最终判断"), b("Cost per accepted request at the required latency and quality", "同等延迟与质量下，每个合格请求的完整成本"), b("The same task-level measure, not peak FLOPS", "采用同样的任务指标，不只比较峰值FLOPS")]
        ],
        caption: b("Table 1. Deployment tradeoffs, not a measured speed ranking. Neither backend wins every model and traffic pattern.", "表1：部署取舍，而非实测速度排名。没有一种后端能在所有模型与流量分布下都胜出。")
      }, sources: [1, 3, 7, 8]
    },
    {
      heading: b("7. Turn a working demo into a service", "七、从跑通Demo到上线服务"),
      paragraphs: [
        b("Increase one capacity dimension at a time: context length, simultaneous sequences, then request rate. Include weights, KV cache, and runtime workspace in the memory budget. Keep compiled artifacts keyed by model revision, compiler/SDK, hardware target, precision, and shape/parallelism settings. NxD artifact paths and the standalone plugin's VLLM_CACHE_ROOT are different interfaces; use the cache mechanism documented for the route you chose.", "每次只扩大一个容量维度：上下文长度、并发序列，再到请求速率。内存预算要计入权重、KV缓存与运行时工作空间。编译产物应按模型revision、编译器/SDK、硬件目标、精度和形状/并行配置区分。NxD产物路径与独立插件的VLLM_CACHE_ROOT属于不同接口，应使用对应路线的缓存机制。"),
        b("For production, package the verified environment, prewarm it, then put it behind the application's authenticated network entry point. Record readiness, errors, time to first token, inter-token latency, tail latency, throughput, and complete instance cost. Test restart and artifact reuse, not only the first answer. The loopback examples are a starting point for local validation; load balancers and remote clients need an intentional network configuration.", "上线时，把验证过的环境打包并预热，再放到应用已有认证与网络入口之后。记录就绪状态、错误、首token延迟、token间延迟、尾延迟、吞吐和完整实例成本。除了第一条回答，还要测试重启及产物复用。本机绑定示例用于起步验证，负载均衡器和远程客户端需要明确配置网络路径。"),
        b("The cost question becomes useful only after quality and service levels match. Compare cold start and warm operation separately, replay the same input/output-length distribution, and count retries and failed requests. Include migration and ongoing backend maintenance. A lower instance-hour price can still lose if useful throughput is lower or rollout effort is much higher.", "只有质量和服务目标对齐之后，成本问题才有意义。把冷启动与热运行分开比较，回放相同的输入输出长度分布，并计入重试与失败请求。还应计算迁移与持续维护成本。实例每小时更便宜，如果有效吞吐更低，或上线工作量更大，也可能并不划算。")
      ], sources: [1, 2, 3]
    },
    {
      heading: b("8. When it fails, follow the layers", "八、遇到故障，按层排查"),
      paragraphs: [
        b("No devices: inspect host drivers and container device mappings. Plugin not detected or dependency conflicts: check the active environment and the version line, then rebuild a clean matched environment. Unsupported architecture: verify that the exact backend has a model implementation rather than assuming Hugging Face availability means Neuron support.", "设备不可见：先查宿主机驱动和容器映射。插件未识别或依赖冲突：核对激活环境与发布线，再重建干净、匹配的环境。模型架构不支持：确认该后端已有对应实现，不要把Hugging Face上能下载等同于Neuron已支持。"),
        b("Compilation slow or timing out: inspect progress, capacity, and timeout configuration before assuming a hang. Out of memory: reduce context or concurrent sequences before changing several flags together. API connection refused: confirm readiness, listening address, and port mapping. After any correction, repeat the short request before restoring realistic load.", "编译慢或超时：先检查进度、资源与超时配置，不要直接断定卡死。内存不足：先降低上下文或并发序列，避免同时修改多个参数。接口连接被拒绝：检查就绪状态、监听地址与端口映射。每次修正后先重跑短请求，再恢复真实负载。"),
        b("My preferred order is simple: one supported model, one verified environment, one correct response, then measured scale. Inf/Trn can be a valuable serving option when the workload fits; GPUs remain attractive when their existing model and kernel ecosystem saves integration work. Let the complete deployment experiment make the decision.", "我更喜欢按一个简单顺序推进：一个受支持模型、一套确认过的环境、一条正确响应，然后才是实测扩容。工作负载匹配时，Inf/Trn是值得评估的推理选择；已有模型与kernel生态能节省集成工作时，GPU也很有吸引力。最终让完整部署实验来决定。")
      ], sources: [2, 3, 4]
    }
  ],
  sources: [
    { title: "AWS Neuron 2.32 docs — NxD vLLM guide and pinned version matrix", date: "NxD plugin 0.5.0 / SDK 2.29.0 compatibility", url: "https://awsdocs-neuron.readthedocs-hosted.com/en/v2.32.0/libraries/nxd-inference/developer_guides/vllm-user-guide-v1.html" },
    { title: "AWS Neuron 2.32 docs — NxD online serving quickstart", date: "Versioned documentation", url: "https://awsdocs-neuron.readthedocs-hosted.com/en/v2.32.0/libraries/nxd-inference/vllm/quickstart-vllm-online-serving.html" },
    { title: "AWS Neuron 2.32 docs — Standalone plugin setup", date: "Trn2/Trn3 setup and compile-cache guidance", url: "https://awsdocs-neuron.readthedocs-hosted.com/en/v2.32.0/vllm-neuron/docs/getting-started/setup-guide.html" },
    { title: "AWS Neuron 2.32 docs — Standalone online serving", date: "GPT-OSS example and API checks", url: "https://awsdocs-neuron.readthedocs-hosted.com/en/v2.32.0/vllm-neuron/docs/getting-started/quickstart-online-serving.html" },
    { title: "AWS Neuron 2.32 docs — Versioned vLLM DLC deployment", date: "SDK 2.32.0 container example", url: "https://awsdocs-neuron.readthedocs-hosted.com/en/v2.32.0/deploy/environments/quickstart-deploy-dlc.html" },
    { title: "AWS Neuron — July/August 2026 release chronology", date: "2026-07-20 / 2026-08-17", url: "https://awsdocs-neuron.readthedocs-hosted.com/en/v2.32.0/about-neuron/whats-new.html" },
    { title: "vLLM — GPU installation requirements", date: "v0.16.0 documentation", url: "https://docs.vllm.ai/en/v0.16.0/getting_started/installation/gpu/" },
    { title: "vLLM — Quickstart and OpenAI-compatible serving", date: "v0.16.0 documentation", url: "https://docs.vllm.ai/en/v0.16.0/getting_started/quickstart/" }
  ]
};
