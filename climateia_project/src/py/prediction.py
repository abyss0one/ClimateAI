
import sys
import joblib
import pandas as pd
from datetime import datetime

import json
import os

# def load_models(model_path):
#     try:
#         # Cargar el modelo desde el archivo pkl
#         dict_models = joblib.load(model_path)
#         return model
#     except Exception as e:
#         print(f"Error al cargar el modelo: {str(e)}")
#         return None

prediction = []

def predict(model, features,fecha_actual, fecha_prediction, datos, model_temp, model_hume, features_temp, feautres_hume):
    # global prediction

    try:
        # Realizar las predicciones utilizando el modelo y los parámetros
        # Aquí debes implementar tu lógica de predicción basada en el modelo cargado

        # los dos modelos necesitan valor_anterior, mes
        res_hume = ""
        res_temp = ""
        #HACER PREDICCION DE TEMP Y HUME DESPUES DE LA PREDICCION DE PREC

        # Ejemplo de predicción ficticia
        for i in range(int(fecha_prediction)):
            print("stop 0")
            pred_poly = features.transform(datos)
            prediction = model.predict(pred_poly)
            print("stop 1")
            print(datos.temp.values)
            datos_temp = pd.DataFrame({'valor_anterior': datos.temp.values, 'mes': [fecha_actual.month]})
            print(datos_temp)
            datos_hume = pd.DataFrame({'valor_anterior': datos.hume.values, 'mes': [fecha_actual.month]})
            print(datos_hume)
            aux = datos
            print("stop 2")
            poly_temp = features_temp.transform(datos_temp)
            pred_temp = model_temp.predict(poly_temp)
            print("pred temp : ", pred_temp)
            print("stop 3")
            poly_hume = feautres_hume.transform(datos_hume)
            pred_hume = model_hume.predict(poly_hume)
            res_hume = pred_hume
            res_temp = pred_temp

            print("pred hume : ", pred_hume)
            print("stop 4")

            # datos = [[pred_temp[0], pred_hume[0], aux[0], prediction[0], aux[1]]]
            datos = pd.DataFrame({'temp': pred_temp, 'hume':pred_hume, 'temp_anterior': aux.temp.values, 'precip_anterior': prediction, 'hume_anterior':aux.hume.values})
            print("datos al final:\n", datos)
            fecha_actual += pd.Timedelta(days=1)


        return [res_hume, res_temp]

    except Exception as e:
        print(f"Error al realizar la predicción: {str(e)}")
        return None

if __name__ == "__main__":
    # Obtener la ruta del modelo y las variables como argumentos de línea de comandos
    if len(sys.argv) == 3:
        id_comarca = int(sys.argv[1])
        # comarca = sys.argv[2]
        fecha_prediction = sys.argv[2]

        dict_models = joblib.load("./models/all_models.pkl")
        dict_features = joblib.load("./models/all_features.pkl")
        dict_comarques = joblib.load("./comarques.joblib")
        dict_models_temp = joblib.load("./models/all_temp_models.pkl")
        dict_models_hume = joblib.load("./models/all_hume_models.pkl")
        dict_features_temp = joblib.load("./models/all_temp_features.pkl")
        dict_features_hume = joblib.load("./models/all_hume_features.pkl")

        df = pd.read_csv("./datasets_models/data.csv")
        df['data_lectura'] = pd.to_datetime(df['data_lectura'])

        df = df[df['comarca'] == dict_comarques[id_comarca]].sort_values(by='data_lectura', ascending=False)
        fecha_actualizada = df.iloc[0]['data_lectura']
        datos =  df.iloc[0][['temp', 'hume', 'temp_anterior', 'precip_anterior', 'hume_anterior']]
        datos = pd.DataFrame(datos).T.reset_index(drop=True)
        print(datos)
        if dict_models is not None:
            # Realizar la predicción
            prediction = predict(dict_models[dict_comarques[id_comarca]], dict_features[dict_comarques[id_comarca]], fecha_actualizada, fecha_prediction, datos, dict_models_temp[dict_comarques[id_comarca]], dict_models_hume[dict_comarques[id_comarca]], dict_features_temp[dict_comarques[id_comarca]], dict_features_hume[dict_comarques[id_comarca]])
            print("Predicción:", prediction)
    else:
        print("Por favor, especifique la ruta del modelo y los parámetros como argumentos.")

# En este código, se ha agregado la función load_model para cargar el modelo desde el archivo pkl utilizando la biblioteca joblib. Luego, se ha agregado la función predict que realiza la predicción utilizando el modelo y los parámetros comarca y fecha_prediction. Dentro de esta función, debes implementar la lógica de predicción específica para tu modelo.

# En el bloque if __name__ == "__main__", se obtiene la ruta del modelo y los parámetros comarca y fecha_prediction como argumentos de línea de comandos. Luego, se carga el modelo utilizando load_model y se realiza la predicción utilizando predict. El resultado de la predicción se imprime en la consola.

# Recuerda que debes proporcionar la ruta correcta del archivo pkl del modelo al ejecutar el script y asegurarte de que el modelo y los parámetros sean compatibles con la lógica de predicción implementada.

print(prediction[0], prediction[1])



def createJson(temp, hum, file_path):
    try:
        # Crear un diccionario con los valores de temperatura y humedad
        data = {
            "temperatura": temp,
            "humedad": hum
        }

        # Convertir el diccionario en una cadena JSON
        json_data = json.dumps(data)

        # Crear el directorio si no existe
        os.makedirs(os.path.dirname(file_path), exist_ok=True)

        print(os.path.abspath(file_path))

        # Escribir la cadena JSON en el archivo especificado por file_path
        with open(file_path, 'w') as file:
            file.write(json_data)

        return True

    except Exception as e:
        print("Error al crear el JSON:", e)
        return False

# # Valores de temperatura y humedad como variables
# res_temp = 25.5
# res_hume = 60.0

# Ruta del archivo donde se guardará el JSON (ruta absoluta)
ruta_archivo = os.path.abspath("c:/Users/laiag/Desktop/FE_IP_IAPython/ProyectoFinal/ClimateAI/climateia_project/src/data/datagenerated_defaultprediction.json")

# Llamar a la función createJson con los valores proporcionados y la ruta del archivo
if createJson(prediction[0], prediction[1], ruta_archivo):
    print("JSON creado y guardado correctamente en:", ruta_archivo)
else:
    print("Error al crear el JSON y guardar el archivo.")