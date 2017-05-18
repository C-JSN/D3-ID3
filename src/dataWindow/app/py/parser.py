import re
# from main import fileName
import csv
import json
import sys

fileName = sys.stdin.read().strip()

def isfloat(value):
    try:
        float(value)
        return True
    except ValueError:
        return False

def readCsvFile(fileName):
    with open(fileName) as csvfile:
        datas = []
        readCSV = csv.reader(csvfile, delimiter=',')
        header = []
        for idx, row in enumerate(readCSV):
            data = {}
            if idx == 0:
                header = row
            if idx > 0:
                for i, val in enumerate(row):
                    if isfloat(row[i]):
                        row[i] = float(row[i])
                    data[header[i]] = row[i]
                datas.append(data)
    return datas

def readJsonFile(fileName):
    with open(fileName) as data_file:
        datas = json.dumps(json.loads(data_file.read()))
    return datas


if fileName[-4:] == '.csv':
    output = readCsvFile(fileName)
elif fileName[-4:] == 'json':
    output = readJsonFile(fileName)

writeText = 'storage =' + json.dumps(output)
with open('app/py/data.py', 'w') as f:
    f.write(writeText)
    f.close()
