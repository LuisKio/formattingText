import { useState } from 'react'
import './App.css'
import Archivo from './components/Archivo';
import TxtTarea from './components/TxtTarea';

function App() {
  const [data, setData] = useState();


  return (
    <div className="App">
      <div className="container">
        {
          data ? <TxtTarea data={data} setData={setData}/> : <Archivo setData={setData}/>
        }
      </div>


    </div>
  )
}

export default App
