# coding: utf-8
import json
import csv

class Parser:

    def __init__(self):
        self.jdic = {}

    def parse_json(self, path):
        with open(path, 'r') as file:
            return json.loads(file.read())

    def parse_errors(self, l):
        for dic in l:
            for k, v in dic.items():
                if k == 'ruleId':
                    self.jdic[v] = 1 if v not in self.jdic else self.jdic[v] + 1
                if isinstance(v, list):
                    self.parse_errors(v)

    def out_to_csv(self, dic, filename):
        with open(filename, 'w', newline='') as file:
            writer = csv.DictWriter(file, dic.keys())
            writer.writeheader()
            writer.writerow(dic)

parser = Parser()
l = parser.parse_json("/home/arjuna/git/trabalhoBD2/codigosStackOverflow/report.json")
print(len(l))
parser.parse_errors(l)
print("PARSED: ", parser.jdic)
parser.out_to_csv(parser.jdic, 'output.csv')
