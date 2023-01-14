import { useEffect, useState } from 'react'
import {
  faPython,
  faGolang,
  faGitAlt,
  faJsSquare,
  faReact,
  faAws,
  faJava,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          Hello! My name is Harshith Shetty and I enjoy exploring and working with the latest edge cutting     technologies such as cloud computing and Quantum Computing. My interest in Cloud Computing started back in 2020 when I decided to try experimenting with cloud computing.
          </p>
          <p align="LEFT">
          Fast-forward to today, and I’ve had the privilege of having the experience with Cloud computing. My main focus these days is designing, implementing, and managing cloud-based systems for businesses and  develop and implement cloud applications, migrating existing on-premise applications to the cloud, and debugging cloud stacks.
          </p>
          <p>
          I also recently published a paper that covers the ability of Quantum Computing in the field of cybersecurity.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faGolang} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faAws} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faPython} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJava} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About