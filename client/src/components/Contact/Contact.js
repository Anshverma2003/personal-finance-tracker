import picture from '../../assets/miles-burke-idhx-MOCDSk-unsplash.jpg';

import './contact.css';

function Contact() {
    return (
        <div className="contact">
            <img src={picture} alt="Image" />
            <div className='Content'>
                <h1>Contact us</h1>
                <p>Explore the fun with us </p>
                <p>Feel free to get in touch.</p>
                <div className='Form'>
                    <form>
                        <label>Name</label>
                        <input type='text' placeholder='Full Name' />
                        <label>Email</label>
                        <input type='text' placeholder='Email address' />
                        <label>Message</label>
                        <input type='text' placeholder='How can we assist you?' />

                        <input type="submit" value="Submit"></input>
                    </form>
                </div>
            </div>
            <footer className="footer">
                <div className="footer-content">
                    <div className="copyright">
                        &copy; 2024 Personal Finance. All rights reserved.
                    </div>
                    <div className="social-links">
                        <a href="#">Instagram</a>
                        <a href="#">Facebook</a>
                        <a href="#">Twitter</a>
                        <a href="#">LinkedIn</a>
                    </div>

                </div>
            </footer>
        </div>
    )
}

export default Contact;
