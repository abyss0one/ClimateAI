# %%
import pandas as pd

# %% [markdown]
# # READ DATASETS

# %%
folder = "./datasets/"


# %% [markdown]
# ### STATIONS DATASET
# 

# %%
df_stations = pd.read_csv(folder + "DB_estaciones.txt", sep=";", header=0)

# %%

df_mesures = pd.read_csv(folder + "datos_temp.csv", header=0).drop(['Unnamed: 0'], axis=1)

# %%
df_mesures

# %% [markdown]
# # PROCESS DATA

# %%
codiE_por_comarca = {}
for comarca, group in df_stations.groupby('comarca'):
    codiE_por_comarca[comarca] = list(group['codiE'].unique())
codiE_por_comarca

# %%
comarcas_bcn = ['Vallès Oriental', 'Alt Penedès', 'Baix Llobregat', 'Barcelonès', 'Garraf', 'Maresme', 'Vallès Occidental']
codiE_comarca = [codiE_por_comarca[i] for i in comarcas_bcn]
codiE_comarca

# %%
data_comarca = []
for i in comarcas_bcn:
    df_filtrado = df_mesures[df_mesures['codi_estacio'].isin(codiE_por_comarca[i])]
    data_comarca.append(df_filtrado.reset_index(drop=True))

# %%
for comarca in data_comarca:
    comarca.data_lectura = comarca.data_lectura.str.split('T').str[0]

# %%
media_por_dia_comarca = []
for comarca in data_comarca:
    comarca['data_lectura'] = pd.to_datetime(comarca['data_lectura'])
    media_por_dia_comarca.append(comarca.groupby([comarca['data_lectura'].dt.date, 'codi_variable'])['valor_lectura'].mean().reset_index())

# %%
media_por_dia_comarca[0]