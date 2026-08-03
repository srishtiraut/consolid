import githubLogo from '../assets/github-logo.png'
import leetcodeLogo from '../assets/leetcode-logo.png'
import gfgLogo from '../assets/gfg-logo.png'

const ProfileCard = () => {
  return (
    <div className='border rounded-lg p-6 my-6'>
        <div className="flex flex-col items-center">
            <img
                src="https://avatars.githubusercontent.com/u/583231?v=4"
                alt="Profile"
                className="w-40 h-40 rounded-full object-cover"
            />

            <h2 className='text-2xl font-medium mt-6'>
                Srishti Raut
            </h2>
            
            <p className='text-gray-500  text-sm'>
                she/her
            </p>

            {/* 3 logos github, leetcode, gfg */}

            <div className="flex justify-center gap-6 my-3">
                {/* Github */}
                
                    <a href='https://github.com/srishtiraut' target="_blank" rel="noopener noreferrer" className='p-2 rounded-full hover:bg-gray-100 transition-colors inline-flex'>
                    <img src={githubLogo} alt='Github logo' className='w-6 h-6' />
                </a>
                
                

                {/* Leetcode */}
                
                <a href='https://leetcode.com/u/srishtiraut/' target="_blank" rel="noopener noreferrer" className='p-2 rounded-full hover:bg-gray-100 transition-colors inline-flex'>
                    <img src={leetcodeLogo} alt='Leetcode logo' className='w-6 h-6' />
                </a>

                {/* GFG */}
                
                <a href='https://www.geeksforgeeks.org/profile/srishtea?tab=activity' target="_blank" rel="noopener noreferrer" className='p-2 rounded-full hover:bg-gray-100 transition-colors inline-flex'>
                    <img src={gfgLogo} alt='GeeksForGeeks logo' className='w-6 h-6' />
                </a>
                

            </div>

            <p className='text-center text-sm text-gray-600 leading-relaxed'>Developer | Java | MERN stack | Data Structures | Software Engineer @ IDIADA | Shipping game-changer solutions one repo at a time. 👩‍💻</p>

        </div>
    </div>
  )
}

export default ProfileCard