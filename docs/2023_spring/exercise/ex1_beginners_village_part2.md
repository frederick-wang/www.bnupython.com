---
prev: ./ex1_beginners_village_part1
---

# EX2: 新手村（中）

洛谷作业地址：[https://www.luogu.com.cn/training/293802](https://www.luogu.com.cn/training/293802)

## 目录

- 前言
- 题目列表
- 注意事项
- 提示
  - 0. 予沛买魔杖
  - 1. 魔道的试炼
  - 2. 魔法书题目配置
  - 3. 魔法年份判断
  - 4. 小精灵摘金苹果
  - 5. 魔法鱼的航程
  - 6. 魔法图书馆管理员云洁
  - 7. 精灵之三角
  - 8. 密码魔咒——凯撒密码
  - 9. 魔法卷轴的单词统计
  - 10. 魔法蛇形阵
- Python 3.8 官方文档相关章节

## 前言

> There's more than one way to do it.
>
> ——Perl 俗语

在编程的世界中，条条大路通罗马。

如果某些题目让你感到没有头绪，可以看看「提示」章节，也许会找到一些灵感。

## 题目列表

| 序号 | 题目 |
| :----------: | :----------: |
| 0 | [T322476 予沛买魔杖](https://www.luogu.com.cn/problem/T322476) |
| 1 | [T322479 魔道的试炼](https://www.luogu.com.cn/problem/T322479) |
| 2 | [T322480 魔法书题目配置](https://www.luogu.com.cn/problem/T322480) |
| 3 | [T322481 魔法年份判断](https://www.luogu.com.cn/problem/T322481) |
| 4 | [T322482 小精灵摘金苹果](https://www.luogu.com.cn/problem/T322482) |
| 5 | [T322483 魔法鱼的航程](https://www.luogu.com.cn/problem/T322483) |
| 6 | [T322571 魔法图书馆管理员云洁](https://www.luogu.com.cn/problem/T322571) |
| 7 | [T322572 精灵之三角](https://www.luogu.com.cn/problem/T322572) |
| 8 | [T322573 密码魔咒——凯撒密码](https://www.luogu.com.cn/problem/T322573) |
| 9 | [T322574 魔法卷轴的单词统计](https://www.luogu.com.cn/problem/T322574) |
| 10 | [T322575 魔法蛇形阵](https://www.luogu.com.cn/problem/T322575) |

## 注意事项

- 提交答案时，一定要将语言设置为“Python 3”（默认是 C++）；
- 耐心读题，确保已经理解了题意、数据类型、输入输出要求后再作答；
- 计算机没有玄学，如果 `WA (Wrong Answer)` 了，仔细分析原因，思考为什么出错，带着理由修改代码，而不是盲目修改代码；
- 建议不要打印多余的空格和空行。

## 提示

### 0. 予沛买魔杖

无。

### 1. 魔道的试炼

- `int` 和 `float` 的乘积是 `float` 哦。

### 2. 魔法书题目配置

- 一年级数学应用题。

### 3. 魔法年份判断

> ① 普通年份能被4整除，且不能被100整除的，是闰年。（ 如2004年就是闰年）
>
> ② 世纪年份能被400整除的是闰年。（ 如2000年是闰年，1900年不是闰年）
>
> ——百度

### 4. 小精灵摘金苹果

- 别忘了小精灵还有个板凳。

### 5. 魔法鱼的航程

无。

### 6. 魔法图书馆管理员云洁

可以考虑利用 `dict` 或 `set` 解决问题。

### 7. 精灵之三角

详见[杨辉三角_百度百科](https://baike.baidu.com/item/%E6%9D%A8%E8%BE%89%E4%B8%89%E8%A7%92/215098)。

### 8. 密码魔咒——凯撒密码

在计算机中，**字符** 实际上是用数字的方式存储的，我们称这种操作为 **编码**。

**ASCII 编码** 规定了最基本的 128 个字符与数字的对应关系。例如，`'a'` 对应 `97`，`'z'` 对应 `122`，26 个小写字母占据了 $[97, 122]$ 这个数字区间。

在 Python 中，使用内置函数 `ord()` 可以将一个字符转化为它对应的整数；而使用内置函数 `chr()` 可以将一个整数转换回它对应的字符。

### 9. 魔法卷轴的单词统计

使用 `a.count(b)` 统计字符串 `a` 中 `b` 的出现次数时，如果两个 `b` 之间有重叠，只会计算一个。

例如：

```python
print('abbabbabba'.count('abba'))
```

输出结果是 `2` 而不是 `3`。

**如果你想使用字符串的 `count` 方法，一定要注意这一个细节。如果要查找的子字符串「可能重叠」的话，需要考虑在当前场景下是否适合用这个方法。**

### 10. 魔法蛇形阵

- 创建一个大小为 `n * n` 的二维列表：

```python
grid = [[0] * n for _ in range(n)]
```

- 初中物理告诉我们，物体运动时，坐标 $(x, y)$ 与速度 $v$ 和时间 $t$ 的关系为：

$$
\begin{cases}
   x' = x + v_xt \\
   y' = y + v_yt
\end{cases}
$$

即经过时间 $t$ 后，物体新坐标 $(x', y')$ 为：

$$
\begin{cases}
   x' = x + \Delta x \\
   y' = y + \Delta y
\end{cases}
$$

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
