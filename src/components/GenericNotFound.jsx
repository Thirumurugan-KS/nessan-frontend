import React from 'react'
import { Link } from 'react-router-dom'

const GenericNotFound = () => {
  return (
    <div className='Not-found'>
      Page Not found <Link to="/" style={{"color" : "blue"}}>redirect to home page</Link>
    </div>
  )
}

export default GenericNotFound
