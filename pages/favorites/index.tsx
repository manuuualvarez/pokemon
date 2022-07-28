import { Card, Container, Grid, Image, Text } from '@nextui-org/react'
import React, { FC } from 'react'
import { Layout } from '../../components/layouts'
import { useState, useEffect } from 'react';
import { localFavorites } from '../../utils';
import NoFavorites from '../../components/ui/NoFavorites';
import FavoritePokemons from '../../components/pokemon/FavoritePokemons';

const FavoritesPage: FC = () => {


  const [favoritePokemons, setfavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
      setfavoritePokemons(localFavorites.pokemons());
  }, [])

  
  return (
    <Layout title='Favorites' >
      {
        favoritePokemons.length === 0 
        ? ( <NoFavorites/>)
        : (<FavoritePokemons pokemons={favoritePokemons}/>)
      }
    </Layout>
  )
}

export default FavoritesPage