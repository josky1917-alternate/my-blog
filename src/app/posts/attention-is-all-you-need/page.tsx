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
            Transformer
          </span>
          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
            Attention Mechanism
          </span>
          <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
            Deep Learning
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
          {t(
            "Attention Is All You Need: A Deep Dive into the Transformer Architecture",
            "Attention Is All You Need：深入理解Transformer架构"
          )}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span>June 12, 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={18} />
            <span>{t("20 min read", "20分钟阅读")}</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-lg leading-relaxed mb-6">
          {t(
            "The 2017 paper Attention Is All You Need by Vaswani et al. introduced the Transformer architecture, revolutionizing natural language processing and becoming the foundation for modern AI systems like GPT, BERT, and Claude. This article provides a comprehensive explanation of the attention mechanism with mathematical intuition and complete code implementation.",
            "Vaswani等人在2017年发表的论文Attention Is All You Need引入了Transformer架构，彻底改变了自然语言处理，并成为GPT、BERT和Claude等现代AI系统的基础。本文全面解释了注意力机制，包含数学直觉和完整的代码实现。"
          )}
        </p>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
          {t("Part 1: Understanding the Attention Mechanism", "第一部分：理解注意力机制")}
        </h2>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">
          {t("The Intuition Behind Attention", "注意力背后的直觉")}
        </h3>

        <p className="leading-relaxed mb-4">
          {t(
            "When humans read a sentence, we don't process every word with equal focus. Our attention dynamically shifts based on context. The attention mechanism in Transformers mimics this behavior, allowing the model to focus on relevant parts of the input when producing each output.",
            "当人类阅读句子时，我们不会以相同的关注度处理每个词。我们的注意力会根据上下文动态转移。Transformer中的注意力机制模仿这种行为，允许模型在产生每个输出时关注输入的相关部分。"
          )}
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6">
          <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-2">
            {t("Analogy: Information Retrieval", "类比：信息检索")}
          </h4>
          <p className="text-sm text-blue-800 dark:text-blue-200">
            {t("Imagine a library search system:", "想象一个图书馆搜索系统：")}
          </p>
          <ul className="list-disc list-inside mt-2 text-sm text-blue-800 dark:text-blue-200 space-y-1">
            <li><strong>Query (查询)</strong>: {t("Your search question", "你的搜索问题")}</li>
            <li><strong>Key (键)</strong>: {t("Book titles and index entries", "书名和索引条目")}</li>
            <li><strong>Value (值)</strong>: {t("The actual book content", "实际的书籍内容")}</li>
          </ul>
          <p className="text-sm text-blue-800 dark:text-blue-200 mt-2">
            {t("The attention mechanism computes similarity between your query and all keys, then retrieves values weighted by relevance.", "注意力机制计算你的查询与所有键之间的相似度，然后按相关性加权检索值。")}
          </p>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">
          {t("Query, Key, and Value Explained", "Query、Key和Value详解")}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded text-center">
            <div className="text-3xl mb-2">❓</div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Query (Q)</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">{t("What am I looking for?", "我在寻找什么？")}</p>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">{t("Represents the current token's request for information", "表示当前token对信息的请求")}</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded text-center">
            <div className="text-3xl mb-2">🔑</div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Key (K)</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">{t("What do I contain?", "我包含什么？")}</p>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">{t("Represents each token's identifier for matching", "表示每个token用于匹配的标识符")}</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded text-center">
            <div className="text-3xl mb-2">📄</div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Value (V)</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">{t("What information do I provide?", "我提供什么信息？")}</p>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">{t("Represents the actual content to be retrieved", "表示要检索的实际内容")}</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">
          {t("The Attention Formula", "注意力公式")}
        </h3>

        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 mb-6">
          <h4 className="font-bold text-slate-900 dark:text-white mb-4 text-center">
            Scaled Dot-Product Attention
          </h4>
          <div className="bg-white dark:bg-slate-900 p-4 rounded text-center font-mono text-lg">
            Attention(Q, K, V) = softmax(QK^T / √d_k) V
          </div>
          <div className="mt-4 space-y-2 text-sm">
            <p><strong>Q</strong>: {t("Query matrix (sequence_length × d_k)", "查询矩阵（序列长度 × d_k）")}</p>
            <p><strong>K</strong>: {t("Key matrix (sequence_length × d_k)", "键矩阵（序列长度 × d_k）")}</p>
            <p><strong>V</strong>: {t("Value matrix (sequence_length × d_v)", "值矩阵（序列长度 × d_v）")}</p>
            <p><strong>d_k</strong>: {t("Dimension of keys (used for scaling)", "键的维度（用于缩放）")}</p>
          </div>
        </div>

        <h4 className="font-semibold text-slate-900 dark:text-white mt-4 mb-2">
          {t("Step-by-Step Breakdown", "逐步分解")}
        </h4>

        <div className="space-y-4 my-6">
          <div className="flex items-start gap-4">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</div>
            <div>
              <h5 className="font-semibold">{t("Compute Similarity Scores", "计算相似度分数")}</h5>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {t("QK^T: Matrix multiplication between Query and Key transposed. Each entry (i,j) represents how much token i should attend to token j.", "QK^T：查询与转置键之间的矩阵乘法。每个条目(i,j)表示token i应该关注token j的程度。")}
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</div>
            <div>
              <h5 className="font-semibold">{t("Scale by √d_k", "按√d_k缩放")}</h5>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {t("Prevents dot products from growing too large in magnitude, which would push softmax into regions with extremely small gradients.", "防止点积幅度变得太大，这会将softmax推入梯度极小的区域。")}
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</div>
            <div>
              <h5 className="font-semibold">{t("Apply Softmax", "应用Softmax")}</h5>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {t("Converts scores to probabilities that sum to 1. Higher scores get higher weight in the weighted sum.", "将分数转换为总和为1的概率。更高的分数在加权和中获得更高的权重。")}
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</div>
            <div>
              <h5 className="font-semibold">{t("Weighted Sum of Values", "值的加权和")}</h5>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {t("Multiply attention weights by Value matrix to get the final output representation.", "将注意力权重与值矩阵相乘以获得最终输出表示。")}
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">
          {t("Self-Attention Explained", "自注意力详解")}
        </h3>

        <p className="leading-relaxed mb-4">
          {t(
            "Self-attention is a special case where Q, K, and V all come from the same input sequence. Each token attends to all other tokens in the same sequence, allowing the model to capture contextual relationships.",
            "自注意力是一种特殊情况，其中Q、K和V都来自相同的输入序列。每个token关注同一序列中的所有其他token，允许模型捕获上下文关系。"
          )}
        </p>

        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-6">
          <h4 className="font-bold text-green-900 dark:text-green-300 mb-2">
            {t("Why Self-Attention is Powerful", "为什么自注意力很强大")}
          </h4>
          <ul className="list-disc list-inside space-y-1 text-green-800 dark:text-green-200 text-sm">
            <li>{t("Long-range dependencies: Any token can directly attend to any other token", "长距离依赖：任何token可以直接关注任何其他token")}</li>
            <li>{t("Parallel computation: All attention scores computed simultaneously", "并行计算：所有注意力分数同时计算")}</li>
            <li>{t("Interpretability: Attention weights show which tokens influence each other", "可解释性：注意力权重显示哪些token相互影响")}</li>
            <li>{t("Contextual representation: Each token's meaning depends on its context", "上下文表示：每个token的含义取决于其上下文")}</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
          {t("Part 2: Complete Transformer Architecture", "第二部分：完整Transformer架构")}
        </h2>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">
          {t("Transformer Structure Overview", "Transformer结构概览")}
        </h3>

        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 mb-6">
          <pre className="text-xs overflow-x-auto">
{`
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
`}
          </pre>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">
          {t("Multi-Head Attention", "多头注意力")}
        </h3>

        <p className="leading-relaxed mb-4">
          {t(
            "Instead of performing a single attention function, the Transformer uses multiple attention heads that learn different representation subspaces. This allows the model to jointly attend to information from different positions at different levels.",
            "Transformer不是执行单个注意力函数，而是使用多个学习不同表示子空间的注意力头。这允许模型在不同层次上联合关注来自不同位置的信息。"
          )}
        </p>

        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 my-6">
          <h4 className="font-bold text-purple-900 dark:text-purple-300 mb-2">
            MultiHead(Q, K, V) = Concat(head_1, ..., head_h) W^O
          </h4>
          <p className="text-sm text-purple-800 dark:text-purple-200">
            where head_i = Attention(QW_i^Q, KW_i^K, VW_i^V)
          </p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
          {t("Part 3: Code Implementation", "第三部分：代码实现")}
        </h2>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">
          {t("Single Head Attention in PyTorch", "PyTorch中的单头注意力")}
        </h3>

        <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto mb-6">
          <pre className="text-sm text-slate-100">
{`import torch
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
    print(weights[0].round(decimals=3))`}
          </pre>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">
          {t("Multi-Head Attention Implementation", "多头注意力实现")}
        </h3>

        <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto mb-6">
          <pre className="text-sm text-slate-100">
{`class MultiHeadAttention(nn.Module):
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
print(f"Attention weights shape: {weights.shape}")  # (2, 8, 10, 10)`}
          </pre>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">
          {t("Complete Transformer Encoder Layer", "完整Transformer编码器层")}
        </h3>

        <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto mb-6">
          <pre className="text-sm text-slate-100">
{`class TransformerEncoderLayer(nn.Module):
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
        
        return x`}
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
          {t("Part 4: Visualizing Attention", "第四部分：可视化注意力")}
        </h2>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">
          {t("Attention Pattern Examples", "注意力模式示例")}
        </h3>

        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 mb-6">
          <h4 className="font-bold text-slate-900 dark:text-white mb-4">
            {t("Example: The cat sat on the mat", "示例：The cat sat on the mat")}
          </h4>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-200 dark:bg-slate-700">
                  <th className="p-2"></th>
                  <th className="p-2">The</th>
                  <th className="p-2">cat</th>
                  <th className="p-2">sat</th>
                  <th className="p-2">on</th>
                  <th className="p-2">the</th>
                  <th className="p-2">mat</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <td className="p-2 font-semibold bg-slate-200 dark:bg-slate-700">The</td>
                  <td className="p-2 bg-yellow-200 dark:bg-yellow-900">0.4</td>
                  <td className="p-2">0.2</td>
                  <td className="p-2">0.1</td>
                  <td className="p-2">0.1</td>
                  <td className="p-2">0.1</td>
                  <td className="p-2">0.1</td>
                </tr>
                <tr>
                  <td className="p-2 font-semibold bg-slate-200 dark:bg-slate-700">cat</td>
                  <td className="p-2">0.2</td>
                  <td className="p-2 bg-yellow-200 dark:bg-yellow-900">0.3</td>
                  <td className="p-2 bg-yellow-200 dark:bg-yellow-900">0.3</td>
                  <td className="p-2">0.1</td>
                  <td className="p-2">0.05</td>
                  <td className="p-2">0.05</td>
                </tr>
                <tr>
                  <td className="p-2 font-semibold bg-slate-200 dark:bg-slate-700">sat</td>
                  <td className="p-2">0.1</td>
                  <td className="p-2 bg-yellow-200 dark:bg-yellow-900">0.3</td>
                  <td className="p-2 bg-yellow-200 dark:bg-yellow-900">0.3</td>
                  <td className="p-2 bg-yellow-200 dark:bg-yellow-900">0.2</td>
                  <td className="p-2">0.05</td>
                  <td className="p-2">0.05</td>
                </tr>
                <tr>
                  <td className="p-2 font-semibold bg-slate-200 dark:bg-slate-700">mat</td>
                  <td className="p-2">0.05</td>
                  <td className="p-2">0.05</td>
                  <td className="p-2">0.1</td>
                  <td className="p-2 bg-yellow-200 dark:bg-yellow-900">0.2</td>
                  <td className="p-2 bg-yellow-200 dark:bg-yellow-900">0.3</td>
                  <td className="p-2 bg-yellow-200 dark:bg-yellow-900">0.3</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-4">
            {t("Yellow cells show strong attention. Notice how 'sat' attends to both 'cat' (subject) and 'mat' (location), demonstrating contextual understanding.", 
            "黄色单元格显示强注意力。注意'sat'如何关注'cat'（主语）和'mat'（位置），展示了上下文理解。")}
          </p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
          {t("Conclusion", "结论")}
        </h2>

        <p className="leading-relaxed mb-4">
          {t(
            "The Transformer architecture, powered by the attention mechanism, has fundamentally changed how we approach sequence modeling. By understanding Query, Key, and Value, and implementing the attention formula Attention(Q,K,V) = softmax(QK^T/√d_k)V, we can build models that capture complex relationships in data.",
            "由注意力机制驱动的Transformer架构从根本上改变了我们处理序列建模的方式。通过理解Query、Key和Value，并实现注意力公式Attention(Q,K,V) = softmax(QK^T/√d_k)V，我们可以构建捕获数据中复杂关系的模型。"
          )}
        </p>

        <p className="leading-relaxed mb-4">
          {t(
            "Key takeaways from this article:",
            "本文的关键要点："
          )}
        </p>

        <ul className="list-disc list-inside space-y-2 mb-6">
          <li className="leading-relaxed">
            <strong>Attention is a weighted retrieval mechanism</strong>: {t("Query searches for relevant Keys to retrieve Values", "Query搜索相关的Key来检索Value")}
          </li>
          <li className="leading-relaxed">
            <strong>Scaling is crucial</strong>: {t("Dividing by √d_k prevents softmax saturation", "除以√d_k防止softmax饱和")}
          </li>
          <li className="leading-relaxed">
            <strong>Multi-head attention enables diverse representations</strong>: {t("Different heads learn different patterns", "不同的头学习不同的模式")}
          </li>
          <li className="leading-relaxed">
            <strong>Self-attention captures context</strong>: {t("Each token's representation depends on all other tokens", "每个token的表示依赖于所有其他token")}
          </li>
        </ul>

        <p className="leading-relaxed">
          {t(
            "The code implementations provided here form the building blocks for understanding modern NLP systems. From this foundation, you can explore more advanced topics like positional encoding, masked attention for decoding, and the full encoder-decoder architecture used in machine translation and text generation.",
            "本文提供的代码实现构成了理解现代NLP系统的构建块。从这个基础出发，你可以探索更高级的主题，如位置编码、用于解码的掩码注意力，以及机器翻译和文本生成中使用的完整编码器-解码器架构。"
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
          {["Transformer", "Attention Mechanism", "Deep Learning", "NLP", "PyTorch", "Self-Attention", "Neural Networks", "Machine Learning"].map(
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
