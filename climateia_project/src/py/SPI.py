import numpy as np
from scipy.stats import gamma
import pandas as pd


import sys

import json


def calculate_spi(historical_precipitation, predicted_precipitation):
    # # Calcular la media y la desviación estándar de los datos históricos
    # mean_precipitation = np.mean(historical_precipitation)
    # std_dev_precipitation = np.std(historical_precipitation)

    # # Calcular el SPI para el día de la predicción
    # x = predicted_precipitation
    # p = 1 - gamma.cdf(x, mean_precipitation, std_dev_precipitation)

    # spi = gamma.ppf(p, 1)

    # Calcular la forma, localización y escala de la distribución gamma a partir de los datos históricos
    shape, loc, scale = gamma.fit(historical_precipitation)

    # Calcular la probabilidad de ocurrencia de la precipitación predicha según la distribución gamma ajustada
    p = 1 - gamma.cdf(predicted_precipitation, shape, loc, scale)

    # Calcular el SPI utilizando la función inversa de la distribución gamma
    spi = gamma.ppf(p, shape, loc, scale)

    return spi

if __name__ == "__main__":
    # Obtener la ruta del modelo y las variables como argumentos de línea de comandos
    if len(sys.argv) > 2:
        # datosHist_path = sys.argv[1]
        # prediccion = float(sys.argv[2])

        datosHist_path = '.dh_25.json'
        prediccion = float(55.5)


        try:
            # Leer el archivo JSON desde la ruta proporcionada
            with open( datosHist_path, 'r') as file:
                datosHist_json = file.read()

                # Convertir el JSON a una lista de diccionarios
                datosHist_list = json.loads(datosHist_json)

                # Convertir la lista de diccionarios a un DataFrame
                datosHist_df = pd.DataFrame(datosHist_list)

                # Extraer la columna de precipitación histórica del DataFrame
                historical_precipitation = datosHist_df['valor_lectura'].tolist()

            print(historical_precipitation)

            # Calcular el SPI
            spi_result = calculate_spi(historical_precipitation, prediccion)
            print("SPI:", spi_result)

        except json.JSONDecodeError:
            print("Error: El archivo JSON no está en formato válido.")
        except FileNotFoundError:
            print("Error: No se encontró el archivo. Por favor, verifique la ruta del archivo.")
        except Exception as e:
            print(f"Error genérico: {e}")

    else:
        print("Por favor, especifique la ruta del modelo y los parámetros como argumentos.")

