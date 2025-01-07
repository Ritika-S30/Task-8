import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Apps from './back/Apps.jsx';


//import Hooks from './Hooks.jsx'
//import Chicken from './Prop/Chicken'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Apps/>
    </StrictMode>,
)

