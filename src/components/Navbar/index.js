import React from 'react'
import './index.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='n'>
                <div className='nav'>
                    <div className='app-logo'></div>
                    <span className='app-name'>PSYCHIATRY</span>
                </div>


                <ul className='list'>
                    <li className='list-item'><a href="#introSection" className='list-item'>Who we are</a></li>
                    <li className='list-item'><a href="#treatment-focus" className='list-item'>Who we treat</a></li>
                    <li className='list-item'><a href="#our-services" className='list-item'>Services Resources</a></li>
                    <li className='list-item'><button className='book-btn'>Book an Appointment</button></li>
                </ul>
            </div>


        </div>
    )
}

export default Navbar