import React from 'react'
import '../../Components/Button/Button'
import '../../App.css'
import './Home.css'
import Button from '../../Components/Button/Button'

//responsible for rendering the home page
function Home() {
    return (
        <div>
            <div className="header">
                <div className="container">
                    <h1 className="title header_text">Mason Eastman</h1>
                    <p className="subtitle header_text ">The University of Texas at Austin 
                        Computer Science Student and Aspiring Video Game Programmer</p>
                </div>
            </div>
            <div className="container">
                <Button name="Games" link="/games"/>
                <Button name="Mods" link="mods"/>
                <Button name="Other" link="/other"/>
                <Button name="About Me" link="/aboutme"/>
            </div>
        </div>
       
    );
};

export default Home;
