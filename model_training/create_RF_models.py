import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import mean_squared_error
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score
import joblib
import os
script_directory = os.path.dirname(os.path.abspath(__file__))
os.chdir(script_directory)

df = pd.read_csv('../datasets_models/data.csv')
comarques_df = pd.read_csv("../comarques.csv")

def label_encoder(x):
    if x < 6:
        return 0
    elif 6 < x <= 12:
        return 1
    elif 12 < x <= 90:
        return 2
    elif 90 < x <= 180:
        return 3
    elif 180 < x <= 360:
        return 4
    else:
        return 5

df['precip_encoded'] = df['precip'].apply(label_encoder)

df = df.dropna()
comarques_bcn = comarques_df.comarca.values
comarques_dict = dict()

for comarca in comarques_bcn:
    aux = df[df.comarca == comarca].drop(["precip", "precip_anterior", "comarca"], axis=1)
    comarques_dict[comarca] = aux

dicc_RF_models = dict()

for comarca in comarques_bcn:
    comarques_dict[comarca]["precip_encoded"] = comarques_dict[comarca]["precip_encoded"].astype(str)

    # Dividir los datos en características (X) y la columna a predecir (y)
    x = comarques_dict[comarca].drop(columns=["data_lectura", "precip_encoded"])
    y = comarques_dict[comarca]["precip_encoded"]

    x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=47)

    rf_model = RandomForestClassifier(random_state=47)
    rf_model.fit(x_train, y_train)

    y_pred = rf_model.predict(x_test)

    # Calcular Accuracy
    accuracy = accuracy_score(y_test, y_pred)
    print("Accuracy:", accuracy)

    # Calcular Precision
    precision = precision_score(y_test, y_pred, average='weighted')
    print("Precision:", precision)

    dicc_RF_models[comarca] = rf_model

joblib.dump(dicc_RF_models, "../models/all_rf_models.pkl")

