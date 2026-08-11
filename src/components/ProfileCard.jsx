import githubLogo from '../assets/github-logo.png'
import leetcodeLogo from '../assets/leetcode-logo.png'
import gfgLogo from '../assets/gfg-logo.png'
import mapPin from '../assets/map-pin.png'

const ProfileCard = ({profile}) => {

  return (
    <div className='border border-gray-300 rounded-xl p-6 my-6'>
        <div className="flex flex-col items-center">
            <img
                src={profile?.avatar_url} 
                alt="Profile"
                className="w-40 h-40 rounded-full object-cover"
            />
            {/* ?. is for optional chaining.  It means: If profile exists, use avatar_url. Otherwise, return undefined instead of crashing. 
            
            added comment*/}

            <h2 className='text-2xl font-medium mt-6'>
                {profile?.name}
            </h2>
            
            <div className="flex justify-center items-center gap-1">
                <img src={mapPin} className='w-4 h-4'alt="Location" />
                <p className='text-gray-500  text-sm'> {profile?.location}</p>
            
            </div>

            {/* 3 logos github, leetcode, gfg */}

            <div className="flex justify-center gap-6 my-2">
                {/* Github */}
                
                    <a href={profile?.html_url} target="_blank" rel="noopener noreferrer" className='p-2 rounded-full hover:bg-gray-100 transition-colors inline-flex'>
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

            <p className='text-center text-sm text-gray-600 leading-relaxed'>{profile?.bio}</p>

        </div>
    </div>
  )
}

export default ProfileCard