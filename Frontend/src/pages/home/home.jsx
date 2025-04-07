import React from 'react'
import Herosection from '../../components/Herosection/Herosection'
import Specializedsection from '../../components/SpecializedSection/Specializedsection'
import Contact from '../Contact/Contact'
import Requirement from '../../components/Requirementsec/Requirement'
import Projects from '../../components/ProjectSec/Projects'
import './Home.css'

const Home = () => {
  return (
    <div className='home-container'>
        <Herosection />
        <Specializedsection />
        <Projects />
        <Requirement />
        <Contact />
    </div>
  )
}

export default Home