import {useState} from 'react'
import SunIcon from '../icons/SunIcon'
import MoonIcon from '../icons/MoonIcon'

const NavBar = () => {

    const [isDark, setIsDark] = useState(false)
    // console.log(isDark);
    
  return (
    <div className='flex items-center justify-between py-5 border-b'>
        
        <div className="flex items-center gap-2">
            {/* Main logo */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="w-8 h-8">
                <path
                    d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2" />
                <rect x="14" y="2" width="8" height="8" rx="1" stroke="#22c55e" />
            </svg>

            <span className='text-3xl font-medium'>
                Consolid
            </span>
        </div>

        <button onClick={() => setIsDark(!isDark)}
        className="p-2 rounded-full hover:bg-gray-100 transition-colors">
        {/* isDark ? Sun icon : Moon icon */}
        {
            isDark ? (<SunIcon />) : (<MoonIcon />)
        }
        </button>
    </div>
  )
}

export default NavBar

