import './App.css'
// import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import MyProjects from './components/MyProjects/MyProjects'
import MySkill from './components/MySkill/MySkill'
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <>
      <div className=''>
       
          <div className='fixed z-50 w-full '>
            <NavBar></NavBar>
          </div>
        <div className='container mx-auto'>
          <Header></Header>
          {/* <About></About> */}
        </div>
      </div>
      <div className='container px-5 pt-10 mx-auto lg:px-0'>
        <MySkill></MySkill>
        <MyProjects></MyProjects>
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
