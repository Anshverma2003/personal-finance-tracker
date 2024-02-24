import './home.css'
import pic1 from '../../assets/0f422c2a-8270-4317-86e4-6560b1ebb8e7.png'
import pic2 from '../../assets/f5151302-28a5-483a-b77e-ee75e5499190.png'
import pic3 from '../../assets/homeImage3.png'
import pic4 from '../../assets/Bard_Generated_Image (2).png'


const home = () => {
    return (
        <div className="home">
            <h1>
                Welcome to
                <em> Finance Tracker</em>
            </h1>
            <p>Track and Manage Your Finances</p>

            <button>Get Started</button>

            <div className="image1">
                <img src={pic1} alt="" />
            </div>

            <div className="image2">
                <img src={pic2} alt="Image" />
            </div>

            <h3>Powerful <span>Financial</span> Analysis</h3>
            <div className="finance-feature">
                <p className="feature">Interactive</p>
                <p className="feature">Real-time</p>
                <p className="feature">Customize</p>
                <p className="feature">Achieve</p>
            </div>

            <div className="image3">
                <img src={pic3} alt="" />

                <div className="leftCard">
                    <h2>Plans for the Future</h2>

                    <p>Track your spending, set budgets, and save for you goals. <span><span>Personal Finance</span> help you achieve financial freedom</span></p>

                    <button>Learn More</button>
                </div>
            </div>

            <div className="space-between">

            </div>

            <div className="image4">
                <div className="rightCard">
                    <h2>Simplify Your Finances</h2>

                    <p>Take control of your money with Personal Finance <span> easy-to-use budgeting tool. Say Goodbye to </span> <span> financial stress and hello to financial freedom. </span></p>
                    <button>Learn More</button>
                </div>
                <img src={pic4} alt="" />

            </div>

            <footer>
                <div>
               
                </div>
            </footer>
        </div>
    )
}

export default home;