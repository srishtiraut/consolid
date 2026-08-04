import Heatmap from './components/Heatmap'
import NavBar from './components/NavBar'
import ProfileCard from './components/ProfileCard'

function App() {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <NavBar />
      
      {/* MainLayout contains Profile Card and Heatmap */}
      <div className='flex flex-col lg:flex-row gap-6 my-6'>
        
        <div className="w-full lg:w-1/3">
          <ProfileCard />
        </div>
        
        <div  className="w-full lg:w-2/3 ">
        {/* The outer div is responsible for layout (its width).
        The inner div is responsible for appearance (border, padding, rounded corners).
        This separation becomes really useful later if you need to add things like sticky positioning, scrolling, or different backgrounds. */}
          <div className='border rounded-xl p-6 my-6'>
            <Heatmap />
          </div>
        </div>
      </div>
      
    </div>

  )
}

export default App
