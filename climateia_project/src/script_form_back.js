import Form_DefaultPrediction from "./components/Form_DefaultPrediction"

const { spawn } = require("child_process");
const pythonScriptPath = "../src/py";

const COMARCA = Form_DefaultPrediction.state.selectedComarca;
const fecha_prediction = Form_DefaultPrediction.state.selectedYear;


const pythonScript = spawn('python', [pythonScriptPath, COMARCA, fecha_prediction]);
console.log(pythonScript);

// Manejar la salida del script de Python
pythonScript.stdout.on('data', (data) => {
  console.log(`Salida del script de Python: ${data}`);
});

// Manejar los errores del script de Python
pythonScript.stderr.on('data', (data) => {
  console.error(`Error en el script de Python: ${data}`);
});

// Finalizar la respuesta con un mensaje
res.send('Archivo abierto desde el script de Python.');

// Iniciar el servidor
app.listen(5000, () => {
  console.log('Servidor en ejecución en el puerto 5000');
});