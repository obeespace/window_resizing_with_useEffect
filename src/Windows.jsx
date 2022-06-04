import React from "react"

export default function Window (){

  var [windoww, setWindoww] = React.useState(window.innerWidth)

  React.useEffect(function(){
    window.addEventListener("resize", function(){
      setWindoww(window.innerWidth)
    })
    return function (){
      window.removeEventListener("resize", function(){
        setWindoww(window.innerWidth)
      })
    }
  }, [])
  return <h2>Window: {windoww}</h2>
}