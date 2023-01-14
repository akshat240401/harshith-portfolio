import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-h.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a','r','s','h','i','t','h']
    const subnArray = ['A','s','p','i','r','i','n','g',' ','C','l','o','u','d',' ','S','o','l','u','t','i','o','n',' ','A','r','c','h','i','t','e','c','t']

    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 4000)
      }, [])


    return (
        <div className="container home-page">
            <div className="text">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br/>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span> 
                <img src={LogoTitle} alt="harshith"/>
                <AnimatedLetters letterClass={letterClass} strArray={nameArray}
                idx={15}/>
                <br/>
                <AnimatedLetters letterClass={letterClass} strArray={subnArray}
                idx={22}/>
                </h1>
                <h2>Cloud Enthusiast / Software Developer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home