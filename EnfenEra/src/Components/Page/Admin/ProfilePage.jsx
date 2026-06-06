import React from 'react'

function ProfilePage() {
  return (
    <>
    <div className='min-h-screen bg-gray-600 flex-row flex'>
        <aside className='border flex-1 md:min-w-60  bg-pink-950'>
            <div className='w-full border  bg-white text-black'>
            <h1>Who am i</h1>
            <div>
                <div>Profile</div>
            </div>
          </div>
        </aside>
        <main className='border w-full bg-purple-900'></main>


        {/* Extra MenU Tab  */}
        <aside className='flex-2 border max-w-100 '>
          
        </aside>
    </div>
    </>
  )
}

export default ProfilePage
