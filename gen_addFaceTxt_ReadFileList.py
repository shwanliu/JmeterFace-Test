import os
txtName ="addFace_20181022Test.txt"
f=open(txtName, "w",encoding='utf-8')
dire="."

def gen_addface_txt( dire):
    for root ,dirs, files in os.walk(dire):
        for file_single in files:
            if "json" not in file_single :
                imagePath = str(root)+"\\"+file_single
                print(file_single[:-4] )
                CustomId = file_single[:-4]
                result = "FaceDbTest"+ "," + imagePath +','+ CustomId +'\n'
                f.write(result)
    f.close()
