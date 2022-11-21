import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';



import { ChakraProvider } from '@chakra-ui/react';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
 
    <StrictMode>
      
        
      <ChakraProvider>
        <App/>
      </ChakraProvider>
      
    </StrictMode>
  
  
);
