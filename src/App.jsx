import './App.css'
import ApiCall from './components/ApiCall'
import Game from './components/Game'
import Props from './components/Props'
import UseEff from './components/UseEff'
import View from './components/View'

function App() {
  let name="komal"
  return (
    <>
      {/* <Game/> */}
      {/* <UseEff/> */}
      <ApiCall/>
      <Props name={name} age={23} hot={true}/>
    </>
  )
}

export default App
