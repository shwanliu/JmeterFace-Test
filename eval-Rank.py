#encoding=utf-8
import json
import sys
import os
import matplotlib.pyplot as plt
import numpy as np
import difflib

saveResult = "C:\\Users\叫我西瓜超人\Desktop\Result\eval_result.txt"
requestPath = "C:\\Users\叫我西瓜超人\Desktop\identify_FaceScrubTest.txt"
SaveIdentify_FaceId_Path = "C:\\Users\叫我西瓜超人\Desktop\Save_Identify_FaceId.txt"

resultFile = open(saveResult , "w")

requests=open(requestPath,"r")
identify_FaceId_file=open(SaveIdentify_FaceId_Path,"w")

def file_name(file_dir):
    for root, dirs, files in os.walk(file_dir):
        print ("-----")
        print (len(files))
        print ("-----")
    return files

# 不能直接使用identifyface的请求txt参数进行计算(因为线程的结束并不是按照请求的开始而开始的，不是按顺序的)
# for request_ in requests:
#     temp = request_.split(";")
#     res_count+=1
#     temp1 = str(temp[1]).split("\\")
#     identify_FaceId = temp1[5]
#     identify_FaceId_file.write(identify_FaceId+","+str(res_count)+"\n")
#     print(identify_FaceId)

def eval_rank(responsePath):
    RightResponse = 0
    rankHitStatistics = [0, 0, 0, 0, 0]
    totalResponse = []
    maxScore = 0
    minScore = 0
    noFace = 0
    out5 = 0
    for file_single in file_name(responsePath):
        if "json" in file_single:
            RightResponse = RightResponse + 1
            f = open(responsePath+file_single, encoding='utf-8')
            S = json.load(f)
            faceDatas = S.get("faceDatas")
            temp = str(file_single).split("_")
            faceLabel = temp[0]
            # print(faceLabel)
            # print("---------------------------------------------------------------------------------")
            # print("Face Label:" + str(file_single) + " , Length of faceDatas result:" + str(len(faceDatas)))
            Predict_label=[]
            Predice_score=[]

            for i in range(len(faceDatas)):
                temp = str(S.get("faceDatas")[i].get("customId")).split("_")
                Predict_label.append(temp[0])
                Predice_score.append(S.get("faceDatas")[i].get("score"))
                sim_Threshold = []
            # print(Predict_label)
            if len(Predict_label):
                for i in range(len(Predict_label)):
                    temp = difflib.SequenceMatcher(None, faceLabel, Predict_label[i]).quick_ratio()
                    # print(difflib.SequenceMatcher(None, faceLabel, Predict_label[i]).quick_ratio())
                    sim_Threshold.append(temp)
                # print(sim_Threshold)
                # print(min(sim_Threshold))
                    # print(difflib.SequenceMatcher(None, faceLabel, Predict_label[::]).quick_ratio())
                if  0.8 <= max(sim_Threshold):
                # if faceLabel in Predict_label:
                #     if(sim_Threshold[])
                    position = sim_Threshold.index(max(sim_Threshold))
                    # print("------------------------------------------------------------------------------------------------------------------------------------------------------")
                    # print(str(RightResponse) + ": Real:" + file_single + " Predict:" + str(Predict_label) + " Score:" + str(Predice_score))
                    # print(position)
                    # position = Predict_label.index(faceLabel)
                    # rankHitStatistics[position] += 1

                    for i in range(position , 5):
                        rankHitStatistics[i] += 1

                    if maxScore < Predice_score[position]:
                        maxScore = Predice_score[position]
                    if minScore > Predice_score[position]:
                        minScore = Predice_score[position]

                    # print(rankHitStatistics)
                else :
                    print(sim_Threshold)
                    print(min(sim_Threshold))
                    print("------------------------------------------------------------------------------------------------------------------------------------------------------")
                    print( str(RightResponse) + ": The response FaceDatas(Top5) is not match for request:")
                    print( str(RightResponse) +": Real:"+file_single +" Predict:"+str(Predict_label) +" Score:"+str(Predice_score))
                    out5 = out5 + 1
            else:
                print("------------------------------------------------------------------------------------------------------------------------------------------------------")
                print(str(RightResponse) +": The response is No FaceDatas for request: ")
                # print(sim_Threshold)
                # print(min(sim_Threshold))
                print( str(RightResponse) + ": Real:" + file_single + " Predict:" + str(Predict_label)+" Score:"+str(Predice_score))
                noFace = noFace+1
    print("------------------------------------------------------------------------------------------------------------------------------------------------------")
    # print("The number of right Response is: "+ str(RightResponse))
    for i in range(5):
        totalResponse.append(RightResponse)

    # print(totalResponse)
    print("the number of Hit :T_1 T_2 T_3 T_4 T_5")
    print("                  "+str(rankHitStatistics))

    shootingRate = list(map(lambda x: x[0]/x[1], zip(rankHitStatistics,  totalResponse)))
    print("------------------------------------------------------------------------------------------------------------------------------------------------------")
    print("Total Success Response: "+ str(totalResponse))
    print("------------------------------------------------------------------------------------------------------------------------------------------------------")
    print("Top_1: [total hit:"+ str(rankHitStatistics[0]) +"] [hit rate:"+str(shootingRate[0]*100)+"]")
    print("Top_2: [total hit:"+ str(rankHitStatistics[1]) +"] [hit rate:"+str(shootingRate[1]*100)+"]")
    print("Top_3: [total hit:"+ str(rankHitStatistics[2]) +"] [hit rate:"+str(shootingRate[2]*100)+"]")
    print("Top_4: [total hit:"+ str(rankHitStatistics[3]) +"] [hit rate:"+str(shootingRate[3]*100)+"]")
    print("Top_5: [total hit:"+ str(rankHitStatistics[4]) +"] [hit rate:"+str(shootingRate[4]*100)+"]")
    print("------------------------------------------------------------------------------------------------------------------------------------------------------")
    print("No Face: [total: "+ str(noFace) +"] "+str(noFace/totalResponse[0]*100))
    print("maxScore: "+str(maxScore))
    print("minScore: "+str(minScore))
    print("Out_5: [total:"+str(out5)+"] [Out5 rate:"+str(out5 /totalResponse[0]*100)+"]")

    plt.figure()
    x = np.arange(0,len(rankHitStatistics))
    y = np.arange(0,1)
    plt.xlim((1,len(rankHitStatistics)))
    plt.ylim((0.85, 1.0))
    #设置坐标轴刻度
    my_x_ticks = np.arange(1, 6, 1)
    my_y_ticks = np.arange(0.85, 1.0, 0.01)
    plt.xticks(my_x_ticks)
    plt.yticks(my_y_ticks)

    plt.grid(True, linestyle="-", color="gray", linewidth="0.1")
    plt.plot(x,shootingRate,color="red",linewidth=0.5)
    plt.xlabel("Rank")
    plt.ylabel("Matching Rate")
    # plt.legend()
    plt.title("CMC Curve")
    plt.show()

if __name__ =="__main__":
    if len(sys.argv) != 2:
        print("Usage: Please set the position of response save !!! ")
        exit(1)
    input_dir = sys.argv[1]
    eval_rank(input_dir)


