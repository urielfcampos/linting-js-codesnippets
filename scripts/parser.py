# coding: utf-8
import json
import csv
import glob
import os

class Parser:
    postId =''
    def __init__(self):
        self.jdic = {}

    def parse_json(self, path):
        with open(path, 'r') as file:
            return json.loads(file.read())

    def parse_errors(self, l):
        for dic in l:
            for k, v in dic.items():
                if k == "filePath":
                    self.postId = self.getPostId(v)
                if k == 'ruleId':
                    self.jdic[self.postId][v] = 1 if v not in self.jdic[self.postId] else self.jdic[self.postId][v] + 1
                if isinstance(v, list):
                    self.parse_errors(v)

    def initializeDict(self, dict):
        for subDict in dict:
            for k, v in subDict.items():
                if k == "filePath":
                    v = self.getPostId(v)
                    self.jdic[v] = {}

    def getPostId(self, filepath:str):
        filepath = filepath.split("/").pop().split(".").pop(0)
        return filepath

    def out_to_csv(self, dic, filename,openType,headers = []):
        self.ExtractRules(dic, headers)
        with open(filename, openType, newline='') as file:
            writer = csv.DictWriter(file, fieldnames=headers)
            writer.writeheader()
            for x in dic:
                writer.writerow(self.createCsvDict(x,dic[x],headers))


    def ExtractRules(self, dic, headers):
        for x in dic:
            for y in dic[x]:
                if y not in headers:
                    headers.append(y)

    def createCsvDict(self,key,dic,headers):
        csvDict = {}
        for x in headers:
            csvDict[x] = ''
        csvDict['Post Id'] = key
        for keys,values in dic.items():
            csvDict[keys] = values
        return csvDict








parser = Parser()
l = []
os.chdir("../codigosStackOverflow")
fileDir = glob.glob('report*.json')
z=0
#print(fileDir)
for x in fileDir:
    l.append(parser.parse_json(x))
for x in l:
    #print(x)
    parser.initializeDict(x)
    parser.parse_errors(x)
    print(parser.jdic)
#for x in l:
#    for y in x:
#        parser.out_to_csv(y,"IndividualReport.csv",'a')
##print("PARSED: ", parser.jdic)
parser.out_to_csv(parser.jdic, 'PersonalizedIndividualReport.csv','w',["Post Id"])
