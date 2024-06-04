import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
     <Link to="/"><button>Home</button></Link>{' '}
     <Link to="/weapons"><button>All Weapons</button></Link>{' '}
     <Link to="/addweapon"><button>Add Weapon</button></Link>
    </div>
  )
}

export default Navbar
