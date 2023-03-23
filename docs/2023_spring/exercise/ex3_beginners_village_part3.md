---
prev: ./ex2_beginners_village_part2
---

# EX3: 新手村（三）

洛谷作业地址：[https://www.luogu.com.cn/training/295936](https://www.luogu.com.cn/training/295936)

## 目录

- 前言
- 题目列表
- 注意事项
- 提示
  - 0. T323837 勇者的计算
  - 1. T323842 三角形的奥秘
  - 2. T323845 流动的魔力
  - 3. T323889 魔法级数求和
  - 4. T323890 予沛义助魔兽
  - 5. T323891 魔法弹珠大战
  - 6. T323892 魔法镜中的数字
  - 7. T323893 飞龙比赛的裁决
  - 8. T323894 「要有光」
  - 9. T323901 魔法学院学籍管理
  - 10. T323904 精灵之跃
  - 11. T323907 魔法图书馆的书架挑战
- Python 3.8 官方文档相关章节

## 前言

> Simplicity is prerequisite for reliability.
>
> —— Edsger W. Dijkstra

在编程的世界中，**简单是可靠的前提。**

本次练习的部分题目来自历年 NOIP 普及组（也就是初中组）中的简单题——但不用担心，我们不需要用 C++ 来解决这些问题，在我们手中的工具是易用的 Python。

如果某些题目让你感到没有头绪，可以看看「提示」章节，也许会找到一些灵感。

## 题目列表

| 序号 | 题目 |
| :----------: | :----------: |
| 0 | [T323837 勇者的计算](https://www.luogu.com.cn/problem/T323837) |
| 1 | [T323842 三角形的奥秘](https://www.luogu.com.cn/problem/T323842) |
| 2 | [T323845 流动的魔力](https://www.luogu.com.cn/problem/T323845) |
| 3 | [T323889 魔法级数求和](https://www.luogu.com.cn/problem/T323889) |
| 4 | [T323890 予沛义助魔兽](https://www.luogu.com.cn/problem/T323890) |
| 5 | [T323891 魔法弹珠大战](https://www.luogu.com.cn/problem/T323891) |
| 6 | [T323892 魔法镜中的数字](https://www.luogu.com.cn/problem/T323892) |
| 7 | [T323893 飞龙比赛的裁决](https://www.luogu.com.cn/problem/T323893) |
| 8 | [T323894 「要有光」](https://www.luogu.com.cn/problem/T323894) |
| 9 | [T323901 魔法学院学籍管理](https://www.luogu.com.cn/problem/T323901) |
| 10 | [T323904 精灵之跃](https://www.luogu.com.cn/problem/T323904) |
| 11 | [T323907 魔法图书馆的书架挑战](https://www.luogu.com.cn/problem/T323907) |

## 注意事项

- 提交答案时，一定要将语言设置为“Python 3”（默认是 C++）；
- 耐心读题，确保已经理解了题意、数据类型、输入输出要求后再作答；
- 计算机没有玄学，如果 `WA (Wrong Answer)` 了，仔细分析原因，思考为什么出错，带着理由修改代码，而不是盲目修改代码；
- 建议不要打印多余的空格和空行。

## 提示

### 0. T323837 勇者的计算

胡老师课上的原题。

### 1. T323842 三角形的奥秘

只要细心，就已经没什么好怕的了（もう何も怖くない）。

![已经没什么好怕的了](https://res.zhaoji.ac.cn/images/202303230918261.png)

### 2. T323845 流动的魔力

小学一年级数学应用题。

### 3. T323889 魔法级数求和

> 收了可观的小费后，酒馆老板小声道：
>
> 「用 `while`。」

### 4. T323890 予沛义助魔兽

只要不想复杂，这道题就不复杂。

![说得好，但是这毫无意义。](https://res.zhaoji.ac.cn/images/202303230918260.png)

### 5. T323891 魔法弹珠大战

① 如果你发现 **某些数据重复计算了太多次**，可以将它们缓存一份，减少重复计算。

② 有敌人的格子并不是只会有 `1` 个敌人——题面上写「有敌人则为一个正整数」，说明也可能有其他数量的敌人。

### 6. T323892 魔法镜中的数字

可以利用 `int()` 配合 `str` 算。

![要用魔法打败魔法](https://res.zhaoji.ac.cn/images/202303230918259.png)

### 7. T323893 飞龙比赛的裁决

无。

### 8. T323894 「要有光」

![相信我，你也可以变成光](https://res.zhaoji.ac.cn/images/202303230918258.png)

### 9. T323901 魔法学院学籍管理

[T322571 魔法图书馆管理员云洁](https://www.luogu.com.cn/problem/T322571) 的威力加强版。

### 10. T323904 精灵之跃

① 存下每一个连续数字的差；

② 判断这些差是否连续。

### 11. T323907 魔法图书馆的书架挑战

只要不想复杂，这道题就非常简单；但如果想复杂了，这道题就非常复杂。

大胆一些，**大力出奇迹！**

![大力出奇迹](https://res.zhaoji.ac.cn/images/202303230918256.png)

## Python 3.8 官方文档相关章节

官方文档中的一些内容可能对初学者而言过于晦涩，难以理解，所以也**不必强迫自己一开始就理解其中的全部内容**——等用到时回头再看，自然就会有所感悟。

1. [Python 教程](https://docs.python.org/zh-cn/3.8/tutorial/index.html)
1. [input()](https://docs.python.org/zh-cn/3.8/library/functions.html#input)
1. [print()](https://docs.python.org/zh-cn/3.8/library/functions.html#print)
1. [数字类型 --- int, float, complex](https://docs.python.org/zh-cn/3.8/library/stdtypes.html#numeric-types-int-float-complex)
1. [文本序列类型 --- str](https://docs.python.org/zh-cn/3.8/library/stdtypes.html#text-sequence-type-str)
1. [序列类型 --- list, tuple, range](https://docs.python.org/zh-cn/3.8/library/stdtypes.html#sequence-types-list-tuple-range)
1. [映射类型 --- dict](https://docs.python.org/zh-cn/3.8/library/stdtypes.html#mapping-types-dict)
1. [集合类型 --- set](https://docs.python.org/zh-cn/3.8/library/stdtypes.html#set-types-set-frozenset)
1. [列表推导式](https://docs.python.org/zh-cn/3.8/tutorial/datastructures.html#list-comprehensions)
1. [序列解包](https://docs.python.org/zh-cn/3.8/tutorial/datastructures.html#tuples-and-sequences)
1. [math --- 数学函数](https://docs.python.org/zh-cn/3.8/library/math.html)
1. [格式化字符串字面值 (f-string)](https://docs.python.org/zh-cn/3.8/reference/lexical_analysis.html#formatted-string-literals)
1. [格式规格迷你语言](https://docs.python.org/zh-cn/3.8/library/string.html#format-specification-mini-language)
1. [chr() - 内置函数](https://docs.python.org/zh-cn/3.8/library/functions.html#chr)
1. [ord() - 内置函数](https://docs.python.org/zh-cn/3.8/library/functions.html#ord)
