import React from 'react'
import CompA from './CompA'
import { ParallaxProvider, Parallax } from "react-skrollr";
import { Route, Switch } from 'react-router-dom'



const App = () => {
  return (
    <>
      
    <CompA/>
    {/* <ParallaxProvider
        init={{
          smoothScrollingDuration: 500,
          smoothScrolling: true,
          forceHeight: false
        }}
      >
      ...
      </ParallaxProvider> */}
    
    </>
  )
}

export default App
