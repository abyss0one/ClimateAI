# import sys

# def process_file(comarca, fecha_prediction):
#     # Aquí puedes realizar las operaciones que necesites con las variables
#     # Por ejemplo, realizar cálculos o procesamiento específico
    
#     try:
#         # Realizar alguna operación con las variables
#         result = f"Comarca seleccionada: {comarca}, Fecha de predicción: {fecha_prediction}"
        
#         # Imprimir el resultado
#         print(result)
        
#         # Abrir el archivo en modo escritura
#         with open("outputs/salida_script_python.txt", "w") as archivo:
#             # Escribir el resultado en el archivo
#             archivo.write(result)
#     except Exception as e:
#         print(f"Error al procesar las variables: {str(e)}")

# if __name__ == "__main__":
#     # Obtener las variables como argumentos de línea de comandos
#     if len(sys.argv) > 2:
#         comarca = sys.argv[1]
#         fecha_prediction = sys.argv[2]
#         process_file(comarca, fecha_prediction)
#     else:
#         print("Por favor, especifique las variables necesarias como argumentos.")


# En este código, se ha modificado el método process_file para recibir las variables comarca y fecha_prediction como parámetros en lugar de la ruta del archivo. Dentro de este método, puedes realizar las operaciones necesarias con las variables. En este ejemplo, simplemente se concatena una cadena que muestra las variables seleccionadas.

# Luego, se imprime el resultado y se escribe en el archivo "outputs/salida_script_python.txt" utilizando la función open en modo escritura. Recuerda que debes asegurarte de tener una carpeta llamada "outputs" en el directorio donde se encuentra el archivo.py para que el archivo se pueda crear correctamente.

# Finalmente, en el bloque if __name__ == "__main__", se obtienen las variables comarca y fecha_prediction como argumentos de línea de comandos utilizando sys.argv. Estos valores se pasan al método process_file para su procesamiento. Si no se proporcionan los argumentos necesarios, se muestra un mensaje de error.


import sys
import joblib
import pandas as pd

# def load_models(model_path):
#     try:
#         # Cargar el modelo desde el archivo pkl
#         dict_models = joblib.load(model_path)
#         return model
#     except Exception as e:
#         print(f"Error al cargar el modelo: {str(e)}")
#         return None

def predict(model, features, fecha_prediction, datos):
    try:
        # Realizar las predicciones utilizando el modelo y los parámetros
        # Aquí debes implementar tu lógica de predicción basada en el modelo cargado
        
        # Ejemplo de predicción ficticia
        for i in range(fecha_prediction):
            pred_poly = features.transform(datos)
            prediction = model.predict()
        
        return prediction
    except Exception as e:
        print(f"Error al realizar la predicción: {str(e)}")
        return None

if __name__ == "__main__":
    # Obtener la ruta del modelo y las variables como argumentos de línea de comandos
    if len(sys.argv) > 3:
        id_comarca = sys.argv[1]
        # comarca = sys.argv[2]
        fecha_prediction = sys.argv[2]
        
        dict_models = joblib.load("./models/all_models.pkl")
        dict_features = joblib.load("./models/all_features.pkl")
        dict_comarques = joblib.load("./comarques.joblib")

        df = pd.read_csv("./datasets_models/data.csv")
        datos =  df[df.comarca == dict_comarques[str(id_comarca)]].iloc[-1].values[-3:]

        if dict_models is not None:
            # Realizar la predicción
            prediction = predict(dict_models[dict_comarques[str(id_comarca)]], dict_features[dict_comarques[str(id_comarca)]], fecha_prediction, datos)
            print("Predicción:", prediction)
    else:
        print("Por favor, especifique la ruta del modelo y los parámetros como argumentos.")
# En este código, se ha agregado la función load_model para cargar el modelo desde el archivo pkl utilizando la biblioteca joblib. Luego, se ha agregado la función predict que realiza la predicción utilizando el modelo y los parámetros comarca y fecha_prediction. Dentro de esta función, debes implementar la lógica de predicción específica para tu modelo.

# En el bloque if __name__ == "__main__", se obtiene la ruta del modelo y los parámetros comarca y fecha_prediction como argumentos de línea de comandos. Luego, se carga el modelo utilizando load_model y se realiza la predicción utilizando predict. El resultado de la predicción se imprime en la consola.

# Recuerda que debes proporcionar la ruta correcta del archivo pkl del modelo al ejecutar el script y asegurarte de que el modelo y los parámetros sean compatibles con la lógica de predicción implementada.