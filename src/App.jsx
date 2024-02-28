import './App.css'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import MyProjects from './components/MyProjects/MyProjects'
import MySkill from './components/MySkill/MySkill'

function App () {
  return (
    <>
      <div className='bg-slate-200'>
        <div className='container mx-auto'>
          <Header></Header>
        </div>
      </div>
      <div className='container px-5 py-10 mx-auto lg:px-0'>
        <MyProjects></MyProjects>
        <MySkill></MySkill>
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
