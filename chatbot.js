// 1. Cargar la librería externa de Dialogflow
const script = document.createElement('script');
script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
script.async = true;
document.head.appendChild(script);

// 2. Crear e inyectar el componente visual del chat al final del body
script.onload = () => {
  const messenger = document.createElement('df-messenger');
  messenger.setAttribute('intent', 'WELCOME');
  messenger.setAttribute('chat-title', 'GymTrackerBot');
  messenger.setAttribute('agent-id', '626f4619-2c96-47ee-a2ae-4e0632dbbfc4'); // <--- ACÁ PEGÁ TU ID REAL
  messenger.setAttribute('language-code', 'es');

  document.body.appendChild(messenger);
};
