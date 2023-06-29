import React from 'react'
import CustomTabs from './CustomTabs'

function CustomModal({activePokemon}) {
  const [openTab, setOpenTab] = React.useState(1);
  const types = activePokemon?.types

  return (
    <dialog id="pokemodal" className="modal">
      <form method="dialog" className={`modal-box w-11/12 max-w-5xl sm:modal-middle h-screen ${activePokemon.bgType}`}>
        <div className="modal-action mt-0 justify-between">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-white">
              <img src={activePokemon.image} alt={activePokemon.name} />
            </div>
          </div>
          <button className="btn rounded-full">X</button>
        </div>
        <h3 className="font-bold text-lg text-white capitalize mb-4">
          {activePokemon.name}
          <span className="ml-4"></span>
          {types?.map((poke,index) => {
            return (
              <div className="badge badge-outline capitalize text-white" key={index}>{poke.type.name}</div>
            )
          })}
        </h3>
        <div className="tabs">
          <a className={` ${openTab === 1 ? "tab-active font-bold" : ""} tab tab-lifted`} onClick={() => setOpenTab(1)}>About</a>
          <a className={` ${openTab === 2 ? "tab-active font-bold" : ""} tab tab-lifted`} onClick={() => setOpenTab(2)}>Base Stats</a>
        </div>
        <div className="bg-white md:h-64 md:min-h-max rounded-b">
          <CustomTabs openTab={openTab} clas={1} data={activePokemon} />
          <CustomTabs openTab={openTab} clas={2} data={activePokemon} />
        </div>
      </form>
    </dialog>
  )
}

export default CustomModal