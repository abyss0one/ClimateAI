import pandas as pd
from sodapy import Socrata
import requests

client = Socrata("analisi.transparenciacatalunya.cat", None)

lim = 1000000000

## DATOS DE TEMPERATURAS EN ºC
results_temp = client.get("nzvn-apee",
                     select="id, codi_estacio, codi_variable, data_lectura, valor_lectura",
                     where="codi_variable = '32' AND id LIKE '%00'", 
                    #  group="id, codi_estacio",
                     limit=lim)
results_df_temp = pd.DataFrame.from_records(results_temp)
results_df_temp.to_csv("datos_temp.csv")
print("datos_temp.csv ACABADO")

## DATOS DE PRECIPITACION EN MM (1MM EQUIVALE A UN LITRO DE AGUA POR METRO CUADRADO)
results_precip = client.get("nzvn-apee",
                     select="id, codi_estacio, codi_variable, data_lectura, valor_lectura",
                     where="codi_variable = '35' AND id LIKE '%00'", 
                    #  group="id, codi_estacio",
                     limit=lim)
results_df_precip = pd.DataFrame.from_records(results_precip)
results_df_precip.to_csv("datos_precip.csv")
print("datos_precip.csv ACABADO")


## DATOS DE HUMEDAD RELATIVA EN %
results_hume = client.get("nzvn-apee",
                     select="id, codi_estacio, codi_variable, data_lectura, valor_lectura",
                     where="codi_variable = '33' AND id LIKE '%00'", 
                    #  group="id, codi_estacio",
                     limit=lim)
results_df_hume = pd.DataFrame.from_records(results_hume)
results_df_hume.to_csv("datos_hume.csv")
print("datos_hume.csv ACABADO")


## DATOS DE IRRADIANCIA SOLAR GLOBAL EN W/m²
results_irrad = client.get("nzvn-apee",
                     select="id, codi_estacio, codi_variable, data_lectura, valor_lectura",
                     where="codi_variable = '36' AND id LIKE '%00'", 
                    #  group="id, codi_estacio",
                     limit=lim)
results_df_irrad = pd.DataFrame.from_records(results_irrad)
results_df_irrad.to_csv("datos_irrad.csv")
print("datos_irrad.csv ACABADO")