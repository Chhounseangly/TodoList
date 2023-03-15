import React from 'react'
import Completed from '../components/Completed'
import MainBar from '../components/MainBar'
import '../style/Allpage.scss'

const CompletedPage = () => {
  return (
    <div className='container-rightside'>
      <MainBar/>
      <Completed/>
    </div>
  )
}

export default CompletedPage