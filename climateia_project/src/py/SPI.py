import numpy as np
from scipy.stats import gamma

import sys


def calculate_spi(historical_precipitation, predicted_precipitation):
    # Calcular la media y la desviación estándar de los datos históricos
    mean_precipitation = np.mean(historical_precipitation)
    # np.mean(historical_precipitation)
    std_dev_precipitation = np.std(historical_precipitation)
    # np.std(historical_precipitation)

    # Calcular el SPI para el día de la predicción
    x = predicted_precipitation
    p = 1 - gamma.cdf(x, mean_precipitation, std_dev_precipitation)

    spi = gamma.ppf(p, 1)

    return spi

if __name__ == "__main__":
    # Obtener la ruta del modelo y las variables como argumentos de línea de comandos
    if len(sys.argv) > 1:
        datosHist = sys.argv[1]
        prediccion = sys.argv[2]
        calculate_spi(datosHist, prediccion)
    else:
        print("Por favor, especifique la ruta del modelo y los parámetros como argumentos.")

