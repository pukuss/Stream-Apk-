import sucess from '../../assets/gifs/sucess.json'
import Lottie from "lottie-react"

function Sucessfull() {
  return (
    <div>
        <div>
            <Lottie 
                animationData={sucess}
                loop={false}
                className='h-40  w-40'
            />
        </div>
    </div>
  )
}

export default Sucessfull
