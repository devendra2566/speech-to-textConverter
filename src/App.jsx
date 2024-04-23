import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Article from './Article'

function App() {
  const data={
    title:"My Articel Component",
    author:"Devendra",
    date:"March 18,2024",
    content:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ut facilis aut magni amet beatae dignissimos voluptatem. Minus repudiandae facilis fuga quia hic enim, doloribus tenetur animi veniam, sequi totam!",
             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ut facilis aut magni amet beatae dignissimos voluptatem. Minus repudiandae facilis fuga quia hic enim, doloribus tenetur animi veniam, sequi totam!" ,
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ut facilis aut magni amet beatae dignissimos voluptatem. Minus repudiandae facilis fuga quia hic enim, doloribus tenetur animi veniam, sequi totam!"   ]
    
  }

  return (

    <>
    <Article data={data} ></Article>
     
    </>
  )
}

export default App
