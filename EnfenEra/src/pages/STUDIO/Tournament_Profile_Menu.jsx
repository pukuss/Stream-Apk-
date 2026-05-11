import { IndianRupee } from 'lucide-react'
import React from 'react'
// import { element } from 'three/src/nodes/tsl/TSLCore.js'

function Tournament_Profile_Menu() {
    const MenuItem = [
        "Profile Settings",
        "KYC & Update's",
        "TEAM List",
        "TEAM Settings",
        "Gift & Winings",
        "Share & Pay",
        "Modification ",
        "History",
        "Complains",
        "Riport & Issuse",
        "Feedback",
        "Job",
        "Payment"
    ] 
  
    return (
    <>
        <div className='w-full px-3 bg-[#000b1a] '>
            <header className='font-black text-[13px] w-full'>
                <h1>Tournament Settings and Management</h1>
            </header>

            <main>
                <div className='flex flex-col gap-2 '>
                    {MenuItem.map((element,index) => {
                        return (
                            <div 
                            
                                className=' px-2 active:scale-95 text-[12px] font-bold py-1 cursor-pointer bg-[#03141f] rounded-sm hover:bg-[#023859] transition'
                                key={index}>
                                {element}
                            </div>
                        )
                    })}
                    {/* Update Soon As Possible  */}
                    <div>
                        Ad & Promotion 
                    </div>
                </div>
            </main>
        </div>
    </>
  )
}

export default Tournament_Profile_Menu
