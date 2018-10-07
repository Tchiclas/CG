import csv
import sys
import os, fnmatch

campos = [ "NUM", "1.a", "1.b", "1.c", "2.a", "2.b", "2.c", "2.d", "3.a", "3.b", "3.c" ]
print("Interpretando o ficheiro: " + sys.argv[1] + "\n\r")
with open(sys.argv[1]) as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=';')
    line_count = 0
    questao = 0
    for row in csv_reader:
        line_count += 1
        if line_count <> 1:
            sys.exit("ERRO: demasiadas linhas")
        for it in row[:-1]:
            print(campos[questao] + " " + it)
            questao = questao + 1
print("EOF: Processed " + str(line_count) + " lines")