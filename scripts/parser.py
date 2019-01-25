# coding: utf-8
import json
import csv
import glob
import os

class Parser:

    def __init__(self):
        self.jdic = {}

    def parse_json(self, path):
        with open(path, 'r') as file:
            return json.loads(file.read())

    def parse_errors(self, l):
        for dic in l:
            for k, v in dic.items():
                #print(k,v)
                if k == 'ruleId':
                    self.jdic[v] = 1 if v not in self.jdic else self.jdic[v] + 1
                if isinstance(v, list):
                    self.parse_errors(v)

    def out_to_csv(self, dic, filename,openType):
        with open(filename, openType, newline='') as file:
            writer = csv.DictWriter(file, dic.keys())
            writer.writeheader()
            writer.writerow(dic)

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
    parser.parse_errors(x)
for x in l:
    for y in x:
        parser.out_to_csv(y,"IndividualReport.csv",'a')
##print("PARSED: ", parser.jdic)
parser.out_to_csv(parser.jdic, 'output.csv','w')
