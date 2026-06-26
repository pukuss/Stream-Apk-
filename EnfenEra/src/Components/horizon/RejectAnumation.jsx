import sucess from '../../assets/gifs/reject.json'
import Lottie from "lottie-react"

function RejectAnimation() {
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

export default   RejectAnimation
