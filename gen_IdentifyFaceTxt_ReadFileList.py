import os
txtName ="../identify_20181019.txt"
f=open(txtName, "w",encoding='utf-8')
# 需要进行检索的人脸图片的根目录位置
dire=str(os.getcwd())
#设定score参数
score = 85
#设定topN参数
topn = 5

print( dire)

for root ,dirs, files in os.walk(dire):
    for file_single in files:
        imagePath = str(root)+"\\"+file_single
        print(file_single)
        print(file_single[:-4])
        CustomId = file_single[:-4]
        #写入txt文件中，参数包括：数据库名 ， 图片文件名 ， 分数 ，topn
        result = "FaceDbTest"+ ";" + imagePath +';'+ str(score) + ';'+ str(topn) +'\n'
        f.write(result)
f.close()
