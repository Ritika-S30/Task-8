import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Apps from './back/Apps.jsx';

<<<<<<< HEAD

//import Hooks from './Hooks.jsx'
//import Chicken from './Prop/Chicken'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Apps/>
=======
import Chicken from './Prop/chicken.jsx'
//import Hooks from './Hooks.jsx'
//import Chicken from './Prop/chicken'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Chicken/>
>>>>>>> f547ae585ae8128f927f89fc5250304556fe4aab
  </StrictMode>,
)

