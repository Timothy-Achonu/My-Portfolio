import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVuejs, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
const [ letterClass, setLetterClass ] = useState('text-animate');

useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    },3000)
  },[])
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
            I'm a very collaborative and ambitious front-end 
            developer looking for a role in an IT company and the 
            opportunity to work with the latest technologies on 
            challenging and diverse projects.
        </p>
        <p>
            I'm consciencious, naturally curious, and perpetually
            working on improving my developer, collaborating and 
            communication skills.
        </p>
        <p>
            If I need to define myself in one sentence that would
            be a trustworthy, football fanatic, tech enthusiat that
            loves listening to self development podcasts.
        </p>
      </div>

      <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
                <FontAwesomeIcon icon={faVuejs} color="#42b883" />
            </div>
            <div className='face2'>
                <FontAwesomeIcon icon={faHtml5} color="#ff06529" />
            </div>
            <div className='face3'>
                <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
            </div>
            <div className='face4'>
                <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
            </div>
            <div className='face5'>
                <FontAwesomeIcon icon={faJsSquare} color="#efe81d" />
            </div>
            <div className='face6'>
                <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
            </div>
          </div>
      </div>
    </div>
    <Loader type="pacman" />
    </>

  )
}
export default About
