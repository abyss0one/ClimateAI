// import React, { useState } from 'react';

// const ChatBot = () => {
//   const [messages, setMessages] = useState([{ text: 'Hola!', sender: 'bot' }]);
//   const [showOptions, setShowOptions] = useState(true);
//   const [showWeatherInput, setShowWeatherInput] = useState(false);
//   const [zipCode, setZipCode] = useState('');
//   const API_KEY = 'TU_API_KEY'; // Reemplaza con tu API key de la API climatológica

//   const handleMessageSend = () => {
//     if (showOptions) {
//       setMessages([
//         ...messages,
//         { text: '¿Qué te gustaría saber?', sender: 'bot' },
//         { text: '1. Clima ahora', sender: 'bot' },
//         { text: '2. Consejos', sender: 'bot' },
//       ]);
//     } else {
//       setMessages([...messages, { text: `Has seleccionado la opción ${zipCode === '1' ? 'Clima ahora' : 'Consejos'}`, sender: 'user' }]);
//       if (zipCode === '1') {
//         setShowWeatherInput(true);
//       }
//     }
//     setShowOptions(!showOptions);
//   };

//   const handleOptionClick = (option) => {
//     setMessages([...messages, { text: `Has seleccionado ${option}`, sender: 'user' }]);
//     setZipCode(option);
//     handleMessageSend();
//   };

//   const handleWeatherInputSubmit = () => {
//     // Aquí deberías hacer la llamada a la API climatológica para obtener la información del clima actual utilizando el ZIP Code proporcionado por el usuario.
//     // Puedes usar librerías como axios para hacer la llamada a la API.
//     // Por ejemplo, si utilizas OpenWeatherMap, la URL sería algo así:
//     // `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${API_KEY}`
//     // Recuerda que algunas APIs requieren registro y la obtención de una API key válida.
//     setShowWeatherInput(false);
//     // Lógica para obtener la información del clima y mostrarla en el chat
//   };

//   return (
//     <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg">
//       {messages.map((message, index) => (
//         <div
//           key={index}
//           className={`mb-2 ${message.sender === 'bot' ? 'text-green-500' : 'text-blue-500'} font-semibold`}
//         >
//           {message.text}
//         </div>
//       ))}
//       {showOptions && (
//         <button
//           onClick={handleMessageSend}
//           className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
//         >
//           Hello!
//         </button>
//       )}
//       {showWeatherInput && (
//         <div>
//           <input
//             type="text"
//             value={zipCode}
//             onChange={(e) => setZipCode(e.target.value)}
//             className="border border-gray-300 rounded-lg p-2 mt-2"
//             placeholder="Introduce tu código postal/ZIP"
//           />
//           <button
//             onClick={handleWeatherInputSubmit}
//             className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
//           >
//             Obtener clima
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatBot;

// CORRECIÓN DEL MSN DEL BTN Y OPCIONES
// import React, { useState } from 'react';

// const ChatBot = () => {
//   const [messages, setMessages] = useState([]);
//   const [showOptions, setShowOptions] = useState(false);
//   const [showWeatherInput, setShowWeatherInput] = useState(false);
//   const [zipCode, setZipCode] = useState('');
//   const API_KEY = 'c9fb4d861d57aa1cada026a6ec424394'; // Reemplaza con tu API key de la API climatológica

//   const handleHelloButtonClick = () => {
//     setShowOptions(!showOptions);
//     if (!showOptions) {
//       setMessages([
//         {
//           text: '¡Hola! Bienvenido@ al asistente de ClimateAI. Mi misión es ayudarte con consultas relacionadas al clima como la predicción actual del lugar donde te encuentras y consejos sobre cómo cuidar el medio ambiente.',
//           sender: 'bot'
//         },
//         {
//           text: '¿Qué te gustaría hacer?',
//           sender: 'bot'
//         },
//       ]);
//     }
//   };

//   const handleOptionClick = (option) => {
//     setMessages([...messages, { text: `Has seleccionado ${option}`, sender: 'user' }]);
//     setZipCode('');
//     setShowOptions(false);

//     if (option === '1') {
//       setShowWeatherInput(true);
//     } else {
//       setShowWeatherInput(false);
//     }
//   };

//   const handleWeatherInputSubmit = () => {
//     // Lógica para obtener la información del clima y mostrarla en el chat
//     fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${API_KEY}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setMessages([...messages, { text: `El clima en ${data.name} es: ${data.weather[0].description}`, sender: 'bot' }]);
//       })
//       .catch((error) => {
//         console.error('Error fetching weather data:', error);
//       });

//     setShowWeatherInput(false);
//   };

//   return (
//     <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg">
//       {messages.map((message, index) => (
//         <div
//           key={index}
//           className={`mb-2 ${message.sender === 'bot' ? 'text-green-500' : 'text-blue-500'} font-semibold`}
//         >
//           {message.text}
//         </div>
//       ))}
//       {showOptions && (
//         <div>
//           <button
//             onClick={() => handleOptionClick('1')}
//             className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 mr-2"
//           >
//             Clima ahora
//           </button>
//           <button
//             onClick={() => handleOptionClick('2')}
//             className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
//           >
//             Consejos
//           </button>
//         </div>
//       )}
//       {!showOptions && (
//         <button
//           onClick={handleHelloButtonClick}
//           className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
//         >
//           Hello!
//         </button>
//       )}
//       {showWeatherInput && (
//         <div>
//           <input
//             type="text"
//             value={zipCode}
//             onChange={(e) => setZipCode(e.target.value)}
//             className="border border-gray-300 rounded-lg p-2 mt-2"
//             placeholder="Introduce tu código postal/ZIP"
//           />
//           <button
//             onClick={handleWeatherInputSubmit}
//             className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
//           >
//             Obtener clima
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatBot;


import React, { useState } from 'react';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [showWeatherInput, setShowWeatherInput] = useState(false);
  const [zipCode, setZipCode] = useState('');
  const API_KEY_GEOCODING = 'c9fb4d861d57aa1cada026a6ec424394'; // Reemplaza con tu API key de Geocoding
  const API_KEY_WEATHER = 'c9fb4d861d57aa1cada026a6ec424394'; // Reemplaza con tu API key de la API climatológica

  const handleHelloButtonClick = () => {
    setShowOptions(!showOptions);
    if (!showOptions) {
      setMessages([
        {
          text: '¡Hola! Bienvenido@ al asistente de ClimateAI. Mi misión es ayudarte con consultas relacionadas al clima como la predicción actual del lugar donde te encuentras y consejos sobre cómo cuidar el medio ambiente.',
          sender: 'bot'
        },
        {
          text: '¿Qué te gustaría hacer?',
          sender: 'bot'
        },
      ]);
    }
  };

  const handleOptionClick = (option) => {
    setMessages([...messages, { text: `Has seleccionado ${option}`, sender: 'user' }]);
    setZipCode('');
    setShowOptions(false);

    if (option === '1') {
      setShowWeatherInput(true);
    } else {
      setShowWeatherInput(false);
    }
  };

  const getCoordinatesFromAddress = () => {
    const address = zipCode; // Usaremos el código postal introducido por el usuario como dirección

    const url = `https://api.openweathermap.org/geo/1.0/direct?q=08940,ES&appid=c9fb4d861d57aa1cada026a6ec424394`;
    // http://api.openweathermap.org/geo/1.0/zip?zip=08940,ES&appid=c9fb4d861d57aa1cada026a6ec424394
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          const { lat, lon } = data[0];
          // Aquí puedes usar lat y lon (latitud y longitud) para realizar la consulta del clima en la API climatológica
          console.log('Latitud:', lat);
          console.log('Longitud:', lon);
          // Llama a la función para obtener el clima usando las coordenadas (lat, lon)
          getWeatherData(lat, lon);
        } else {
          console.error('No se encontraron coordenadas para la dirección proporcionada.');
        }
      })
      .catch((error) => {
        console.error('Error fetching coordinates:', error);
      });
  };

  const getWeatherData = (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY_WEATHER}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Aquí puedes hacer lo que desees con los datos climáticos obtenidos
        console.log('Datos climáticos:', data);
        setMessages([...messages, { text: `El clima en ${data.name} es: ${data.weather[0].description}`, sender: 'bot' }]);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  };

  const handleWeatherInputSubmit = () => {
    getCoordinatesFromAddress(); // Llamada a la función para obtener las coordenadas antes de consultar el clima
    setShowWeatherInput(false);
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`mb-2 ${message.sender === 'bot' ? 'text-green-500' : 'text-blue-500'} font-semibold`}
        >
          {message.text}
        </div>
      ))}
      {showOptions && (
        <div>
          <button
            onClick={() => handleOptionClick('1')}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 mr-2"
          >
            Clima ahora
          </button>
          <button
            onClick={() => handleOptionClick('2')}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
          >
            Consejos
          </button>
        </div>
      )}
      {!showOptions && (
        <button
          onClick={handleHelloButtonClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
        >
          Hello!
        </button>
      )}
      {showWeatherInput && (
        <div>
          <input
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 mt-2"
            placeholder="Introduce tu código postal/ZIP"
          />
          <button
            onClick={handleWeatherInputSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
          >
            Obtener clima
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
