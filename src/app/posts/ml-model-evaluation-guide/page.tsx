"use client";

import { useLanguage } from "../../context/LanguageContext";
import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PostPage() {
  const { t } = useLanguage();

  return (
    <article className="max-w-4xl mx-auto">
      {/* Back Link */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8"
      >
        <ArrowLeft size={20} />
        {t("Back to Home", "返回首页")}
      </Link>

      {/* Header */}
      <header className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
            Machine Learning
          </span>
          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
            Model Evaluation
          </span>
          <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
            Experiment Design
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
          {t(
            "ML Model Evaluation and Experiment Design: A Comprehensive Guide",
            "机器学习模型评估与实验设计：全面指南"
          )}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span>June 6, 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={18} />
            <span>{t("18 min read", "18分钟阅读")}</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-lg leading-relaxed mb-6">
          {t(
            "Building a machine learning model is only half the battle. The other half is understanding how to evaluate it properly, prevent overfitting, and design experiments that yield statistically significant results. This comprehensive guide covers the theoretical foundations and practical techniques every ML practitioner should master.",
            "构建机器学习模型只是战斗的一半。另一半是理解如何正确评估它、防止过拟合，以及设计能产生统计显著性结果的实验。本综合指南涵盖了每个ML从业者都应该掌握的理论基础和实用技术。"
          )}
        </p>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
          {t("Part 1: Theoretical Foundations", "第一部分：理论基础")}
        </h2>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">
          1. {t("Bias-Variance Tradeoff", "偏差-方差权衡")}
        </h3>

        <p className="leading-relaxed mb-4">
          {t(
            "The bias-variance tradeoff is one of the most fundamental concepts in machine learning. It describes the tension between a model's ability to capture patterns in training data (low bias) and its sensitivity to noise in that data (low variance).",
            "偏差-方差权衡是机器学习中最基础的概念之一。它描述了模型捕获训练数据中模式的能力（低偏差）与其对数据中噪声的敏感性（低方差）之间的张力。"
          )}
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
          <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-2">
            {t("Understanding the Components", "理解组成部分")}
          </h4>
          <ul className="list-disc list-inside space-y-2 text-blue-800 dark:text-blue-200 text-sm">
            <li>
              <strong>{t("Bias (偏差)", "偏差")}:</strong> {t("The error introduced by approximating a real-world problem with a simplified model. High bias leads to underfitting - the model is too simple to capture underlying patterns.", "通过简化模型近似现实世界问题所引入的误差。高偏差导致欠拟合——模型过于简单，无法捕获潜在模式。")}
            </li>
            <li>
              <strong>{t("Variance (方差)", "方差")}:</strong> {t("The model's sensitivity to small fluctuations in the training set. High variance leads to overfitting - the model learns noise as if it were signal.", "模型对训练集中小波动的敏感性。高方差导致过拟合——模型将噪声学习为信号。")}
            </li>
            <li>
              <strong>{t("Irreducible Error (不可约误差)", "不可约误差")}:</strong> {t("Noise inherent in the data that cannot be eliminated by any model.", "数据中固有的、无法通过任何模型消除的噪声。")}
            </li>
          </ul>
        </div>

        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 mb-6">
          <h4 className="font-bold text-slate-900 dark:text-white mb-4">
            {t("Mathematical Formulation", "数学公式")}
          </h4>
          <p className="text-sm mb-4">
            {t("The expected prediction error at a point x can be decomposed as:", "在点x处的期望预测误差可以分解为：")}
          </p>
          <div className="bg-white dark:bg-slate-900 p-4 rounded font-mono text-sm">
            Error(x) = Bias² + Variance + Irreducible Error
          </div>
          <p className="text-sm mt-4">
            {t("This decomposition shows that as we decrease bias (by making the model more complex), variance typically increases, and vice versa. The goal is to find the sweet spot that minimizes total error.", "这种分解表明，当我们减少偏差（通过使模型更复杂）时，方差通常会增加，反之亦然。目标是找到最小化总误差的最佳平衡点。")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded text-center">
            <div className="text-2xl mb-2">📉</div>
            <h4 className="font-semibold text-red-900 dark:text-red-300 mb-1">{t("High Bias", "高偏差")}</h4>
            <p className="text-xs text-red-800 dark:text-red-200">{t("Underfitting", "欠拟合")}</p>
            <p className="text-xs text-red-700 dark:text-red-300 mt-2">{t("Linear model for non-linear data", "对非线性数据使用线性模型")}</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded text-center">
            <div className="text-2xl mb-2">⚖️</div>
            <h4 className="font-semibold text-green-900 dark:text-green-300 mb-1">{t("Balanced", "平衡")}</h4>
            <p className="text-xs text-green-800 dark:text-green-200">{t("Optimal", "最优")}</p>
            <p className="text-xs text-green-700 dark:text-green-300 mt-2">{t("Appropriate model complexity", "适当的模型复杂度")}</p>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded text-center">
            <div className="text-2xl mb-2">📈</div>
            <h4 className="font-semibold text-orange-900 dark:text-orange-300 mb-1">{t("High Variance", "高方差")}</h4>
            <p className="text-xs text-orange-800 dark:text-orange-200">{t("Overfitting", "过拟合")}</p>
            <p className="text-xs text-orange-700 dark:text-orange-300 mt-2">{t("Complex model memorizing noise", "复杂模型记忆噪声")}</p>
          </div>
        </div>

        <h4 className="font-semibold text-slate-900 dark:text-white mt-4 mb-2">
          {t("Practical Examples", "实际示例")}
        </h4>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border-collapse border border-slate-300 dark:border-slate-700">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800">
                <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">{t("Scenario", "场景")}</th>
                <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">{t("Training Error", "训练误差")}</th>
                <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">{t("Test Error", "测试误差")}</th>
                <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">{t("Diagnosis", "诊断")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("High Bias", "高偏差")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">15%</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">16%</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Both errors high, similar", "两者误差都高，相似")}</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-900/50">
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Balanced", "平衡")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">5%</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">6%</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Both errors low, similar", "两者误差都低，相似")}</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("High Variance", "高方差")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">2%</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">18%</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Large gap between errors", "误差之间差距大")}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">
          2. {t("Overfitting: Causes and Detection", "过拟合：原因与检测")}
        </h3>

        <p className="leading-relaxed mb-4">
          {t(
            "Overfitting occurs when a model learns the training data too well, including its noise and outliers, resulting in poor generalization to new data. It's one of the most common problems in machine learning.",
            "过拟合发生在模型对训练数据学习得过于充分时，包括其中的噪声和异常值，导致对新数据的泛化能力差。这是机器学习中最常见的问题之一。"
          )}
        </p>

        <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 my-6">
          <h4 className="font-bold text-orange-900 dark:text-orange-300 mb-2">
            {t("Common Causes of Overfitting", "过拟合的常见原因")}
          </h4>
          <ul className="list-disc list-inside space-y-1 text-orange-800 dark:text-orange-200 text-sm">
            <li>{t("Model too complex relative to training data size", "模型相对于训练数据规模过于复杂")}</li>
            <li>{t("Training for too many epochs", "训练轮数过多")}</li>
            <li>{t("Insufficient or non-representative training data", "训练数据不足或不具代表性")}</li>
            <li>{t("Too many features relative to observations", "特征数量相对于观测值过多")}</li>
            <li>{t("Lack of regularization", "缺乏正则化")}</li>
          </ul>
        </div>

        <h4 className="font-semibold text-slate-900 dark:text-white mt-4 mb-2">
          {t("Detection Methods", "检测方法")}
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded">
            <h5 className="font-semibold text-slate-900 dark:text-white mb-2">{t("Learning Curves", "学习曲线")}</h5>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {t("Plot training and validation error vs. training set size or epochs. A large gap between curves indicates overfitting.", 
              "绘制训练误差和验证误差随训练集大小或轮数的变化。曲线之间的大差距表明过拟合。")}
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded">
            <h5 className="font-semibold text-slate-900 dark:text-white mb-2">{t("Cross-Validation", "交叉验证")}</h5>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {t("Large variance in performance across folds suggests overfitting. Consistent low performance suggests underfitting.", 
              "各折性能的大方差表明过拟合。一致的低性能表明欠拟合。")}
            </p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">
          3. {t("Regularization Techniques", "正则化技术")}
        </h3>

        <p className="leading-relaxed mb-4">
          {t(
            "Regularization techniques add constraints to the model to prevent overfitting by discouraging complex models. L1 and L2 regularization are the most common approaches for linear models and neural networks.",
            "正则化技术通过对复杂模型施加惩罚来添加约束，以防止过拟合。L1和L2正则化是线性模型和神经网络最常见的方法。"
          )}
        </p>

        <h4 className="font-semibold text-slate-900 dark:text-white mt-4 mb-2">
          L1 Regularization (Lasso)
        </h4>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
          <p className="text-sm mb-2">
            <strong>{t("Formula", "公式")}:</strong> Loss = MSE + λ × Σ|wᵢ|
          </p>
          <p className="text-sm text-blue-800 dark:text-blue-200">
            {t("L1 regularization adds the absolute value of weights to the loss function. This tends to produce sparse models where some feature weights become exactly zero, effectively performing feature selection.", 
            "L1正则化将权重的绝对值添加到损失函数中。这倾向于产生稀疏模型，其中一些特征权重恰好变为零，有效地执行特征选择。")}
          </p>
          <ul className="list-disc list-inside mt-2 text-sm text-blue-800 dark:text-blue-200">
            <li>{t("Produces sparse solutions (feature selection)", "产生稀疏解（特征选择）")}</li>
            <li>{t("Robust to outliers", "对异常值鲁棒")}</li>
            <li>{t("Useful when you suspect many features are irrelevant", "当你怀疑许多特征不相关时很有用")}</li>
          </ul>
        </div>

        <h4 className="font-semibold text-slate-900 dark:text-white mt-4 mb-2">
          L2 Regularization (Ridge)
        </h4>

        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
          <p className="text-sm mb-2">
            <strong>{t("Formula", "公式")}:</strong> Loss = MSE + λ × Σwᵢ²
          </p>
          <p className="text-sm text-green-800 dark:text-green-200">
            {t("L2 regularization adds the squared value of weights to the loss function. This penalizes large weights more heavily and tends to distribute weight values more evenly across features.", 
            "L2正则化将权重的平方值添加到损失函数中。这对大权重施加更重的惩罚，并倾向于将权重值更均匀地分布在特征上。")}
          </p>
          <ul className="list-disc list-inside mt-2 text-sm text-green-800 dark:text-green-200">
            <li>{t("Produces non-sparse solutions (all features used)", "产生非稀疏解（使用所有特征）")}</li>
            <li>{t("Computationally efficient (differentiable)", "计算高效（可微分）")}</li>
            <li>{t("Useful when most features contribute somewhat", "当大多数特征都有一定贡献时很有用")}</li>
          </ul>
        </div>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border-collapse border border-slate-300 dark:border-slate-700">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800">
                <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">{t("Property", "属性")}</th>
                <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">L1 (Lasso)</th>
                <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">L2 (Ridge)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Penalty Term", "惩罚项")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">|w|</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">w²</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-900/50">
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Solution", "解")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Sparse (some weights = 0)", "稀疏（一些权重=0）")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Dense (all weights small)", "密集（所有权重小）")}</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Feature Selection", "特征选择")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Yes (automatic)", "是（自动）")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("No", "否")}</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-900/50">
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Computational Cost", "计算成本")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Higher (non-differentiable at 0)", "更高（在0处不可微）")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Lower (always differentiable)", "更低（始终可微）")}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className="font-semibold text-slate-900 dark:text-white mt-4 mb-2">
          Dropout
        </h4>

        <p className="leading-relaxed mb-4">
          {t(
            "Dropout is a regularization technique specifically designed for neural networks. During training, random neurons are dropped out (set to zero) with probability p, forcing the network to learn redundant representations.",
            "Dropout是专门为神经网络设计的正则化技术。在训练期间，随机神经元以概率p被丢弃（设置为零），迫使网络学习冗余表示。"
          )}
        </p>

        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 my-6">
          <h4 className="font-bold text-purple-900 dark:text-purple-300 mb-2">
            {t("How Dropout Works", "Dropout如何工作")}
          </h4>
          <ol className="list-decimal list-inside space-y-1 text-purple-800 dark:text-purple-200 text-sm">
            <li>{t("During training: randomly set neurons to zero with probability p (typically 0.2-0.5)", "训练期间：以概率p随机将神经元设置为零（通常为0.2-0.5）")}</li>
            <li>{t("Scale remaining activations by 1/(1-p) to maintain expected values", "将剩余激活缩放1/(1-p)以保持期望值")}</li>
            <li>{t("During inference: use all neurons (no dropout)", "推理期间：使用所有神经元（无dropout）")}</li>
            <li>{t("Effectively trains an ensemble of 2^n thinned networks", "有效地训练2^n个精简网络的集成")}</li>
          </ol>
        </div>

        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 mb-6">
          <h4 className="font-bold text-slate-900 dark:text-white mb-4">
            {t("Dropout Best Practices", "Dropout最佳实践")}
          </h4>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>{t("Input layers: lower dropout (0.2) to preserve information", "输入层：较低的dropout（0.2）以保留信息")}</li>
            <li>{t("Hidden layers: moderate dropout (0.3-0.5)", "隐藏层：适度的dropout（0.3-0.5）")}</li>
            <li>{t("Output layers: typically no dropout", "输出层：通常无dropout")}</li>
            <li>{t("Larger networks can use higher dropout rates", "较大的网络可以使用更高的dropout率")}</li>
            <li>{t("Combine with other regularization techniques for best results", "与其他正则化技术结合以获得最佳效果")}</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
          {t("Part 2: Experiment Design and Evaluation", "第二部分：实验设计与评估")}
        </h2>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">
          4. {t("A/B Testing Fundamentals", "A/B测试基础")}
        </h3>

        <p className="leading-relaxed mb-4">
          {t(
            "A/B testing (or split testing) is the gold standard for comparing ML models in production. It involves randomly assigning users to different model variants and measuring the impact on key metrics.",
            "A/B测试（或分流测试）是生产环境中比较ML模型的黄金标准。它涉及将用户随机分配到不同的模型变体，并测量对关键指标的影响。"
          )}
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
          <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-2">
            {t("A/B Testing Process", "A/B测试流程")}
          </h4>
          <ol className="list-decimal list-inside space-y-2 text-blue-800 dark:text-blue-200 text-sm">
            <li>
              <strong>{t("Define Hypothesis", "定义假设")}:</strong> {t("Clearly state what you expect to change (e.g., Model B will increase click-through rate by 5%)", "清楚地陈述你期望改变什么（例如模型B将点击率提高5%）")}
            </li>
            <li>
              <strong>{t("Select Metrics", "选择指标")}:</strong> {t("Choose primary (decision-making) and secondary (monitoring) metrics", "选择主要（决策）和次要（监控）指标")}
            </li>
            <li>
              <strong>{t("Calculate Sample Size", "计算样本量")}:</strong> {t("Determine required users for statistical power (typically 80%)", "确定统计功效所需的样本量（通常为80%）")}
            </li>
            <li>
              <strong>{t("Random Assignment", "随机分配")}:</strong> {t("Use consistent hashing or randomization to assign users to variants", "使用一致性哈希或随机化将用户分配到变体")}
            </li>
            <li>
              <strong>{t("Run Experiment", "运行实验")}:</strong> {t("Collect data for predetermined duration or sample size", "收集预定持续时间或样本量的数据")}
            </li>
            <li>
              <strong>{t("Analyze Results", "分析结果")}:</strong> {t("Apply statistical tests and check for significance", "应用统计检验并检查显著性")}
            </li>
            <li>
              <strong>{t("Make Decision", "做出决策")}:</strong> {t("Deploy winning variant or iterate based on learnings", "部署获胜变体或基于学习进行迭代")}
            </li>
          </ol>
        </div>

        <h4 className="font-semibold text-slate-900 dark:text-white mt-4 mb-2">
          {t("Common Pitfalls in A/B Testing", "A/B测试中的常见陷阱")}
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded">
            <h5 className="font-semibold text-red-900 dark:text-red-300 mb-2">{t("Pitfalls", "陷阱")}</h5>
            <ul className="list-disc list-inside text-sm text-red-800 dark:text-red-200 space-y-1">
              <li>{t("Peeking at results early", "过早查看结果")}</li>
              <li>{t("Multiple comparison problem", "多重比较问题")}</li>
              <li>{t("Selection bias in assignment", "分配中的选择偏差")}</li>
              <li>{t("Novelty effects", "新奇效应")}</li>
              <li>{t("Network effects between variants", "变体之间的网络效应")}</li>
            </ul>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
            <h5 className="font-semibold text-green-900 dark:text-green-300 mb-2">{t("Solutions", "解决方案")}</h5>
            <ul className="list-disc list-inside text-sm text-green-800 dark:text-green-200 space-y-1">
              <li>{t("Pre-commit to sample size/duration", "预先承诺样本量/持续时间")}</li>
              <li>{t("Bonferroni correction or FDR", "Bonferroni校正或FDR")}</li>
              <li>{t("Consistent user bucketing", "一致的用户分桶")}</li>
              <li>{t("Run experiments longer", "延长实验时间")}</li>
              <li>{t("Cluster-based randomization", "基于聚类的随机化")}</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">
          5. {t("Statistical Significance", "统计显著性")}
        </h3>

        <p className="leading-relaxed mb-4">
          {t(
            "Statistical significance helps us determine whether observed differences between models are real or due to random chance. Understanding p-values, confidence intervals, and statistical power is crucial for making reliable decisions.",
            "统计显著性帮助我们确定观察到的模型之间的差异是真实的还是由于随机机会。理解p值、置信区间和统计功效对于做出可靠决策至关重要。"
          )}
        </p>

        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 mb-6">
          <h4 className="font-bold text-slate-900 dark:text-white mb-4">
            {t("Key Concepts", "关键概念")}
          </h4>
          
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-slate-900 dark:text-white">{t("P-Value", "P值")}</h5>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {t("The probability of observing your results (or more extreme) if the null hypothesis is true. Typically, p < 0.05 is considered statistically significant.", 
                "如果零假设为真，观察到你的结果（或更极端）的概率。通常，p < 0.05被认为是统计显著的。")}
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold text-slate-900 dark:text-white">{t("Confidence Interval (CI)", "置信区间(CI)")}</h5>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {t("A range of values within which the true effect likely falls. 95% CI means if you repeated the experiment 100 times, 95 intervals would contain the true effect.", 
                "真实效应可能落入的值的范围。95% CI意味着如果你重复实验100次，95个区间将包含真实效应。")}
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold text-slate-900 dark:text-white">{t("Statistical Power", "统计功效")}</h5>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {t("The probability of correctly rejecting the null hypothesis when it's false. Standard is 80% power (β = 0.2).", 
                "当零假设为假时正确拒绝它的概率。标准是80%功效（β = 0.2）。")}
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold text-slate-900 dark:text-white">{t("Effect Size", "效应量")}</h5>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {t("The magnitude of the difference, independent of sample size. Small effect sizes require larger samples to detect.", 
                "差异的大小，与样本量无关。小效应量需要更大的样本才能检测到。")}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6">
          <h4 className="font-bold text-yellow-900 dark:text-yellow-300 mb-2">
            {t("Sample Size Formula", "样本量公式")}
          </h4>
          <p className="text-sm text-yellow-800 dark:text-yellow-200 mb-2">
            {t("For comparing two proportions with equal sample sizes:", "对于比较两个比例且样本量相等的情况：")}
          </p>
          <div className="bg-white dark:bg-slate-900 p-3 rounded font-mono text-sm mb-2">
            n = 2 × (Z₁₋α/₂ + Z₁₋β)² × p(1-p) / δ²
          </div>
          <p className="text-xs text-yellow-800 dark:text-yellow-200">
            {t("Where: Z = Z-scores for confidence level and power, p = pooled proportion, δ = minimum detectable effect", 
            "其中：Z = 置信水平和功效的Z分数，p = 合并比例，δ = 最小可检测效应")}
          </p>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">
          6. {t("Offline vs Online Evaluation", "离线评估与在线评估")}
        </h3>

        <p className="leading-relaxed mb-4">
          {t(
            "Both offline and online evaluation are essential for building reliable ML systems. Each serves different purposes and has distinct advantages and limitations.",
            "离线评估和在线评估对于构建可靠的ML系统都是必不可少的。每个服务于不同的目的，具有不同的优势和局限性。"
          )}
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border-collapse border border-slate-300 dark:border-slate-700">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800">
                <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">{t("Aspect", "方面")}</th>
                <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">{t("Offline Evaluation", "离线评估")}</th>
                <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">{t("Online Evaluation", "在线评估")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Speed", "速度")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Fast (minutes to hours)", "快（分钟到小时）")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Slow (days to weeks)", "慢（天到周）")}</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-900/50">
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Cost", "成本")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Low (compute only)", "低（仅计算）")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("High (business impact risk)", "高（业务影响风险）")}</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Realism", "真实性")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Limited (historical data)", "有限（历史数据）")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("High (actual user behavior)", "高（实际用户行为）")}</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-900/50">
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Metrics", "指标")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Accuracy, Precision, Recall", "准确率、精确率、召回率")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("CTR, Conversion, Revenue", "点击率、转化率、收入")}</td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Use Case", "用例")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Model selection, Hyperparameter tuning", "模型选择、超参数调优")}</td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">{t("Final validation, Business impact", "最终验证、业务影响")}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
          <h4 className="font-bold text-green-900 dark:text-green-300 mb-2">
            {t("Best Practice: Combined Approach", "最佳实践：组合方法")}
          </h4>
          <ol className="list-decimal list-inside space-y-1 text-green-800 dark:text-green-200 text-sm">
            <li>{t("Use offline evaluation for rapid iteration and model selection", "使用离线评估进行快速迭代和模型选择")}</li>
            <li>{t("Validate top candidates with shadow deployment (serve predictions but don't use them)", "使用影子部署验证顶级候选（提供预测但不使用它们）")}</li>
            <li>{t("Run A/B test for final candidates before full rollout", "在全面推出之前对最终候选进行A/B测试")}</li>
            <li>{t("Monitor online metrics continuously after deployment", "部署后持续监控在线指标")}</li>
          </ol>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
          {t("Part 3: Experiment Summary Template", "第三部分：实验总结模板")}
        </h2>

        <p className="leading-relaxed mb-4">
          {t(
            "A well-structured experiment summary ensures reproducibility and helps stakeholders understand your work. Here's a comprehensive template:",
            "结构良好的实验总结确保可重复性，并帮助利益相关者理解你的工作。这里是一个综合模板："
          )}
        </p>

        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 mb-6">
          <h3 className="font-bold text-slate-900 dark:text-white mb-4">
            {t("ML Experiment Summary Template", "机器学习实验总结模板")}
          </h3>
          
          <div className="space-y-4 text-sm">
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white">1. {t("Objective", "目标")}</h4>
              <p className="text-slate-600 dark:text-slate-400">
                {t("What problem are you solving? What business metric are you trying to improve?", "你在解决什么问题？你试图改进什么业务指标？")}
              </p>
              <div className="bg-white dark:bg-slate-900 p-2 rounded mt-1 text-xs italic">
                {t("Example: Improve click-through rate on product recommendations by 10%", "示例：将产品推荐的点击率提高10%")}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white">2. {t("Hypothesis", "假设")}</h4>
              <p className="text-slate-600 dark:text-slate-400">
                {t("What is your expected outcome? What changes did you make?", "你的预期结果是什么？你做了什么改变？")}
              </p>
              <div className="bg-white dark:bg-slate-900 p-2 rounded mt-1 text-xs italic">
                {t("Example: Adding user browsing history features will improve recommendation relevance", "示例：添加用户浏览历史特征将提高推荐相关性")}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white">3. {t("Methodology", "方法")}</h4>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
                <li>{t("Dataset: Size, time period, preprocessing steps", "数据集：大小、时间段、预处理步骤")}</li>
                <li>{t("Model: Architecture, hyperparameters", "模型：架构、超参数")}</li>
                <li>{t("Training: Loss function, optimizer, epochs, regularization", "训练：损失函数、优化器、轮数、正则化")}</li>
                <li>{t("Evaluation: Metrics, validation strategy", "评估：指标、验证策略")}</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white">4. {t("Results", "结果")}</h4>
              <table className="w-full text-xs mt-2">
                <thead>
                  <tr className="bg-slate-200 dark:bg-slate-700">
                    <th className="p-1 text-left">{t("Metric", "指标")}</th>
                    <th className="p-1 text-left">{t("Baseline", "基线")}</th>
                    <th className="p-1 text-left">{t("New Model", "新模型")}</th>
                    <th className="p-1 text-left">{t("Change", "变化")}</th>
                    <th className="p-1 text-left">{t("P-Value", "P值")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-1">Accuracy</td>
                    <td className="p-1">0.82</td>
                    <td className="p-1">0.86</td>
                    <td className="p-1 text-green-600">+4.9%</td>
                    <td className="p-1">&lt;0.001</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-900/50">
                    <td className="p-1">Precision</td>
                    <td className="p-1">0.78</td>
                    <td className="p-1">0.81</td>
                    <td className="p-1 text-green-600">+3.8%</td>
                    <td className="p-1">0.003</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white">5. {t("Analysis", "分析")}</h4>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1">
                <li>{t("What worked well?", "什么效果好？")}</li>
                <li>{t("What didn't work?", "什么效果不好？")}</li>
                <li>{t("Unexpected findings", "意外发现")}</li>
                <li>{t("Bias/variance analysis", "偏差/方差分析")}</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white">6. {t("Conclusions & Next Steps", "结论与下一步")}</h4>
              <p className="text-slate-600 dark:text-slate-400">
                {t("Should this model be deployed? What further experiments are needed?", "这个模型应该部署吗？需要什么进一步的实验？")}
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
          {t("Conclusion", "结论")}
        </h2>

        <p className="leading-relaxed mb-4">
          {t(
            "Building reliable machine learning systems requires more than just training accurate models. Understanding bias-variance tradeoffs, applying appropriate regularization, and designing rigorous experiments are essential skills for any ML practitioner.",
            "构建可靠的机器学习系统需要的不仅仅是训练准确的模型。理解偏差-方差权衡、应用适当的正则化以及设计严格的实验是任何ML从业者的必备技能。"
          )}
        </p>

        <p className="leading-relaxed mb-4">
          {t(
            "Remember these key principles:",
            "记住这些关键原则："
          )}
        </p>

        <ul className="list-disc list-inside space-y-2 mb-6">
          <li className="leading-relaxed">
            <strong>{t("Start simple", "从简单开始")}:</strong> {t("Begin with simple models to establish a baseline before adding complexity", "在增加复杂性之前，从简单模型开始建立基线")}
          </li>
          <li className="leading-relaxed">
            <strong>{t("Validate rigorously", "严格验证")}:</strong> {t("Use cross-validation, hold-out sets, and statistical tests to ensure your results are robust", "使用交叉验证、留出集和统计检验来确保你的结果是稳健的")}
          </li>
          <li className="leading-relaxed">
            <strong>{t("Monitor online", "在线监控")}:</strong> {t("Offline metrics don't always translate to business value—always validate in production", "离线指标并不总是转化为业务价值——始终在生产环境中验证")}
          </li>
          <li className="leading-relaxed">
            <strong>{t("Document everything", "记录一切")}:</strong> {t("Use structured experiment summaries to ensure reproducibility and knowledge sharing", "使用结构化的实验总结来确保可重复性和知识共享")}
          </li>
        </ul>

        <p className="leading-relaxed">
          {t(
            "By mastering these concepts and following systematic evaluation practices, you'll be well-equipped to build ML systems that not only perform well in development but also deliver real value in production.",
            "通过掌握这些概念并遵循系统的评估实践，你将能够很好地构建不仅在开发中表现良好，而且在生产中也能提供真正价值的ML系统。"
          )}
        </p>
      </div>

      {/* Tags */}
      <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
        <div className="flex items-center gap-2 mb-4">
          <Tag size={18} className="text-slate-600 dark:text-slate-400" />
          <span className="font-medium text-slate-900 dark:text-white">
            {t("Tags", "标签")}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {["Machine Learning", "Model Evaluation", "A/B Testing", "Regularization", "Statistics", "Experiment Design", "Overfitting", "Bias-Variance", "MLOps"].map(
            (tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>
    </article>
  );
}
