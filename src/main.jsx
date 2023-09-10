import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ContextTareasProvider} from './pages/context/ContextTareas.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ContextTareasProvider>

    <App />
   </ContextTareasProvider>
    
  </React.StrictMode>,
)
