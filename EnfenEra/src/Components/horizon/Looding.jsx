// import sucess from '../../assets/gifs/sucess.json'
import looding from '../../assets/gifs/loading.json'
import Lottie from "lottie-react"

function Looging() {
  return (
    <div>
        <div>
            <Lottie 
                animationData={looding}
                loop
                className='h-15  w-15'
            />
        </div>
    </div>
  )
}

export default Looging