(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,87316,3116,51975,e=>{"use strict";var t=e.i(75254);let s=(0,t.default)("calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);e.s(["Calendar",0,s],87316);let a=(0,t.default)("clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]);e.s(["Clock",0,a],3116);let l=(0,t.default)("tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);e.s(["Tag",0,l],51975)},71689,e=>{"use strict";let t=(0,e.i(75254).default)("arrow-left",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);e.s(["ArrowLeft",0,t],71689)},42358,e=>{"use strict";var t=e.i(43476),s=e.i(68118),a=e.i(87316),l=e.i(3116),n=e.i(51975),r=e.i(71689),d=e.i(22016);e.s(["default",0,function(){let{t:e}=(0,s.useLanguage)();return(0,t.jsxs)("article",{className:"max-w-4xl mx-auto",children:[(0,t.jsxs)(d.default,{href:"/",className:"inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8",children:[(0,t.jsx)(r.ArrowLeft,{size:20}),e("Back to Home","返回首页")]}),(0,t.jsxs)("header",{className:"mb-8",children:[(0,t.jsxs)("div",{className:"flex flex-wrap gap-2 mb-4",children:[(0,t.jsx)("span",{className:"px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium",children:"Transformer"}),(0,t.jsx)("span",{className:"px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium",children:"Attention Mechanism"}),(0,t.jsx)("span",{className:"px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium",children:"Deep Learning"})]}),(0,t.jsx)("h1",{className:"text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight",children:e("Attention Is All You Need: A Deep Dive into the Transformer Architecture","Attention Is All You Need：深入理解Transformer架构")}),(0,t.jsxs)("div",{className:"flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-400",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(a.Calendar,{size:18}),(0,t.jsx)("span",{children:"June 12, 2026"})]}),(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(l.Clock,{size:18}),(0,t.jsx)("span",{children:e("20 min read","20分钟阅读")})]})]})]}),(0,t.jsxs)("div",{className:"prose prose-slate dark:prose-invert max-w-none",children:[(0,t.jsx)("p",{className:"text-lg leading-relaxed mb-6",children:e("The 2017 paper Attention Is All You Need by Vaswani et al. introduced the Transformer architecture, revolutionizing natural language processing and becoming the foundation for modern AI systems like GPT, BERT, and Claude. This article provides a comprehensive explanation of the attention mechanism with mathematical intuition and complete code implementation.","Vaswani等人在2017年发表的论文Attention Is All You Need引入了Transformer架构，彻底改变了自然语言处理，并成为GPT、BERT和Claude等现代AI系统的基础。本文全面解释了注意力机制，包含数学直觉和完整的代码实现。")}),(0,t.jsx)("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4",children:e("Part 1: Understanding the Attention Mechanism","第一部分：理解注意力机制")}),(0,t.jsx)("h3",{className:"text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3",children:e("The Intuition Behind Attention","注意力背后的直觉")}),(0,t.jsx)("p",{className:"leading-relaxed mb-4",children:e("When humans read a sentence, we don't process every word with equal focus. Our attention dynamically shifts based on context. The attention mechanism in Transformers mimics this behavior, allowing the model to focus on relevant parts of the input when producing each output.","当人类阅读句子时，我们不会以相同的关注度处理每个词。我们的注意力会根据上下文动态转移。Transformer中的注意力机制模仿这种行为，允许模型在产生每个输出时关注输入的相关部分。")}),(0,t.jsxs)("div",{className:"bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6",children:[(0,t.jsx)("h4",{className:"font-bold text-blue-900 dark:text-blue-300 mb-2",children:e("Analogy: Information Retrieval","类比：信息检索")}),(0,t.jsx)("p",{className:"text-sm text-blue-800 dark:text-blue-200",children:e("Imagine a library search system:","想象一个图书馆搜索系统：")}),(0,t.jsxs)("ul",{className:"list-disc list-inside mt-2 text-sm text-blue-800 dark:text-blue-200 space-y-1",children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Query (查询)"}),": ",e("Your search question","你的搜索问题")]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Key (键)"}),": ",e("Book titles and index entries","书名和索引条目")]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Value (值)"}),": ",e("The actual book content","实际的书籍内容")]})]}),(0,t.jsx)("p",{className:"text-sm text-blue-800 dark:text-blue-200 mt-2",children:e("The attention mechanism computes similarity between your query and all keys, then retrieves values weighted by relevance.","注意力机制计算你的查询与所有键之间的相似度，然后按相关性加权检索值。")})]}),(0,t.jsx)("h3",{className:"text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3",children:e("Query, Key, and Value Explained","Query、Key和Value详解")}),(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 my-6",children:[(0,t.jsxs)("div",{className:"bg-slate-50 dark:bg-slate-800 p-4 rounded text-center",children:[(0,t.jsx)("div",{className:"text-3xl mb-2",children:"❓"}),(0,t.jsx)("h4",{className:"font-semibold text-slate-900 dark:text-white mb-1",children:"Query (Q)"}),(0,t.jsx)("p",{className:"text-xs text-slate-600 dark:text-slate-400",children:e("What am I looking for?","我在寻找什么？")}),(0,t.jsx)("p",{className:"text-xs text-slate-500 dark:text-slate-500 mt-2",children:e("Represents the current token's request for information","表示当前token对信息的请求")})]}),(0,t.jsxs)("div",{className:"bg-slate-50 dark:bg-slate-800 p-4 rounded text-center",children:[(0,t.jsx)("div",{className:"text-3xl mb-2",children:"🔑"}),(0,t.jsx)("h4",{className:"font-semibold text-slate-900 dark:text-white mb-1",children:"Key (K)"}),(0,t.jsx)("p",{className:"text-xs text-slate-600 dark:text-slate-400",children:e("What do I contain?","我包含什么？")}),(0,t.jsx)("p",{className:"text-xs text-slate-500 dark:text-slate-500 mt-2",children:e("Represents each token's identifier for matching","表示每个token用于匹配的标识符")})]}),(0,t.jsxs)("div",{className:"bg-slate-50 dark:bg-slate-800 p-4 rounded text-center",children:[(0,t.jsx)("div",{className:"text-3xl mb-2",children:"📄"}),(0,t.jsx)("h4",{className:"font-semibold text-slate-900 dark:text-white mb-1",children:"Value (V)"}),(0,t.jsx)("p",{className:"text-xs text-slate-600 dark:text-slate-400",children:e("What information do I provide?","我提供什么信息？")}),(0,t.jsx)("p",{className:"text-xs text-slate-500 dark:text-slate-500 mt-2",children:e("Represents the actual content to be retrieved","表示要检索的实际内容")})]})]}),(0,t.jsx)("h3",{className:"text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3",children:e("The Attention Formula","注意力公式")}),(0,t.jsxs)("div",{className:"bg-slate-100 dark:bg-slate-800 rounded-lg p-6 mb-6",children:[(0,t.jsx)("h4",{className:"font-bold text-slate-900 dark:text-white mb-4 text-center",children:"Scaled Dot-Product Attention"}),(0,t.jsx)("div",{className:"bg-white dark:bg-slate-900 p-4 rounded text-center font-mono text-lg",children:"Attention(Q, K, V) = softmax(QK^T / √d_k) V"}),(0,t.jsxs)("div",{className:"mt-4 space-y-2 text-sm",children:[(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:"Q"}),": ",e("Query matrix (sequence_length × d_k)","查询矩阵（序列长度 × d_k）")]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:"K"}),": ",e("Key matrix (sequence_length × d_k)","键矩阵（序列长度 × d_k）")]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:"V"}),": ",e("Value matrix (sequence_length × d_v)","值矩阵（序列长度 × d_v）")]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:"d_k"}),": ",e("Dimension of keys (used for scaling)","键的维度（用于缩放）")]})]})]}),(0,t.jsx)("h4",{className:"font-semibold text-slate-900 dark:text-white mt-4 mb-2",children:e("Step-by-Step Breakdown","逐步分解")}),(0,t.jsxs)("div",{className:"space-y-4 my-6",children:[(0,t.jsxs)("div",{className:"flex items-start gap-4",children:[(0,t.jsx)("div",{className:"bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold",children:"1"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h5",{className:"font-semibold",children:e("Compute Similarity Scores","计算相似度分数")}),(0,t.jsx)("p",{className:"text-sm text-slate-600 dark:text-slate-400",children:e("QK^T: Matrix multiplication between Query and Key transposed. Each entry (i,j) represents how much token i should attend to token j.","QK^T：查询与转置键之间的矩阵乘法。每个条目(i,j)表示token i应该关注token j的程度。")})]})]}),(0,t.jsxs)("div",{className:"flex items-start gap-4",children:[(0,t.jsx)("div",{className:"bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold",children:"2"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h5",{className:"font-semibold",children:e("Scale by √d_k","按√d_k缩放")}),(0,t.jsx)("p",{className:"text-sm text-slate-600 dark:text-slate-400",children:e("Prevents dot products from growing too large in magnitude, which would push softmax into regions with extremely small gradients.","防止点积幅度变得太大，这会将softmax推入梯度极小的区域。")})]})]}),(0,t.jsxs)("div",{className:"flex items-start gap-4",children:[(0,t.jsx)("div",{className:"bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold",children:"3"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h5",{className:"font-semibold",children:e("Apply Softmax","应用Softmax")}),(0,t.jsx)("p",{className:"text-sm text-slate-600 dark:text-slate-400",children:e("Converts scores to probabilities that sum to 1. Higher scores get higher weight in the weighted sum.","将分数转换为总和为1的概率。更高的分数在加权和中获得更高的权重。")})]})]}),(0,t.jsxs)("div",{className:"flex items-start gap-4",children:[(0,t.jsx)("div",{className:"bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold",children:"4"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h5",{className:"font-semibold",children:e("Weighted Sum of Values","值的加权和")}),(0,t.jsx)("p",{className:"text-sm text-slate-600 dark:text-slate-400",children:e("Multiply attention weights by Value matrix to get the final output representation.","将注意力权重与值矩阵相乘以获得最终输出表示。")})]})]})]}),(0,t.jsx)("h3",{className:"text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3",children:e("Self-Attention Explained","自注意力详解")}),(0,t.jsx)("p",{className:"leading-relaxed mb-4",children:e("Self-attention is a special case where Q, K, and V all come from the same input sequence. Each token attends to all other tokens in the same sequence, allowing the model to capture contextual relationships.","自注意力是一种特殊情况，其中Q、K和V都来自相同的输入序列。每个token关注同一序列中的所有其他token，允许模型捕获上下文关系。")}),(0,t.jsxs)("div",{className:"bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6",children:[(0,t.jsx)("h4",{className:"font-bold text-green-900 dark:text-green-300 mb-2",children:e("Why Self-Attention is Powerful","为什么自注意力很强大")}),(0,t.jsxs)("ul",{className:"list-disc list-inside space-y-1 text-green-800 dark:text-green-200 text-sm",children:[(0,t.jsx)("li",{children:e("Long-range dependencies: Any token can directly attend to any other token","长距离依赖：任何token可以直接关注任何其他token")}),(0,t.jsx)("li",{children:e("Parallel computation: All attention scores computed simultaneously","并行计算：所有注意力分数同时计算")}),(0,t.jsx)("li",{children:e("Interpretability: Attention weights show which tokens influence each other","可解释性：注意力权重显示哪些token相互影响")}),(0,t.jsx)("li",{children:e("Contextual representation: Each token's meaning depends on its context","上下文表示：每个token的含义取决于其上下文")})]})]}),(0,t.jsx)("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4",children:e("Part 2: Complete Transformer Architecture","第二部分：完整Transformer架构")}),(0,t.jsx)("h3",{className:"text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3",children:e("Transformer Structure Overview","Transformer结构概览")}),(0,t.jsx)("div",{className:"bg-slate-100 dark:bg-slate-800 rounded-lg p-6 mb-6",children:(0,t.jsx)("pre",{className:"text-xs overflow-x-auto",children:`
Input Embedding
      ↓
Positional Encoding
      ↓
┌─────────────────────────────────────┐
│         Encoder (Nx layers)          │
│  ┌───────────────────────────────┐  │
│  │  Multi-Head Attention         │  │
│  │  + Add & Norm                 │  │
│  └───────────────────────────────┘  │
│              ↓                      │
│  ┌───────────────────────────────┐  │
│  │  Feed Forward                 │  │
│  │  + Add & Norm                 │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│         Decoder (Nx layers)          │
│  ┌───────────────────────────────┐  │
│  │  Masked Multi-Head Attention  │  │
│  │  + Add & Norm                 │  │
│  └───────────────────────────────┘  │
│              ↓                      │
│  ┌───────────────────────────────┐  │
│  │  Cross-Attention              │  │
│  │  + Add & Norm                 │  │
│  └───────────────────────────────┘  │
│              ↓                      │
│  ┌───────────────────────────────┐  │
│  │  Feed Forward                 │  │
│  │  + Add & Norm                 │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
              ↓
        Linear + Softmax
              ↓
          Output
`})}),(0,t.jsx)("h3",{className:"text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3",children:e("Multi-Head Attention","多头注意力")}),(0,t.jsx)("p",{className:"leading-relaxed mb-4",children:e("Instead of performing a single attention function, the Transformer uses multiple attention heads that learn different representation subspaces. This allows the model to jointly attend to information from different positions at different levels.","Transformer不是执行单个注意力函数，而是使用多个学习不同表示子空间的注意力头。这允许模型在不同层次上联合关注来自不同位置的信息。")}),(0,t.jsxs)("div",{className:"bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 my-6",children:[(0,t.jsx)("h4",{className:"font-bold text-purple-900 dark:text-purple-300 mb-2",children:"MultiHead(Q, K, V) = Concat(head_1, ..., head_h) W^O"}),(0,t.jsx)("p",{className:"text-sm text-purple-800 dark:text-purple-200",children:"where head_i = Attention(QW_i^Q, KW_i^K, VW_i^V)"})]}),(0,t.jsx)("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4",children:e("Part 3: Code Implementation","第三部分：代码实现")}),(0,t.jsx)("h3",{className:"text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3",children:e("Single Head Attention in PyTorch","PyTorch中的单头注意力")}),(0,t.jsx)("div",{className:"bg-slate-900 rounded-lg p-4 overflow-x-auto mb-6",children:(0,t.jsx)("pre",{className:"text-sm text-slate-100",children:`import torch
import torch.nn as nn
import math

class SingleHeadAttention(nn.Module):
    def __init__(self, d_model):
        super().__init__()
        self.d_model = d_model
        
        # Linear projections for Q, K, V
        self.W_q = nn.Linear(d_model, d_model)
        self.W_k = nn.Linear(d_model, d_model)
        self.W_v = nn.Linear(d_model, d_model)
        
    def forward(self, x, mask=None):
        """
        Args:
            x: Input tensor of shape (batch_size, seq_len, d_model)
            mask: Optional mask tensor
        Returns:
            output: Attention output of shape (batch_size, seq_len, d_model)
            attention_weights: Attention weights for visualization
        """
        batch_size, seq_len, d_model = x.shape
        
        # Step 1: Compute Q, K, V
        Q = self.W_q(x)  # (batch_size, seq_len, d_model)
        K = self.W_k(x)  # (batch_size, seq_len, d_model)
        V = self.W_v(x)  # (batch_size, seq_len, d_model)
        
        # Step 2: Compute attention scores
        # QK^T: (batch_size, seq_len, seq_len)
        scores = torch.matmul(Q, K.transpose(-2, -1))
        
        # Step 3: Scale by sqrt(d_model)
        scores = scores / math.sqrt(d_model)
        
        # Step 4: Apply mask (if provided)
        if mask is not None:
            scores = scores.masked_fill(mask == 0, float('-inf'))
        
        # Step 5: Apply softmax
        attention_weights = torch.softmax(scores, dim=-1)
        
        # Step 6: Weighted sum of values
        output = torch.matmul(attention_weights, V)
        
        return output, attention_weights


# Example usage
if __name__ == "__main__":
    # Parameters
    batch_size = 2
    seq_len = 4
    d_model = 8
    
    # Create random input
    x = torch.randn(batch_size, seq_len, d_model)
    
    # Initialize attention module
    attention = SingleHeadAttention(d_model)
    
    # Forward pass
    output, weights = attention(x)
    
    print(f"Input shape: {x.shape}")
    print(f"Output shape: {output.shape}")
    print(f"Attention weights shape: {weights.shape}")
    print(f"\\nAttention weights (first sample):")
    print(weights[0].round(decimals=3))`})}),(0,t.jsx)("h3",{className:"text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3",children:e("Multi-Head Attention Implementation","多头注意力实现")}),(0,t.jsx)("div",{className:"bg-slate-900 rounded-lg p-4 overflow-x-auto mb-6",children:(0,t.jsx)("pre",{className:"text-sm text-slate-100",children:`class MultiHeadAttention(nn.Module):
    def __init__(self, d_model, num_heads):
        super().__init__()
        assert d_model % num_heads == 0, "d_model must be divisible by num_heads"
        
        self.d_model = d_model
        self.num_heads = num_heads
        self.d_k = d_model // num_heads  # Dimension per head
        
        # Linear projections
        self.W_q = nn.Linear(d_model, d_model)
        self.W_k = nn.Linear(d_model, d_model)
        self.W_v = nn.Linear(d_model, d_model)
        self.W_o = nn.Linear(d_model, d_model)
        
    def scaled_dot_product_attention(self, Q, K, V, mask=None):
        """
        Compute attention for all heads in parallel
        Q, K, V: (batch_size, num_heads, seq_len, d_k)
        """
        scores = torch.matmul(Q, K.transpose(-2, -1)) / math.sqrt(self.d_k)
        
        if mask is not None:
            scores = scores.masked_fill(mask == 0, float('-inf'))
        
        attention_weights = torch.softmax(scores, dim=-1)
        output = torch.matmul(attention_weights, V)
        
        return output, attention_weights
    
    def forward(self, x, mask=None):
        batch_size, seq_len, d_model = x.shape
        
        # Linear projections and reshape for multi-head
        # (batch_size, seq_len, d_model) -> (batch_size, num_heads, seq_len, d_k)
        Q = self.W_q(x).view(batch_size, seq_len, self.num_heads, self.d_k).transpose(1, 2)
        K = self.W_k(x).view(batch_size, seq_len, self.num_heads, self.d_k).transpose(1, 2)
        V = self.W_v(x).view(batch_size, seq_len, self.num_heads, self.d_k).transpose(1, 2)
        
        # Apply attention to all heads
        attn_output, weights = self.scaled_dot_product_attention(Q, K, V, mask)
        
        # Concatenate heads and apply final linear
        # (batch_size, num_heads, seq_len, d_k) -> (batch_size, seq_len, d_model)
        attn_output = attn_output.transpose(1, 2).contiguous().view(batch_size, seq_len, d_model)
        output = self.W_o(attn_output)
        
        return output, weights


# Example usage
mha = MultiHeadAttention(d_model=512, num_heads=8)
x = torch.randn(2, 10, 512)  # (batch_size, seq_len, d_model)
output, weights = mha(x)
print(f"Multi-head output shape: {output.shape}")  # (2, 10, 512)
print(f"Attention weights shape: {weights.shape}")  # (2, 8, 10, 10)`})}),(0,t.jsx)("h3",{className:"text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3",children:e("Complete Transformer Encoder Layer","完整Transformer编码器层")}),(0,t.jsx)("div",{className:"bg-slate-900 rounded-lg p-4 overflow-x-auto mb-6",children:(0,t.jsx)("pre",{className:"text-sm text-slate-100",children:`class TransformerEncoderLayer(nn.Module):
    def __init__(self, d_model, num_heads, d_ff, dropout=0.1):
        super().__init__()
        
        # Multi-head attention
        self.self_attn = MultiHeadAttention(d_model, num_heads)
        
        # Feed-forward network
        self.ffn = nn.Sequential(
            nn.Linear(d_model, d_ff),
            nn.ReLU(),
            nn.Dropout(dropout),
            nn.Linear(d_ff, d_model)
        )
        
        # Layer normalization
        self.norm1 = nn.LayerNorm(d_model)
        self.norm2 = nn.LayerNorm(d_model)
        
        # Dropout
        self.dropout = nn.Dropout(dropout)
        
    def forward(self, x, mask=None):
        # Self-attention with residual connection
        attn_output, _ = self.self_attn(x, mask)
        x = self.norm1(x + self.dropout(attn_output))
        
        # Feed-forward with residual connection
        ffn_output = self.ffn(x)
        x = self.norm2(x + self.dropout(ffn_output))
        
        return x`})}),(0,t.jsx)("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4",children:e("Part 4: Visualizing Attention","第四部分：可视化注意力")}),(0,t.jsx)("h3",{className:"text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3",children:e("Attention Pattern Examples","注意力模式示例")}),(0,t.jsxs)("div",{className:"bg-slate-100 dark:bg-slate-800 rounded-lg p-6 mb-6",children:[(0,t.jsx)("h4",{className:"font-bold text-slate-900 dark:text-white mb-4",children:e("Example: The cat sat on the mat","示例：The cat sat on the mat")}),(0,t.jsx)("div",{className:"overflow-x-auto",children:(0,t.jsxs)("table",{className:"w-full text-sm",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{className:"bg-slate-200 dark:bg-slate-700",children:[(0,t.jsx)("th",{className:"p-2"}),(0,t.jsx)("th",{className:"p-2",children:"The"}),(0,t.jsx)("th",{className:"p-2",children:"cat"}),(0,t.jsx)("th",{className:"p-2",children:"sat"}),(0,t.jsx)("th",{className:"p-2",children:"on"}),(0,t.jsx)("th",{className:"p-2",children:"the"}),(0,t.jsx)("th",{className:"p-2",children:"mat"})]})}),(0,t.jsxs)("tbody",{className:"text-center",children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"p-2 font-semibold bg-slate-200 dark:bg-slate-700",children:"The"}),(0,t.jsx)("td",{className:"p-2 bg-yellow-200 dark:bg-yellow-900",children:"0.4"}),(0,t.jsx)("td",{className:"p-2",children:"0.2"}),(0,t.jsx)("td",{className:"p-2",children:"0.1"}),(0,t.jsx)("td",{className:"p-2",children:"0.1"}),(0,t.jsx)("td",{className:"p-2",children:"0.1"}),(0,t.jsx)("td",{className:"p-2",children:"0.1"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"p-2 font-semibold bg-slate-200 dark:bg-slate-700",children:"cat"}),(0,t.jsx)("td",{className:"p-2",children:"0.2"}),(0,t.jsx)("td",{className:"p-2 bg-yellow-200 dark:bg-yellow-900",children:"0.3"}),(0,t.jsx)("td",{className:"p-2 bg-yellow-200 dark:bg-yellow-900",children:"0.3"}),(0,t.jsx)("td",{className:"p-2",children:"0.1"}),(0,t.jsx)("td",{className:"p-2",children:"0.05"}),(0,t.jsx)("td",{className:"p-2",children:"0.05"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"p-2 font-semibold bg-slate-200 dark:bg-slate-700",children:"sat"}),(0,t.jsx)("td",{className:"p-2",children:"0.1"}),(0,t.jsx)("td",{className:"p-2 bg-yellow-200 dark:bg-yellow-900",children:"0.3"}),(0,t.jsx)("td",{className:"p-2 bg-yellow-200 dark:bg-yellow-900",children:"0.3"}),(0,t.jsx)("td",{className:"p-2 bg-yellow-200 dark:bg-yellow-900",children:"0.2"}),(0,t.jsx)("td",{className:"p-2",children:"0.05"}),(0,t.jsx)("td",{className:"p-2",children:"0.05"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:"p-2 font-semibold bg-slate-200 dark:bg-slate-700",children:"mat"}),(0,t.jsx)("td",{className:"p-2",children:"0.05"}),(0,t.jsx)("td",{className:"p-2",children:"0.05"}),(0,t.jsx)("td",{className:"p-2",children:"0.1"}),(0,t.jsx)("td",{className:"p-2 bg-yellow-200 dark:bg-yellow-900",children:"0.2"}),(0,t.jsx)("td",{className:"p-2 bg-yellow-200 dark:bg-yellow-900",children:"0.3"}),(0,t.jsx)("td",{className:"p-2 bg-yellow-200 dark:bg-yellow-900",children:"0.3"})]})]})]})}),(0,t.jsx)("p",{className:"text-xs text-slate-600 dark:text-slate-400 mt-4",children:e("Yellow cells show strong attention. Notice how 'sat' attends to both 'cat' (subject) and 'mat' (location), demonstrating contextual understanding.","黄色单元格显示强注意力。注意'sat'如何关注'cat'（主语）和'mat'（位置），展示了上下文理解。")})]}),(0,t.jsx)("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4",children:e("Conclusion","结论")}),(0,t.jsx)("p",{className:"leading-relaxed mb-4",children:e("The Transformer architecture, powered by the attention mechanism, has fundamentally changed how we approach sequence modeling. By understanding Query, Key, and Value, and implementing the attention formula Attention(Q,K,V) = softmax(QK^T/√d_k)V, we can build models that capture complex relationships in data.","由注意力机制驱动的Transformer架构从根本上改变了我们处理序列建模的方式。通过理解Query、Key和Value，并实现注意力公式Attention(Q,K,V) = softmax(QK^T/√d_k)V，我们可以构建捕获数据中复杂关系的模型。")}),(0,t.jsx)("p",{className:"leading-relaxed mb-4",children:e("Key takeaways from this article:","本文的关键要点：")}),(0,t.jsxs)("ul",{className:"list-disc list-inside space-y-2 mb-6",children:[(0,t.jsxs)("li",{className:"leading-relaxed",children:[(0,t.jsx)("strong",{children:"Attention is a weighted retrieval mechanism"}),": ",e("Query searches for relevant Keys to retrieve Values","Query搜索相关的Key来检索Value")]}),(0,t.jsxs)("li",{className:"leading-relaxed",children:[(0,t.jsx)("strong",{children:"Scaling is crucial"}),": ",e("Dividing by √d_k prevents softmax saturation","除以√d_k防止softmax饱和")]}),(0,t.jsxs)("li",{className:"leading-relaxed",children:[(0,t.jsx)("strong",{children:"Multi-head attention enables diverse representations"}),": ",e("Different heads learn different patterns","不同的头学习不同的模式")]}),(0,t.jsxs)("li",{className:"leading-relaxed",children:[(0,t.jsx)("strong",{children:"Self-attention captures context"}),": ",e("Each token's representation depends on all other tokens","每个token的表示依赖于所有其他token")]})]}),(0,t.jsx)("p",{className:"leading-relaxed",children:e("The code implementations provided here form the building blocks for understanding modern NLP systems. From this foundation, you can explore more advanced topics like positional encoding, masked attention for decoding, and the full encoder-decoder architecture used in machine translation and text generation.","本文提供的代码实现构成了理解现代NLP系统的构建块。从这个基础出发，你可以探索更高级的主题，如位置编码、用于解码的掩码注意力，以及机器翻译和文本生成中使用的完整编码器-解码器架构。")})]}),(0,t.jsxs)("div",{className:"mt-12 pt-8 border-t border-slate-200 dark:border-slate-700",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 mb-4",children:[(0,t.jsx)(n.Tag,{size:18,className:"text-slate-600 dark:text-slate-400"}),(0,t.jsx)("span",{className:"font-medium text-slate-900 dark:text-white",children:e("Tags","标签")})]}),(0,t.jsx)("div",{className:"flex flex-wrap gap-2",children:["Transformer","Attention Mechanism","Deep Learning","NLP","PyTorch","Self-Attention","Neural Networks","Machine Learning"].map(e=>(0,t.jsx)("span",{className:"px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm",children:e},e))})]})]})}])}]);