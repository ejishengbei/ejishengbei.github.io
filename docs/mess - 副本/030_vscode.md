# 配置vscode
- 安装插件
  - 汉化包
  - code runner，逐步运行code语句，[修复中文乱码](https://blog.csdn.net/ljb0077/article/details/112980095)
  - markdown all in one，预览markdown
  - markdown pdf，转换md文件为pdf、图片
  - vscode-pdf，预览pdf
  - vetur，vue支持


- 修改setting.json文件，[官网setting设置](https://code.visualstudio.com/docs/python/settings-reference)
    ```json
    // 文件路径
    "C:\Users\Han\AppData\Roaming\Code\User\settings.json"  
    // 设置运行时的目录兼容性
    "python.terminal.executeInFileDir": true,  
    ```
  
- python导入自定义包路径
  ```python
  import sys

  sys.path.append('D:\03_Knowledge_and_Practice\02_Program\01_Python\01_Project\py_300_application\py_301_my_module')
  ```

- [python文件模板设置](https://zhuanlan.zhihu.com/p/627117775)

# markdown预览报错
提示：vscode加载web 视图，报错  
解决方案:
1. 关闭vscode
2. 命令行输入
    ```cmd
    code --no-sandbox
    ```

# shortcut key
Ctrl+C，终止正在运行的程序  
复制当前行：shift + alt +up/down  
删除当前行：shift + ctrl + k

# 代码片段
文件-首选项-配置用户代码片段-python.json
```json
{
	"HEADER":{"prefix": "header",
			"body": [
			"# C:\Users\Han\anaconda3\envs\python311",
			"# -*- coding:utf-8 -*-",
			"import sys",
			"sys.path.append(r'D:\\03_Knowledge_and_Practice\\02_Program\\01_Python\\01_Project')",
			"",
			"import os",
			"import numpy as np",

		],
	}
}
```
新建python文件，键入H，选择header，键入enter即可