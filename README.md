# Jmeter在批量人脸入库以及检索使用手册

使用Jmeter 5.0 进行批量人脸入库以及批量人脸检索,实现请求参数的读取，实现并发过程中，每一条线程的请求有不同的参数 
- Jmeter下载：http://jmeter.apache.org/download_jmeter.cgi 
- 配置过程：https://blog.csdn.net/qq_37271705/article/details/80222994
- Jmeter 可以将测试计划导出，再需要使用的时候导入即可，无需重复的配置，本次测试提供两个JMX文件（人脸检索以及人脸入库）
## 1.使用Jmeter进行人脸入库 
### 1.1 导入JMX文件
- 打开Jmeter，选择打开[addFace_Test.jmx]文件：
- 工程目录如下:
	- Thread Grop              //用于设置线程数量以及Ramp-up time
		- addface                //设置IP以及端口，请求参数的设定
		- HTTP信息头管理文件     // 设置 Authorization 
		- Summary Report         //汇总报告
		- 查看结果树  	        //察看Response以及request header
		- 聚合报告
		- 图形结果
		- CSV Data Set Config    //设置请求参数的读取
		- BeanShell Listener 

### 1.2 请求参数的内容格式：
- 文件格式为txt格式，人脸入库的文件内容包括人脸库名，人脸图片名以及自定义人脸ID 
- 文本文件每一行：{name},{image filename},{customId} 

### 1.3 人脸入库参数文件的生成：
  - 人脸图片的目录说明：
  	- 每个人可以有多张图片，一个人的人脸图片放在一个目录下，每个人的人脸图片放在单独的一个目录下
  	- 例如:
  	- ├── FaeceScrub           //所有人脸图片存放根目录
  	- │   ├──  Aaron Eckhart
	- │   │   ├── Aarin Eckhart_01.jpg
	- │   │   ├── Aarin Eckhart_02.jpg
	- │   │   ├── Aarin Eckhart_03.jpg
	- │   │   ├──  ...... 
	- │   ├── ACarey Lowell 
	- │   │   ├── AaCarey Lowell _01.jpg
	- │   │   ├── AaCarey Lowell _02.jpg
	- │   │   ├── AaCarey Lowell _03.jpg
	- │   │   ├──  ...... 
	- │   ├── zooey Deschanel 
	- │   │   ├── zoey Deschanel _01.jpg

### 1.4 入库参数文件生成脚本使用：
  - 将gen_addFaceTxt_ReadFileList.py放置在要将其入库的图片根目录运行，生成提供给addFace接口的请求参数的写成txt；
 
### 1.5 运行多线程入库的设置：
  - 设置线程数；
  - 设置Ramp-up时间：Ramp-up time用于定义相邻两个线程，后一个线程等待前一个线程启动后多久再启动；
  - 等待启动时长 = Ramp-up time / 线程数；
  - 例如100个线程，ramp-up时长设置为100，即每一个线程在其前面一个线程执行后的1S后开始执行。

## 2. 使用Jmeter进行人脸检索
### 2.1 导入JMX文件：
- 打开Jmeter，选择打开[identifyFace_Test.jmx]文件：
- 工程目录如下:
	- Thread Grop              //用于设置线程数量以及Ramp-up time
		- indentifyface          //设置IP以及端口，请求参数的设定
		- HTTP信息头管理文件     // 设置 Authorization
		- Summary Report         //汇总报告
		- 查看结果树  		    //察看Response以及request header
		- 聚合报告
		- 图形结果
		- CSV Data Set Config   //设置请求参数的读取
		- BeanShell Listener 
   	 	- 保存响应到文件        //用于保存响应结果

### 2.2 请求参数的内容格式：
--文件格式为txt格式，人脸入库的文件内容包括人脸库名，人脸图片名，score，topn
-- 文本文件每一行：{name},{image filename},{score}，{topn} 

### 2.3 人脸检索参数文件的生成：
  - 人脸图片的目录说明：
  	- 与人脸入库的图片存放方式一样，一个人的人脸图片放在一个目录下，每个人的人脸图片放在单独的一个目录下
  	- 例如:
	- ├── FaeceScrub           //所有人脸图片存放根目录
	- │   ├──  Aaron Eckhart      //存放单人的人脸图片
	- │   │   ├── Aarin Eckhart_05.jpg
	- │   │   ├── Aarin Eckhart_06.jpg
	- │   │   ├── Aarin Eckhart_07.jpg
	- │   │   ├──  ...... 
	- │   ├── ACarey Lowell 
	- │   │   ├── AaCarey Lowell _04.jpg
	- │   │   ├── AaCarey Lowell _05.jpg
	- │   │   ├── AaCarey Lowell _06.jpg
	- │   │   ├──  ...... 
	- │   ├── zooey Deschanel 
	- │   │   ├── zoey Deschanel _04.jpg

### 2.4 人脸检索参数文件生成脚本使用：
 - 将gen_IdentifyFaceTxt_ReadFileList.py放置在要将其入库的图片根目录运行，生成提供给identifyFace接口的请求参数的写成txt；
 
### 2.5 运行多线程人脸检索的设置：
  - 设置线程数；
  - 设置Ramp-up时间：Ramp-up time用于定义相邻两个线程，后一个线程等待前一个线程启动后多久再启动；
  - 等待启动时长 = Ramp-up time / 线程数；
  - 例如100个线程，ramp-up时长设置为100，即每一个线程在其前面一个线程执行后的1S后开始执行。

## 3 通过Jmeter导出压力测试报告
  - 根据需求需要得到人脸引擎的吞吐量、延时、检索的命中率则在第4点说明
  - 将Jmeter的结果保存为.Jtl格式的文件，执行 jmeter -g identifyFace_Test.jtl -e -o resultReport ，即可生成相应的压力测试报告

## 4 保存identifyFace响应以及计算rank命中率
  - 根据需求，向服务器发送人脸检索的请求，将对服务器的响应进行保存，计算人脸引擎起对于人脸检索的rank命中率；
  - IdentifyFace保存响应结果，通过对于IdentifyFace的请求参数的图片名称，用于保存相应的响应的文件名称，便于rank的命中率计算；
  - 保存 IdentifyFace 响应结果的路径设置在“保存响应结果”的选项中；
  - 使用 eval-Rank.py 用来计算rank命中率，并且画出CMC曲线。

#注意事项：
   - 1. 实现压力测试的报告生成
   - 2. 多线程并发人脸入库以及检索的操作
   - 3. 根据Response的结果计算Rank命中率(线程的Ramp-up时间设置不同，会导致Rank命中率不同)
   - 4. 第3点：原因是Ramp-up时间设置是用于相邻两个线程，后一个线程在等待前一个线程启动后的时长，时长太短，导致response的保存结果和request的不一致




