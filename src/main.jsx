import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Chicken from './Prop/chicken.jsx'
//import Hooks from './Hooks.jsx'
//import Chicken from './Prop/chicken'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Chicken/>
  </StrictMode>,
)

