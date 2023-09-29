1. 打开Navicat，新建连接-MySQL，输入密码MySQL
2. 新建数据库,字符集：utf8mb4
3. 新建表
	a. 设计表结构：主键，字段，自动递增，数据类型及长度
	b. 其中int和datetime长度是固定的
	c. 向表中添加数据
	d. 导入excel格式的数据
	e. 导出为excel文件
	f. 自动生成随机的数据条目
4. 导出及导入数据库.sql文件
	a. 导入sql文件时，在要导入的位置右击导入，然后在表里右击刷新
5. 可以操作字段，生成可视化图表
可以界面操作生成语句，熟悉之后还是直接码代码比较快

创建虚拟环境	conda create -n python38 python=3.8
查看已安装的环境	conda env list
激活指定版本的环境	conda activate python38
安装第三方包	pip install xlwings
安装指定源的第三方包	pip install xlwings -i http://pypi.douban.com/simple/ --trusted-host pypi.douban.com
	pip install demjson -i https://pypi.tuna.tsinghua.edu.cn/simple/
卸载第三方包	pip uninstall xlwings
更新pip版本	python -m pip install --upgrade pip
查看环境下已安装包列表	conda list
生成requirement.txt文件到桌面	pip freeze > C:\Users\Han\Desktop\requirements.txt
安装requirement.txt文件依赖	pip install -r C:\Users\Han\Desktop\requirements.txt -i http://pypi.douban.com/simple/ --trusted-host pypi.douban.com
添加信任

pip安装
下载应用程序并安装，tesseract-ocr-w64-setup-5.3.1.20230401
修改pytesseract.py文件

来自 <https://blog.csdn.net/qq_31362767/article/details/107891185> 


官方文档
Getting started
	初始学习
	与SQL的语法对比
User Guide
	按照学习目的的汇总
API reference
完整的API文档

Getting started
导入模块规则
	import pandas as pd
	import numpy as np
通常函数返回的是一个副本，如需修改原本，尝试
	inplace=True
	copy=False

comparison with SQL
	对应于where语句，pd使用一个bool的series来切片，返回True的行
	
按某列的值进行排序
	df.sort_values()
去重
df.drop_duplicates()

绘图流程，excel本地文件存储数据+dataframe读取数据结构+echarts界面可视化操作

目前存在多种可视化方案
	1. excel绘图，最优先推荐，单个画图时可以满足绝大部分的需求，PPT演示应该也是够用的
	但是会存在一些限制，比如簇状柱形图就没办法在一个维度添加多个数据，而且叠加柱形图和折线图也无法实现
	
	2. matplotlib，使用pandas的绘图函数也是调用plt，可以在图片界面进行设置
	
	3. plotly，和plt和pyecharts类似，但是貌似文档并不好找
	
	4. pyecharts，可以参照echarts网站来做，感觉比plt好看一点点，而且是存在网页版本的，文档也很友好
		a. 单个，可以用echarts生成js代码，再转成python字典来传入
多个，也可以先用echarts设置好，再使用pyecharts编写python代码来实现

scrapy-菜鸟教程
新建py，右键打开于中端，运行scrapy startproject mySpider，新建一个新项目，注意项目名称，用pycharm打开时以这个项目名称打开项目
新建爬虫
运行爬虫

scrapy有一点不好，就是比如一个界面有很多页但是url是不变的

合并字典：{**d1, **d2}

合并字符串列表为字符
"+".join(list)
列表推导式
a = [i**2 for i in range(10) if i > 5]

便利列表数据（获取索引）
for idx， num in enumerate(list):
	pass