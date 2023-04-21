import React from 'react';
import ReactDOM from 'react-dom/client';

// Importanto Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

// Imporando Archivo CSS
import './App.css';

//Importando Componente de Renderizado
import App from './App';

const Root = ReactDOM.createRoot(document.getElementById('root'));

Root.render(<App />);