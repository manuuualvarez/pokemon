import { Grid, Card } from '@nextui-org/react'
import React, { FC } from 'react'
import { FavoriteCardPokemon } from './FavoriteCardPokemon';


interface Props {
  pokemons: number[];
}

const FavoritePokemons: FC<Props> = ({pokemons}) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
    {
      pokemons.map(pokemonId => (
        <FavoriteCardPokemon id={pokemonId} key={pokemonId}/>
      ))
    }

  </Grid.Container>
  )
}

export default FavoritePokemons;

