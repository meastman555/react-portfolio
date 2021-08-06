import React from "react"
import "../../App.css"
import "./Home.css"

//responsible for rendering the home page
function Home() {
    return (
        <div className="header">
            <div className="container">
                <h1 className="title header_text">Mason Eastman</h1>
                <p className="subtitle header_text ">The University of Texas at Austin 
                    Computer Science Student and Aspiring Video Game Programmer</p>
            </div>
        </div>
    );
};

export default Home;