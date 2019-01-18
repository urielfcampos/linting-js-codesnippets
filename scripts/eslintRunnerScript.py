import subprocess
import os
import glob,shlex

def runESlint():
    os.chdir("../codigosStackOverflow")
    fileList = glob.glob('SOTorrentMining/*.js')
    fileList = listSplit(fileList,20)
    reportNumber =0
    ArgsList = []
    #print(fileList)
    #arg_list = [['./node_modules/eslint/bin/eslint.js'+fileName+'-f json -o report.json'] for fileName  in fileList]
    
    for x in fileList:
        args = shlex.split('./node_modules/eslint/bin/eslint.js {} -f json -o report{}.json'.format(" ".join(x),reportNumber))
        reportNumber += 1
        ArgsList.append(args)
    processList = [subprocess.Popen(argsToRun)for argsToRun in ArgsList]
    for proc in processList:
        proc.wait()
def listSplit(listToSplit:list, countSplit:int):
    length = len(listToSplit)
    splitlist = []
    for x in range(countSplit):
        splitlist.append(listToSplit[length*x // countSplit : (x+1)*length//countSplit])
    return splitlist


if __name__ == "__main__":
    runESlint()
