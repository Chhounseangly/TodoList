import React from 'react'
import MainBar from '../components/MainBar'
import '../style/Allpage.scss'
import MyToDo from '../components/MyToDo'

const MyTaskPage = () => {
  return (
    <div className='container-rightside'>
      <MainBar/>
      <MyToDo/>
    </div>
  )
}

export default MyTaskPage