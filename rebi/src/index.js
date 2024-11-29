import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  ChakraProvider, 
  extendTheme 
} from '@chakra-ui/react';
import './index.css';
import App from './App';

// Configuración de tema
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        color: 'gray.800'
      }
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);