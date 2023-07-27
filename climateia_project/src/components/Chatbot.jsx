
import React, { useState, useEffect, useRef } from "react";
import chatData from "../data/tips_for_chatbot.json";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showChatIcon, setShowChatIcon] = useState(true);

  const chatContainerRef = useRef(null);

  const handleHelloButtonClick = () => {
    setShowOptions(!showOptions);
    setShowChatIcon(false);
    if (!showOptions) {
      setMessages([
        {
          text: '¡Hola! Bienvenido@ al asistente de ClimateAI. Mi misión es ayudarte dándote consejos sobre cómo cuidar el medio ambiente.',
          sender: 'bot'
        },
        {
          text: '¿Qué te gustaría hacer?',
          sender: 'bot'
        },
      ]);
    }
  };

  const handleOptionClick = async (option) => {
    if (option === 'consejo') {
      setIsTyping(true);
      setTimeout(() => {
        // Mostrar consejo aleatorio al seleccionar la opción "Recibir consejo"
        const randomTip = chatData.consejos[Math.floor(Math.random() * chatData.consejos.length)];
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: randomTip.descripcion, sender: 'bot' }
        ]);
        setIsTyping(false);
      }, 1500); // Simulamos un tiempo de respuesta de 1.5 segundos antes de mostrar el consejo
    } else if (option === 'cerrar') {
      handleCloseChat();
    }
  };

  const handleCloseChat = () => {
    setMessages([{ text: 'Hasta la próxima!', sender: 'bot' }]);
    setShowOptions(false);
    setShowChatIcon(true);
  };

  useEffect(() => {
    // Hacer scroll hacia el final del chat al agregar nuevos mensajes o mostrar "Escribiendo..."
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <div className="fixed bottom-44 right-4 bg-chatbot_bg p-4 rounded-lg shadow-lg">
      {showChatIcon && (
        <button
          onClick={handleHelloButtonClick}
          className=" text-white  rounded-lg  transform hover:scale-105 transition-all"
        >
          <img
            src="/assets/icono_w_bg-removebg-preview.png" // Reemplaza "ruta/del/icono-del-chatbot.png" con la ruta del icono del chatbot
            alt="Chatbot Icon"
            className="w-10 h-10"
          />
        </button>
      )}
      {!showChatIcon && (
        <div>
          <div
            ref={chatContainerRef}
            id="chat-container"
            className="mb-2 flex flex-col space-y-2"
            style={{ maxHeight: "300px", overflowY: "auto" }}
          >
            <TransitionGroup component={null}>
              {messages.map((message, index) => (
                <CSSTransition key={index} timeout={500} classNames="fade">
                  <div className={`mb-4 flex items-start space-x-2 ${message.sender === 'bot' ? 'justify-start' : 'justify-end'}`}>
                    {message.sender === 'bot' && (
                      <img
                        src="/assets/icono_w_bg-removebg-preview.png" // Reemplaza "ruta/del/avatar-del-chatbot.png" con la ruta de tu avatar
                        alt="Avatar del Chatbot"
                        className="w-8 h-8 rounded-full"
                      />
                    )}
                    <div className="relative">
                      <div
                        className={`${
                          message.sender === 'bot' ? 'bg-text_green text-white' : 'bg-blue-500 text-white'
                        } px-4 py-2 rounded-lg max-w-full`}
                        style={{ width: "200px" }}
                      >
                        {message.text}
                      </div>
                      {message.sender === 'bot' && (
                        <div className="absolute top-1 -left-1 h-5 w-4 rounded bg-text_green transform -rotate-45" />
                      )}
                    </div>
                  </div>
                </CSSTransition>
              ))}
            </TransitionGroup>
            {isTyping && (
              <div className="flex items-center">
                <div className="bg-bg_form_charts text-white px-4 py-2 rounded-lg max-w-full animate-pulse">
                  Generando...
                </div>
              </div>
            )}
          </div>
          {showOptions && (
            <div className="flex items-center">
              <button
                onClick={() => handleOptionClick('consejo')}
                className="bg-text_color_body text-white px-4 py-2 rounded-lg mt-2 mr-2 transform hover:scale-105 transition-all"
              >
                Recibir consejo
              </button>
              <button
                onClick={() => handleOptionClick('cerrar')}
                className="bg-hover_btn text-white px-4 py-2 rounded-lg mt-2 transform hover:scale-105 transition-all"
              >
                Cerrar chat
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatBot;


// // CON BTN PARA DARK MODE Y LIGHT MODE APARTTE DEL SISTEMA
// import React, { useState, useEffect, useRef } from "react";
// import chatData from "../data/tips_for_chatbot.json";
// import { CSSTransition, TransitionGroup } from "react-transition-group";

// const ChatBot = () => {
//   const [messages, setMessages] = useState([]);
//   const [showOptions, setShowOptions] = useState(false);
//   const [isTyping, setIsTyping] = useState(false);
//   const [showChatIcon, setShowChatIcon] = useState(true);
//   const [darkMode, setDarkMode] = useState(false); // Variable para el modo oscuro

//   const chatContainerRef = useRef(null);

//   const handleHelloButtonClick = () => {
//     setShowOptions(!showOptions);
//     setShowChatIcon(false);
//     if (!showOptions) {
//       setMessages([
//         {
//           text: '¡Hola! Bienvenido@ al asistente de ClimateAI. Mi misión es ayudarte dándote consejos sobre cómo cuidar el medio ambiente.',
//           sender: 'bot'
//         },
//         {
//           text: '¿Qué te gustaría hacer?',
//           sender: 'bot'
//         },
//       ]);
//     }
//   };
//   const handleOptionClick = async (option) => {
//     if (option === 'consejo') {
//       setIsTyping(true);
//       setTimeout(() => {
//         // Mostrar consejo aleatorio al seleccionar la opción "Recibir consejo"
//         const randomTip = chatData.consejos[Math.floor(Math.random() * chatData.consejos.length)];
//         setMessages((prevMessages) => [
//           ...prevMessages,
//           { text: randomTip.descripcion, sender: 'bot' }
//         ]);
//         setIsTyping(false);
//       }, 1500); // Simulamos un tiempo de respuesta de 1.5 segundos antes de mostrar el consejo
//     } else if (option === 'cerrar') {
//       handleCloseChat();
//     }
//   };

//   const handleCloseChat = () => {
//     setMessages([{ text: 'Hasta la próxima!', sender: 'bot' }]);
//     setShowOptions(false);
//     setShowChatIcon(true);
//   };

//   useEffect(() => {
//     // Hacer scroll hacia el final del chat al agregar nuevos mensajes o mostrar "Escribiendo..."
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [messages, isTyping]);
//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };
//   return (
//     <div className={`fixed bottom-44 right-4 p-4 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>

//             {showChatIcon && (
//         <button
//           onClick={handleHelloButtonClick}
//           className={`rounded-lg transform hover:scale-105 transition-all ${darkMode ? 'border-white border-opacity-25' : 'border-black border-opacity-25'}`}
//         >
//           <img
//             src="/assets/icono_w_bg-removebg-preview.png" // Reemplaza "ruta/del/icono-del-chatbot.png" con la ruta del icono del chatbot
//             alt="Chatbot Icon"
//             className="w-10 h-10 rounded-full"
//           />
//         </button>
//       )}
//       {!showChatIcon && (
//         <div>
//           <div
//             ref={chatContainerRef}
//             id="chat-container"
//             className="mb-2 flex flex-col space-y-2"
//             style={{ maxHeight: "300px", overflowY: "auto" }}
//           >
//             <TransitionGroup component={null}>
//               {messages.map((message, index) => (
//                 <CSSTransition key={index} timeout={500} classNames="fade">
//                   <div className={`mb-4 flex items-start space-x-2 ${message.sender === 'bot' ? 'justify-start' : 'justify-end'}`}>
//                     {message.sender === 'bot' && (
//                       <img
//                         src="/assets/icono_w_bg-removebg-preview.png" // Reemplaza "ruta/del/avatar-del-chatbot.png" con la ruta de tu avatar
//                         alt="Avatar del Chatbot"
//                         className="w-8 h-8 rounded-full"
//                       />
//                     )}
//                     <div className="relative">
//                       <div
//                         className={`${
//                           message.sender === 'bot' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
//                         } px-4 py-2 rounded-lg max-w-full`}
//                         style={{ width: "200px" }}
//                       >
//                         {message.text}
//                       </div>
//                       {message.sender === 'bot' && (
//                         <div className="absolute top-1 -left-1 h-5 w-4 rounded bg-green-500 transform -rotate-45" />
//                       )}
//                     </div>
//                   </div>
//                 </CSSTransition>
//               ))}
//             </TransitionGroup>
//             {isTyping && (
//               <div className="flex items-center">
//                 <div className="bg-blue-500 text-white px-4 py-2 rounded-lg max-w-full animate-pulse">
//                   Escribiendo...
//                 </div>
//               </div>
//             )}
//           </div>
//           {showOptions && (
//             <div className="flex items-center">
//               <button
//                 onClick={() => handleOptionClick('consejo')}
//                 className="bg-green-500 text-white px-4 py-2 rounded-lg mt-2 mr-2 transform hover:scale-105 transition-all"
//               >
//                 Recibir consejo
//               </button>
//               <button
//                 onClick={() => handleOptionClick('cerrar')}
//                 className="bg-red-500 text-white px-4 py-2 rounded-lg mt-2 transform hover:scale-105 transition-all"
//               >
//                 Cerrar chat
//               </button>
//             </div>
//           )}
          
//         </div>
//       )}
//       <button
//         onClick={toggleDarkMode}
//         className={`text-sm ml-auto bg-transparent border-none cursor-pointer focus:outline-none ${darkMode ? 'text-white' : 'text-black'}`}
//       >
//         {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
//       </button>
//     </div>
//   );
// };

// export default ChatBot;
