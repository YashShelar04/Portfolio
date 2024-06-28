import signature from "../assets/signature.svg";
import Navbar from "./Navbar.jsx";
import React from "react";
import Hriday from '../assets/Hriday.svg'
import '../CSS/Projects.css'
import Workflow from '../assets/Workflow.png'
import Dapp from '../assets/Dapp.png'
import {Link} from "react-router-dom";
function Projects() {
    return (
        <>
            <div style={{position: "relative"}}>
                <div style={{display: 'flex', alignItems: 'center', padding: '10px 20px', marginRight: "10vw"}}
                     className="headClass">
                    <img src={signature} alt="signature" className="logo" style={{width: 'auto', height: '100px'}}/>
                    <Navbar/>
                </div>
            </div>
            <div className='project-div' style={{display: "flex", width: "89vw", height: "50vh", margin: "5vw"}}>
                <a href="https://github.com/YashShelar04/Sem4MPR">
                    <img src={Hriday} style={{
                        height: "100%",
                        borderRadius: 40,
                        padding: "inherit",
                        marginLeft: "5vw",
                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                    }}
                         className="Project" alt="hriday"/>
                </a>
                <a href="https://github.com/YashShelar04/Sem4MPR" style={{
                    textDecoration: "none",
                    color: "black",
                    fontFamily: "Familjen Grostek, sans-serif",
                    padding: "100px"
                }}>
                    <h1 style={{fontSize: "10vh"}}>Hriday Website</h1>
                    <p style={{textAlign: "justify"}}>
                        A heart disease prediction website using ML model, which tells you the probability of you having
                        disease related to heart health,
                        based on medical data such as BMI, total cholesterol, blood pressure, etc.
                    </p>
                </a>
            </div>
            <div className='project-div' style={{display: "flex", width: "89vw", height: "50vh", margin: "5vw"}}>
                <a href="https://github.com/YashShelar04/WorkFlow-Website" style={{
                    textDecoration: "none",
                    color: "black",
                    fontFamily: "Familjen Grostek, sans-serif",
                    paddingLeft: "10vw",
                    paddingTop: "10vh"
                }}>
                    <h1 style={{fontSize: "10vh"}}>Workflow Website</h1>
                    <p style={{textAlign: "justify"}}>
                        A web application consisting of To-do list, Pomodoro Timer with soft music and ﬂowchart, which
                        will help the users to stick with
                        their work ﬂow.
                    </p>

                </a>
                <a href="https://github.com/YashShelar04/WorkFlow-Website">
                    <img src={Workflow} style={{
                        height: "100%",
                        width: "42vw",
                        borderRadius: 40,
                        padding: "inherit",
                        marginLeft: "5vw",
                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                    }}
                         className="Project" alt="workflow"/>
                </a>

            </div>
            <div className='project-div' style={{display: "flex", width: "89vw", height: "50vh", margin: "5vw"}}>
                <div>
                    <a href="https://github.com/YashShelar04/Decentralized-Fund-Raiser-System-">
                        <img src={Dapp} style={{
                            height: "100%",
                            borderRadius: 40,
                            padding: "inherit",
                            marginLeft: "5vw",
                            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                        }} className="Project" alt="Dapp"/>
                    </a>
                </div>

                <a href="https://github.com/YashShelar04/Decentralized-Fund-Raiser-System-" style={{
                    textDecoration: "none",
                    color: "black",
                    fontFamily: "Familjen Grostek, sans-serif",
                    padding: "100px"
                }}>
                    <h1 style={{fontSize: "10vh", paddingBottom: 20}}>Glorious Purpose</h1>
                    <p style={{textAlign: "justify"}}>
                        A Web3 platform to start a fundraising campaign for those in need providing various features
                        such as categorizing campaigns differently, hashtags for promotion and in-platform blogging
                        system.
                    </p>
                </a>

            </div>

        </>

    )
}

export default Projects;