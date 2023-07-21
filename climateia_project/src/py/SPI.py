import numpy as np
from scipy.stats import gamma
import pandas as pd

import os

import sys

import json

def calculate_spi(historical_precipitation, predicted_precipitation):
    # Step 1: Fit the gamma distribution to historical precipitation data
    shape, loc, scale = gamma.fit(historical_precipitation)

    # Step 2: Calculate the cumulative probability of the predicted precipitation
    p = gamma.cdf(predicted_precipitation, shape, loc, scale)

    # Step 3: Calculate the SPI using the inverse of the cumulative distribution function (CDF)
    spi = gamma.ppf(p, shape, loc, scale)

    return spi

# Get the current working directory
current_dir = os.path.dirname(__file__)

# Construct the correct relative file path to 'dh_25.json'
json_file_path = os.path.join(current_dir, '../components/Garraf.json')

# Open the JSON file and read data
with open(json_file_path, 'r') as file:
    datosHist_json = file.read()

    # Convertir el JSON a una lista de diccionarios
    datosHist_list = json.loads(datosHist_json)

    # Convertir la lista de diccionarios a un DataFrame
    datosHist_df = pd.DataFrame(datosHist_list)

    # Extraer la columna de precipitación histórica del DataFrame
    historical_precipitation = datosHist_df['precip'].tolist()
    print(historical_precipitation)

prediccion = 0

spi_result = calculate_spi(historical_precipitation, prediccion)
print(spi_result)


# if __name__ == "__main__":
#     # Obtener la ruta del modelo y las variables como argumentos de línea de comandos
#     if len(sys.argv) > 2:
#         # datosHist_path = sys.argv[1]
#         # prediccion = float(sys.argv[2])

#         datosHist_path = 'dh_25.json'
#         prediccion = float(55.5)


#         try:
#             # Leer el archivo JSON desde la ruta proporcionada
#             with open( datosHist_path, 'r') as file:
#                 datosHist_json = file.read()

#                 # Convertir el JSON a una lista de diccionarios
#                 datosHist_list = json.loads(datosHist_json)

#                 # Convertir la lista de diccionarios a un DataFrame
#                 datosHist_df = pd.DataFrame(datosHist_list)

#                 # Extraer la columna de precipitación histórica del DataFrame
#                 historical_precipitation = datosHist_df['valor_lectura'].tolist()

#             print(historical_precipitation)

#             # Calcular el SPI
#             spi_result = calculate_spi(historical_precipitation, prediccion)
#             print("SPI:", spi_result)

#         except json.JSONDecodeError:
#             print("Error: El archivo JSON no está en formato válido.")
#         except FileNotFoundError:
#             print("Error: No se encontró el archivo. Por favor, verifique la ruta del archivo.")
#         except Exception as e:
#             print(f"Error genérico: {e}")

#     else:
#         print("Por favor, especifique la ruta del modelo y los parámetros como argumentos.")


