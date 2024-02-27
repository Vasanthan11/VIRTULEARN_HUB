import React from 'react';

const navbar = () => {
    return (
        <div className='fullNavSection'>

            <div className="logoSection">
                <img src="Assest/logo.png" alt="" />
                <span>VirtuLearn Hub</span>
            </div>

            <div className="menuBarSection">
                <ul className='menus'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Courses</a></li>
                    <li><a href="#">Our Services</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
                <button className="signin">Sign In</button>
            </div>
        </div>
    )
}

export default navbar