import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
import matplotlib.pyplot as plt
import matplotlib.dates as mdates
from datetime import datetime
import joblib

# temp degree 8
# hume degree 5

folder_output = "./models/"

df_temp = pd.read_csv("./datasets_models/mean_temp_x_day.csv").drop(["codi_variable"], axis=1)
df_hume = pd.read_csv("./datasets_models/mean_hume_x_day.csv").drop(["codi_variable"], axis=1)

df_hume['valor_anterior'] = df_hume.groupby('comarca')['valor_lectura'].shift(1)
df_temp['valor_anterior'] = df_temp.groupby('comarca')['valor_lectura'].shift(1)

df_hume['data_lectura'] = pd.to_datetime(df_hume['data_lectura'])
df_hume = df_hume.dropna().reset_index(drop=True)
df_hume['mes'] = df_hume['data_lectura'].dt.month
df_hume = df_hume.drop(["data_lectura"], axis=1)

df_temp['data_lectura'] = pd.to_datetime(df_temp['data_lectura'])
df_temp = df_temp.dropna().reset_index(drop=True)
df_temp['mes'] = df_temp['data_lectura'].dt.month
df_temp = df_temp.drop(["data_lectura"], axis=1)

dicc_comarques_temp = {}

# Itera sobre las comarcas únicas en el dataframe
for comarca in df_temp['comarca'].unique():
    # Filtra las filas correspondientes a la comarca actual
    df_comarca = df_temp[df_temp['comarca'] == comarca].copy()
    
    # Elimina la columna "comarca" del dataframe resultante
    df_comarca.drop('comarca', axis=1, inplace=True)
    
    # Almacena el dataframe en el diccionario
    dicc_comarques_temp[comarca] = df_comarca.reset_index(drop=True)

dicc_comarques_hume = {}

# Itera sobre las comarcas únicas en el dataframe
for comarca in df_hume['comarca'].unique():
    # Filtra las filas correspondientes a la comarca actual
    df_comarca = df_hume[df_hume['comarca'] == comarca].copy()
    
    # Elimina la columna "comarca" del dataframe resultante
    df_comarca.drop('comarca', axis=1, inplace=True)
    
    # Almacena el dataframe en el diccionario
    dicc_comarques_hume[comarca] = df_comarca.reset_index(drop=True)

comarques_bcn = list(dicc_comarques_temp.keys())


dicc_models_temp = dict()
dicc_poly_features_temp = dict()

for i in range(len(comarques_bcn)):
    x = dicc_comarques_temp[comarques_bcn[i]].drop(["valor_lectura"], axis=1)
    y = dicc_comarques_temp[comarques_bcn[i]].valor_lectura

    x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=47)

    poly_features = PolynomialFeatures(degree=8)
    x_train_poly = poly_features.fit_transform(x_train)
    x_test_poly = poly_features.transform(x_test)

    model = LinearRegression()
    model.fit(x_train_poly, y_train)

    y_pred = model.predict(x_test_poly) 
    mse = mean_squared_error(y_test, y_pred)
    r2 = r2_score(y_test, y_pred)
    print(f'Modelo {i}: ')
    print(f"Error cuadrático medio (MSE): {mse}")
    print(f"R2 Score: {r2}\n")

    dicc_models_temp[comarques_bcn[i]] = model
    dicc_poly_features_temp[comarques_bcn[i]] = poly_features

joblib.dump(dicc_models_temp, folder_output + "all_temp_models.joblib")
joblib.dump(dicc_poly_features_temp, folder_output + "all_temp_features.joblib")


#########################


dicc_models_hume = dict()
dicc_poly_features_hume = dict()

for i in range(len(comarques_bcn)):
    x = dicc_comarques_hume[comarques_bcn[i]].drop(["valor_lectura"], axis=1)
    y = dicc_comarques_hume[comarques_bcn[i]].valor_lectura

    x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=47)

    poly_features = PolynomialFeatures(degree=5)
    x_train_poly = poly_features.fit_transform(x_train)
    x_test_poly = poly_features.transform(x_test)

    model = LinearRegression()
    model.fit(x_train_poly, y_train)

    y_pred = model.predict(x_test_poly) 
    mse = mean_squared_error(y_test, y_pred)
    r2 = r2_score(y_test, y_pred)
    print(f'Modelo {i}: ')
    print(f"Error cuadrático medio (MSE): {mse}")
    print(f"R2 Score: {r2}\n")

    dicc_models_hume[comarques_bcn[i]] = model
    dicc_poly_features_hume[comarques_bcn[i]] = poly_features

joblib.dump(dicc_models_hume, folder_output + "all_hume_models.joblib")
joblib.dump(dicc_poly_features_hume, folder_output + "all_hume_features.joblib")