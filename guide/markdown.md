# Markdown 写作规范

Markdown 是一种轻量级标记语言（markup language），可以用简单的符号表达标题、列表、代码和链接。

## 1. 标题层级

```text:no-line-numbers
# 一级标题
## 二级标题
### 三级标题
```

一篇文章一般只使用一个一级标题，二级和三级标题会进入右边的“本页大纲”。

## 2. 代码与代码块

单个术语用行内代码：`std::cout`。

多行代码：

````text:no-line-numbers
```cpp
#include <iostream>

int main() {
    std::cout << "Hello\n";
}
```
````

语言标记 `cpp` 使 C++ 代码获得语法高亮。

### 单独高亮代码行

````text:no-line-numbers
```cpp {2}
int age = 18;
std::cout << age;
```
````

`{2}` 指高亮第二行。

## 3. 提示框

```text:no-line-numbers
::: tip 提示
这里写记忆方法。
:::
```

也可使用 `info`、`warning`、`danger`、`details`。

## 4. 表格

| 写法 | 含义 |
| --- | --- |
| `int` | 整数类型 |
| `bool` | 布尔类型 |
| `std::string` | 字符串类型 |

## 5. 链接与图片

链接写法：

```text:no-line-numbers
[第二章](../cpp/02-data.md)
```

图片写法：

```text:no-line-numbers
![运行结果截图](../cpp/images/example.png)
```

图片路径基于当前 Markdown 文件的位置。

## 6. 文件命名

- 文件夹尽量使用简短、可读的英文名称。
- 章节文件使用有意义的前缀：`02-data.md`。
- 图片放在所属主题的 `images` 文件夹中。
- 改文件名后，记得同步更新 `config.mts` 的菜单链接。

## 7. 笔记质量自检

- [ ] 新术语有英文原型与中文含义。
- [ ] 每个重要概念至少有一个最小例子。
- [ ] 代码标注语言和预计结果。
- [ ] 区分自己的猜测与查证过的知识。
- [ ] 链接正确，没有失效路径。
