import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
import matplotlib.pyplot as plt
import joblib

folder = "./datasets_models/"
folder_output = "./models/"
df = pd.read_csv(folder + "data.csv")

df['data_lectura'] = pd.to_datetime(df['data_lectura'])
df = df.dropna()

dicc_comarques = {}

# Itera sobre las comarcas únicas en el dataframe
for comarca in df['comarca'].unique():
    # Filtra las filas correspondientes a la comarca actual
    df_comarca = df[df['comarca'] == comarca].copy()
    
    # Elimina la columna "comarca" del dataframe resultante
    df_comarca.drop('comarca', axis=1, inplace=True)
    
    # Almacena el dataframe en el diccionario
    dicc_comarques[comarca] = df_comarca.reset_index(drop=True)

comarques_bcn = list(dicc_comarques.keys())
joblib.dump(comarques_bcn, 'comarques.joblib')

for i in range(len(comarques_bcn)):
    x = dicc_comarques[comarques_bcn[i]].drop(["precip", "data_lectura"], axis=1)
    y = dicc_comarques[comarques_bcn[i]].precip

    x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=47)

    poly_features = PolynomialFeatures(degree=2)
    x_train_poly = poly_features.fit_transform(x_train)
    x_test_poly = poly_features.transform(x_test)

    model = LinearRegression()
    model.fit(x_train_poly, y_train)

    joblib.dump(model, f'{folder_output}m{i}.pkl')