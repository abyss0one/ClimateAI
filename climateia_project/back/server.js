const express = require('express');
const cors = require('cors');

const multer = require('multer');
const path = require('path');

const fs = require('fs');

const { spawn } = require('child_process');

const app = express();

// Habilitar CORS para todas las rutas
app.use(cors());

// Ruta para abrir un archivo desde el script de Python
app.get('/prediction/:idcomarca/:dias', (req, res) => {
    const comarca = req.params.idcomarca;
    const dias = req.params.dias;

      // Ruta completa al script de Python para PREDICTION

      const pythonScriptPath = path.join(__dirname, '../../server.py');


      // Ejecutar el script de Python y pasar el nombre del archivo como argumento
      // const pythonScript = spawn('C:/Users/PC/anaconda3/python', [pythonScriptPath, filename]);
    console.log(pythonScriptPath, comarca, dias);

      const pythonScript = spawn('python', [pythonScriptPath, comarca, dias ]);
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
    });

// Ruta para abrir un archivo desde el script de Python
app.get('/calculate_SPI/:filename/:prediction', (req, res) => {
const {filename} = req.params.filename;
const {prediction} = req.params.prediction;
console.log(filename)
console.log(prediction)


  // Ruta completa al script de Python para calcular SPI

  const pythonScriptPath = path.join(__dirname, 'src/py/SPI.py');

  
  // Ejecutar el script de Python y pasar el nombre del archivo como argumento
  // const pythonScript = spawn('C:/Users/PC/anaconda3/python', [pythonScriptPath, filename]);
  const pythonScript = spawn('python', [pythonScriptPath, filename, prediction ]);
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
});


// Iniciar el servidor
app.listen(5000, () => {
  console.log('Servidor en ejecución en el puerto 5000');
});
