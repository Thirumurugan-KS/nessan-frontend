import React from 'react'
import { Link } from 'react-router-dom'

const HeaderComponent = () => {
  return (
    <header>
    <Link to="/">
    <p><span style={{"color" : "#6a6a74"}}>Nessan</span> Technology</p>
    </Link>
    </header>
  )
}

export default HeaderComponent
