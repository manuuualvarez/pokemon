import  Head  from 'next/head'
import {  FC } from 'react'
import Navbar from '../ui/Navbar';

 
interface Props {
    children: React.ReactNode;
    title?: string; 
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
    <Head>
        <title>{ title || 'Pokemon App'  }</title>
        <meta name='author' content='Manu Alvarez'></meta>
        <meta name='description' content={`Información sobre el Pokemon: ${ title }`}></meta>
        <meta name='keywords' content={`${ title }, pokemon, pokedex`}></meta>
    </Head>
    {/* NAV */}
    <Navbar></Navbar>
    <main style={{
      padding: '0px 20px',
    }}>
        { children }
    </main>
    </>
  )
}
