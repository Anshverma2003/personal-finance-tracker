import './aboutUs.css';
import { useState } from 'react';
import pic1 from '../../assets/HeroSectionLeftShapes.61b72bd3.png';
import pic2 from '../../assets/HeroSectionRightShapes.ec704eb7.png';
import ansh from '../../assets/AnshImage.png'
import amar from '../../assets/AmarImage.png';
import aniket from '../../assets/AniketImage.png';

const Aboutus = () => {
    const [anshContent, setanshContent] = useState(false);
    const [amarContent, setamarContent] = useState(true);
    const [aniketContent, setaniketContent] = useState(false);

    const [hoveredImage , sethoveredImage] = useState("amar");
    
    return (
        <div className="aboutus">
            <div className="outerBlock">
                <div className='leftImage'>
                    <img src={pic1} alt="" />
                </div>
                <div className="middleBox">
                    <h1>Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit</h1>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
                </div>
                <div className="rightImage">
                    <img src={pic2} alt="" />
                </div>
            </div>
            
            <div className="FounderBio">
                <div className="imagesDiv">
                    <span className={`amarImage ${hoveredImage === "amar"  ? "hoveredAmar" : ""}`} onMouseEnter={() => { setamarContent(true); setaniketContent(false); setanshContent(false);sethoveredImage("amar") }}>
                        <img src={amar} alt="" />
                    </span>
                    <span className={`aniketImage ${hoveredImage === "aniket" ?"hoveredAniket":""}`} onMouseEnter={() => { setaniketContent(true); setanshContent(false); setamarContent(false);sethoveredImage("aniket") }}>
                        <img src={aniket} alt="" />
                    </span>
                    <span className={`anshImage ${hoveredImage === "ansh" ? "hoveredAnsh":"" }`} onMouseEnter={() => { setanshContent(true); setaniketContent(false); setamarContent(false);sethoveredImage("ansh") }} >
                        <img src={ansh} alt="" />
                    </span>
                </div>

                {amarContent && (
                    <div className="content">
                        <h2>Amar Singh</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            mollit anim id est laborum.
                        </p>
                    </div>
                )}

                {aniketContent && (
                    <div className="content">
                        <h2>Aniket Mishra</h2>
                        <p>
                            Arcu dui vivamus arcu felis bibendum ut tristique. Consequat interdum varius sit amet mattis vulputate.
                            Aliquam eleifend mi in nulla. Hendrerit dolor magna eget est lorem ipsum dolor sit. Mauris nunc congue
                            nc faucibus a pellentesque.
                        </p>
                    </div>
                )}

                {anshContent && (
                    <div className="content">
                        <h2>Ansh Verma</h2>
                        <p>
                            Arcu dui vivamus arcu felis bibendum ut tristique. Consequat interdum varius sit amet mattis vulputate.
                            olore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            nc faucibus a pellentesque.
                        </p>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Aboutus;
