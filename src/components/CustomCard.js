import useFetchPokemon from '@/hooks/useRequest'

function CustomCard({ pokemon, image, setActivePokemon }) {
  const { name } = pokemon
  const { result, error } = useFetchPokemon(name)

  if (error) return <h1>Something went wrong!</h1>
  if (!result) return <h1>Loading...</h1>
  
  const paddedId = ('00' + (result.id+1)).slice(-3);
  const type = result.types[0].type.name;
  let bgType = 'bg-emerald-400';
  switch (type) {
    case 'grass':
      bgType = 'bg-emerald-400';
      break;

    case 'fire':
      bgType = 'bg-red-400';
      break;

    case 'water':
      bgType = 'bg-cyan-400';
      break;

    case 'bug':
      bgType = 'bg-green-400';
      break;

    case 'normal':
      bgType = 'bg-yellow-200';
      break;

    case 'electric':
      bgType = 'bg-yellow-400';
      break;

    case 'psychic':
      bgType = 'bg-yellow-400';
      break;

    case 'fairy':
      bgType = 'bg-pink-400';
      break;

    case 'ground':
      bgType = 'bg-yellow-700';
      break;

    case 'fighting':
      bgType = 'bg-yellow-700';
      break;

    case 'poison':
      bgType = 'bg-fuchsia-400';
      break;
  
    default:
      bgType = 'bg-emerald-400';
      break;
  }

  const onClickCard = () => {
    window.pokemodal.showModal()
    const poke = {...result,bgType,image};
    setActivePokemon(poke)
  }

  return (
    <>
      <div className={`card w-60 ${bgType} shadow-xl cursor-pointer`} onClick={()=> onClickCard()}>
        <figure><img src={image} alt={pokemon.name} /></figure>
        <div className="card-body">
          <h2 className="card-title capitalize text-white">
            {pokemon.name}
            <div className="badge badge-ghost">#{paddedId}</div>
          </h2>
          <div className="card-actions justify-start">
            {result.types.map((poke,index) => {
              return (
                <div className="badge badge-outline capitalize text-white" key={index}>{poke.type.name}</div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomCard