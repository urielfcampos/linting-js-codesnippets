import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import os

os.chdir("../codigosStackOverflow")
df = pd.read_csv("aggregatedRules.csv", sep=",")

def distribution_large_files():
    series = df[''].value_counts()

    print (series)

    ax = series.plot(kind='bar', color=['#AFAFAF'], legend=False, figsize=(8, 4))
    ax.set_ylabel("# Occurrences of Violations per Category")

    fig = ax.get_figure()
    fig.savefig('large-large-files-distribution.eps', bbox_inches = "tight")

    #plt.show()

def distribution_per_project():
    print(df)
    #s = df.value_counts()
    #t = s.count()
distribution_large_files()