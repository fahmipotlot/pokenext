import React from 'react'

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">pokeNEXT</a>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <a href="https://github.com/fahmipotlot" target="_blank">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/github.png" />
              </div>
            </label>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar