---
prev: ../preparation/environment_setup
next: ./ex2_beginners_village_part2
---

# EX1: 新手村（上）

洛谷作业地址：[https://www.luogu.com.cn/training/290374](https://www.luogu.com.cn/training/290374)

**不熟悉算法竞赛的选手请看这里：**

算法竞赛中要求的输出格式中，**不能有多余的内容**，**这也包括了“请输入整数 $\bm a$ 和 $\bm b$” 这一类的提示用户输入信息的内容**。若包含了这些内容，将会被认为是 `Wrong Answer`，即洛谷上的 `WA`。在对比代码输出和标准输出时，系统将忽略每一行结尾的空格，以及最后一行之后多余的换行符。

若因此类问题出现本机（看起来）`AC`，提交 `WA` 的现象，请勿认为是洛谷评测机出了问题，而是你的代码中可能存在多余的输出信息。用户可以参考在题目末尾提供的代码。

另外**请善用应用中的在线 IDE 功能**，以避免不同平台的评测中所产生的一些问题。

还有一点很重要的是，请不要在对应的题目讨论区中发布自己的题解。

## 目录

- 前言
- 题目列表
- 注意事项
- 提示
  - 0. 勇者的问候
  - 1. 马里奥的冒险
  - 2. 建筑的秘密
  - 3. 笔记整理
  - 4. 数字的加法
  - 5. 采摘金苹果
  - 6. 巨龙的葡萄酒
  - 7. 飞龙的记忆
  - 8. 精灵的战斗
- Python 3.8 官方文档相关章节

## 前言

> 千里之行，始于足下。程序设计虽然花样繁多，但还是要从最简单的地方开始学习，由浅入深，直至掌握。毕竟任何复杂的工程代码都是由一行行简单的代码组成的。
>
> —— 洛谷

如果遇到“不知道某个方法如何调用”、“不知道某个内置模块如何使用”等问题，建议直接参考 [Python 3.8 官方文档](https://docs.python.org/zh-cn/3.8/index.html)。官方文档是最完整、最权威的 Python 说明文档，也是一切第三方教程的源头。如果一个问题可以在官方文档中找到答案，那就只需要参考官方文档。

[CSDN 博客](https://blog.csdn.net/)上充斥着大量“半瓶水式”的教程，其中的见解、观点往往是有失偏颇，甚至完全错误的。如果一定要参考 CSDN，请**慎重**参考。

相比之下，[Stack Overflow](https://stackoverflow.com/questions) 中虽然也有错误的见解，但比例比 CSDN 要小很多。

我们鼓励使用搜索引擎查找并学习题目相关的知识——计算机相关知识如同一片大海，仅凭老师、助教在课堂上的讲解，是远远不够的。**课堂的内容更多起到的是“指路”的作用，在大海中为大家指明一条“航道”。**

那么，如何才能在知识的海洋中获取宝藏？计算机学科因为自身的特性（总量大、细节多、开放共享的氛围浓厚），是一个极其需要通过互联网“自学”、“实践”的学科。**而搜索引擎就是我们在大海上漫游的航船，是我们最重要的法宝。**

## 题目列表

| 序号 | 题目 | 主要知识点 | 备注 |
| :----------: | :----------: | :----------: | :----------: |
| 0 | [勇者的问候](https://www.luogu.com.cn/problem/T320260) | 字符串 & 输入输出 | 无 |
| 1 | [马里奥的冒险](https://www.luogu.com.cn/problem/T320265) | 字符串 & 输入输出 | 无 |
| 2 | [建筑的秘密](https://www.luogu.com.cn/problem/T320266) | 字符串 & 输入输出 | 无 |
| 3 | [笔记整理](https://www.luogu.com.cn/problem/T320268) | 字符串 | 无 |
| 4 | [数字的加法](https://www.luogu.com.cn/problem/T320274) | 基本运算 | 无 |
| 5 | [采摘金苹果](https://www.luogu.com.cn/problem/T320275) | 基本运算 | 无 |
| 6 | [巨龙的葡萄酒](https://www.luogu.com.cn/problem/T320276) | 基本运算 | 无 |
| 7 | [飞龙的记忆](https://www.luogu.com.cn/problem/T320277) | 列表 | 无 |
| 8 | [精灵的战斗](https://www.luogu.com.cn/problem/T320282) | 列表 | 无 |

## 注意事项

- 提交答案时，一定要将语言设置为“Python 3”（默认是 C++）；
- 耐心读题，确保已经理解了题意、数据类型、输入输出要求后再作答；
- 计算机没有玄学，如果 `WA (Wrong Answer)` 了，仔细分析原因，思考为什么出错，带着理由修改代码，而不是盲目修改代码；
- 建议不要打印多余的空格和空行。

## 提示

## 0. 勇者的问候

使用内置函数 `print()` 输出字符串。

## 1. 马里奥的冒险

> There's more than one way to do it.
>
> ——Perl 俗语

在 [勇者的问候](https://www.luogu.com.cn/problem/T320260) 的基础上，思考新的问题——对于多行输出内容，如何**换行**？

## 2. 建筑的秘密

在前两道题的基础上，思考新的问题：

- 使用内置函数 `input()` 读取**输入**；
- 将输入的字符存到一个变量里；
- 以这个变量为基础，进行一些运算得到输出内容，并按照规定的输出格式输出。

## 3. 笔记整理

如何将一个 `str` 中的所有小写字母转化为它的大写形式？

## 4. 数字的加法

通过 `input()` 读入的数据是一个 `str`，如何将其转换为两个整数？ 

```python
inp = input().split()  # str -> list[str]
a = int(inp[0])
b = int(inp[1])
```

如果使用 **列表推导式（List Comprehensions）** 配合 **序列解包（Sequence Unpacking）** 语法，还可以写成这样：

```python
a, b = [int(x) for x in input().split()]
```

## 5. 采摘金苹果

无。

## 6. 巨龙的葡萄酒

```python
import math  # 导入 Python 内置的标准模块 math，该模块提供了对 C 标准定义的数学函数的访问。

math.pi  # 这是 Python 内置的 π 值
print(math.pi)  # 输出 3.141592653589793

math.ceil  # 这是 Python 内置的“向上取整”函数

a = 7 / 3
print(a)  # 输出 2.3333333333333335

b = math.ceil(7 / 3)
print(b)  # 输出 3
```

## 7. 飞龙的记忆

- 通过 `input()` 读入的数据是一个 `str`，如何将其转换为一个存放整数的 `list`？

```python
nums = [int(x) for x in input().split()]
```

- 如何将 `list` 反转？
- `print()` 函数默认会在输出内容的尾部自动添加一个换行符 `\n`，如果不想让它换行，如何修改 `print()` 在输出内容尾部自动添加的字符？

```python
print(1, end=' ')
print(2, end=' ')
print(3, end=' ')
# 将得到输出：1 2 3 
```

- 如果有一组 `str`，希望用一个固定的字符（比如空格）将这一组 `str` 连接起来形成一个新的 `str`，调用什么方法？

```python
a = ['x', 'y', 'z']
new_str = ' '.join(a)
print(new_str)  # 输出：x y z
```

## 8. 精灵的战斗

- 需要写双重 `for 循环`，遍历输入的 `list`，将每一个值和列表中的其他值比较、计数，得到结果。
- 还需要创建一个新的 `list`，存放结果并输出。

## Python 3.8 官方文档相关章节

官方文档中的一些内容可能对初学者而言过于晦涩，难以理解，所以也**不必强迫自己一开始就理解其中的全部内容**——等用到时回头再看，自然就会有所感悟。

1. [input()](https://docs.python.org/zh-cn/3.8/library/functions.html#input)
1. [print()](https://docs.python.org/zh-cn/3.8/library/functions.html#print)
1. [数字类型 --- int, float, complex](https://docs.python.org/zh-cn/3.8/library/stdtypes.html#numeric-types-int-float-complex)
1. [文本序列类型 --- str](https://docs.python.org/zh-cn/3.8/library/stdtypes.html#text-sequence-type-str)
1. [序列类型 --- list, tuple, range](https://docs.python.org/zh-cn/3.8/library/stdtypes.html#sequence-types-list-tuple-range)
1. [列表推导式](https://docs.python.org/zh-cn/3.8/tutorial/datastructures.html#list-comprehensions)
1. [序列解包](https://docs.python.org/zh-cn/3.8/tutorial/datastructures.html#tuples-and-sequences)
1. [math --- 数学函数](https://docs.python.org/zh-cn/3.8/library/math.html)
1. [格式化字符串字面值 (f-string)](https://docs.python.org/zh-cn/3.8/reference/lexical_analysis.html#formatted-string-literals)
1. [格式规格迷你语言](https://docs.python.org/zh-cn/3.8/library/string.html#format-specification-mini-language)
