import "./index.scss";
import img1 from '../../assets/images/bg-img.png'
import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";

const Project = () => {
  const [letterClass,setLetterClass] = useState('text-animate');
    
    useEffect(() => {
        const timer = setTimeout(() =>{
            setLetterClass('text-animate-hover');
        },3000)

        return () => {
            clearTimeout(timer);
        }
    });
  return (
    <>
      <div className="container project-page">
                  <h1 className="page-title">
                      <AnimatedLetters
                          letterClass={letterClass}
                          strArray={"Project Work".split("")}
                          idx={15}
                        />
                  </h1>
        </div>
        <div className="work-container">
          <div className="project-container">
            <div className="project-card">
              <div className="image-container">
                <img src={img1} alt="image"></img>
              </div>
              <div className="title-container">
                <h2 className="project-title">PROJECT TITLE</h2>
                <div className="pro-details">
                  <p>This is my dummy text This is my dummy textThis is my dummy textThis is my dummy textThis is my dummy textThis is my dummy textThis is my dummy textThis is my dummy text
                  </p>
                  <NavLink to="url.com" className='flat-button'>SOURCE</NavLink>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Project