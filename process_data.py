import pandas as pd

folder = "./datasets/"

df = pd.read_csv(folder + "datos_temp.csv", sep=";", header=0)
