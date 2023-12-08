import React from 'react'

function Navbar() { 

  return (
    <>
<div className="navbar bg-base-100 shadow-md" >
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Jinsei</a>
  </div>
  <div className="flex-none">
    <button className='btn' >logout</button> {/*add button to logout logic*/}
  </div>
</div>
    </>
  )
}

export default Navbar