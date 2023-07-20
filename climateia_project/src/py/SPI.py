import numpy as np
from scipy.stats import gamma

import sys

import json


def calculate_spi(historical_precipitation, predicted_precipitation):
    # Calcular la media y la desviación estándar de los datos históricos
    mean_precipitation = np.mean(historical_precipitation)
    std_dev_precipitation = np.std(historical_precipitation)

    # Calcular el SPI para el día de la predicción
    x = predicted_precipitation
    p = 1 - gamma.cdf(x, mean_precipitation, std_dev_precipitation)

    spi = gamma.ppf(p, 1)

    return spi

if __name__ == "__main__":
    # Obtener la ruta del modelo y las variables como argumentos de línea de comandos
    if len(sys.argv) > 2:
        datosHist_path = sys.argv[1]
        prediccion = float(sys.argv[2])


        try:
            # Leer el archivo JSON desde la ruta proporcionada
            with open( datosHist_path, 'r') as file:
                datosHist_json = file.read()

                # Convertir el JSON a una lista de valores de precipitación histórica
                datosHist = json.loads(datosHist_json)

            # Calcular el SPI
            spi_result = calculate_spi(datosHist, prediccion)
            print("SPI:", spi_result)

        except json.JSONDecodeError:
            print("Error: El archivo JSON no está en formato válido.")
        except FileNotFoundError:
            print("Error: No se encontró el archivo. Por favor, verifique la ruta del archivo.")
        except Exception as e:
            print(f"Error genérico: {e}")

    else:
        print("Por favor, especifique la ruta del modelo y los parámetros como argumentos.")

