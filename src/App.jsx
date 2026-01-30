
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Cards from './Pages/Cards/Cards'
import Hero from './Pages/Hero/Hero'
import History from './Pages/History/History'

function App() {


  return (
    <>
      <div>
        <header>
          <Navbar></Navbar>
        </header>
        <main>
         <section>
           <Hero></Hero>
         </section>
         <section className='bg-[rgba(245,255,246,1)]'>
         <div className='md:grid flex flex-col-reverse md:grid-cols-12 h-auto max-w-10/12 mx-auto'>
           {/* cards */}
            <div className='md:col-span-9'>
              <Cards></Cards>
            </div>
            {/* history */}
            <div className='col-span-3 bg-white mt-12'>
             <History></History>
            </div>
         </div>
         </section>
        </main>
      </div>

    </>
  )
}

export default App
