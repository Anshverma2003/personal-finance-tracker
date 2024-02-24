import pic1 from '../../assets/404-dark-theme.png'
import './pageNotFound.css'

const NotFound = () => {
    
    document.querySelector('body').classList.add('no-scroll');


    return (
        <div className="page404">

            <div className='h'>
                <img src={pic1} alt="" />

                <h1>Oops!</h1>
                <p>Hmm, the page you were looking for doesn’t seem to exist anymore.</p>
                <a href="/" className='backHome'>Back Home</a>
            </div>

            <div className="circle0">
                <div className="innerCircle0"></div>
            </div>


            <div className="hidden1">
                <div className="innerHidden1"></div>
            </div>

            <div className="circle1">
                <div className="innerCircle"></div>
                <div className="innerCircle4"></div>
                <div className="innerCircle3"></div>


            </div>

            <div className="circle2">
                <div className="innerCircle2"></div>
                <div className="innerCircle4"></div>
                <div className="innerCircle01"></div>
            </div>

            <div className="circle3">
                <div className="innerCircle3"></div>
                <div className="innerCircle4"></div>
            </div>

        </div>
    )
}

export default NotFound;