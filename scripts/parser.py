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

    def parse_errors_with_Filepath(self,l):
        for dic in l:          
            for k, v in dic.items():
                if k == "filePath":
                    self.postId = self.getPostId(v)
                if k == 'ruleId':
                    self.jdic[self.postId][v] = 1 if v not in self.jdic[self.postId] else self.jdic[self.postId][v] + 1
                if isinstance(v, list):
                    self.parse_errors_with_Filepath(v)

    def parse_errors(self, l):
        for dic in l:
            for k, v in dic.items():
                if k == 'ruleId':
                    self.jdic[v] = 1 if v not in self.jdic else self.jdic[v] + 1
                if isinstance(v, list):
                    self.parse_errors(v)

    def initializeDict(self, dict):
        print("Initializing csv dict")
        for subDict in dict:
            for k, v in subDict.items():
                if k == "filePath":
                    v = self.getPostId(v)
                    self.jdic[v] = {}

    def getPostId(self, filepath:str):
        filepath = filepath.split("/").pop().split(".").pop(0)
        return filepath

    def out_to_csv_single_line(self, dic, filename,openType,headers = []):
        with open(filename, openType, newline='') as file:
            writer = csv.DictWriter(file, dic.keys())
            writer.writeheader()
            writer.writerow(dic)

    def out_to_csv_filePath(self, dic, filename,openType,headers = []):
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


def createRuleDict():
    csvRules = {"Best Practices":[],"ECMAScript 6":[],"Node.js and CommonJS":[],"Possible Errors":[],"Stylistic Issues":[],"Variables":[]}
    with open("RegrasLinter.csv","r") as csvFile:
        csvReader=csv.DictReader(csvFile)
        for row in csvReader:
                csvRules[row["Rule Classification"]].append(row["Rules"])

        return csvRules
    return {}
def aggregateRules():
    ruleDict = createRuleDict()
    aggregateRules = {"Best Practices":0,"ECMAScript 6":0,"Node.js and CommonJS":0,"Possible Errors":0,"Stylistic Issues":0,"Variables":0}
    with open("allrules.csv","r") as csvFile:
        reader = csv.reader(csvFile)
        FieldNames = []
        values = []
        for index,row in enumerate(reader):
                if index == 0:
                    FieldNames = row
                else:
                    values = row
        for y in ruleDict:
            for x in zip(FieldNames,values):
                if x[0] in ruleDict[y]:
                    aggregateRules[y] += int(x[1])
    with open("aggregatedRules.csv","w") as csvFile:
        writer = csv.DictWriter(csvFile,aggregateRules)
        writer.writeheader()
        writer.writerow(aggregateRules)

def parseErrorsSingle(jsonFiles):
    parser = Parser()
    for x in jsonFiles:
        parser.parse_errors(x)
    parser.out_to_csv_single_line(parser.jdic,"singleLineRuleViolations.csv","w")

def parseFilePathRules(jsonfiles):
    parser = Parser()
    for idx,x in enumerate(jsonfiles):
        print("parsing snippet{}".format(idx))
        parser.initializeDict(x)
        parser.parse_errors_with_Filepath(x)
    parser.out_to_csv_filePath(parser.jdic, 'PersonalizedIndividualReportFixed.csv','w',["Post Id"])
        

parser = Parser()
l =[]
os.chdir("../codigosStackOverflow")
fileDir = glob.glob('report*.json')
z=0
menu=True
for idx,x in enumerate(fileDir):

    print("Reading json Reports{}...".format(idx))
    l.append(parser.parse_json(x))

while(menu):
    print("Menu")
    print("Parse Errors json with rule count in one line : 1")
    print("Parse Errors json with filepath count:2")
    print("Aggregate rules:3")
    userInput = input("Select an option")
    print(userInput)
    if userInput == "1":
        parseErrorsSingle(l)
    if userInput =="2":
        parseFilePathRules(l)
    if userInput =="3":
        aggregateRules()