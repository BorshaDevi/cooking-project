
import './App.css'
import Bannar from './components/Bannar/Bannar'
import Navbar from './components/Navbar/Navbar'
import OurRecipe from './components/Recipe/OurRecipe'

function App() {
  

  return (
    <>
      <div className='space-y-10'>
        <Navbar></Navbar>
        <Bannar></Bannar>
        <OurRecipe></OurRecipe>
      </div>
    </>
  )
}

export default App
