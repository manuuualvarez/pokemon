import { Container, Text, Image } from '@nextui-org/react';


const NoFavorites = () => {

    

  return (
    <Container css={{
        display: 'flex', 
        flexDirection: 'column', 
        height: 'calc(100vh - 100px)', 
        alignItems:'center',
        alignSelf: 'center',
      }}>
        <Text h1>You do not have favorites</Text>
        <Image 
          src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'}
          width={250}
          height={250}
          css={{opacity: 0.4}}
        />
      </Container>
  )
}

export default NoFavorites