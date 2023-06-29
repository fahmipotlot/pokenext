import React, { useState } from 'react'
import CustomCard from '@/components/CustomCard'
import CustomModal from '@/components/CustomModal'
import useFetchPokemon from '@/hooks/useRequest'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { result, error } = useFetchPokemon()
  const [activePokemon, setActivePokemon] = React.useState({});
  if (error) return <h1>Something went wrong!</h1>
  if (!result) return <h1>Loading...</h1>
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between px-24 py-4 ${inter.className}`}
    >
      <div className="md:mt-8 mb-32 grid lg:grid-cols-4 gap-4">
        {result.results.map((pokemon,index) => {
          const paddedId = ('00' + (index+1)).slice(-3);
          const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
          return (
            <CustomCard
              key={index}
              pokemon={pokemon}
              image={image}
              setActivePokemon={setActivePokemon}
            />
          )
        })}
        <CustomModal activePokemon={activePokemon}/>
      </div>
    </main>
  )
}
