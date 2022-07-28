import  Head  from 'next/head'
import {  FC } from 'react'
import Navbar from '../ui/Navbar';

 
interface Props {
    children: React.ReactNode;
    title?: string; 
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {

  return (
    <>
    <Head>
        <title>{ title || 'Pokemon App'  }</title>
        <meta name='author' content='Manu Alvarez'></meta>
        <meta name='description' content={`Información sobre el Pokemon: ${ title }`}></meta>
        <meta name='keywords' content={`${ title }, pokemon, pokedex`}></meta>
        <meta property="og:title" content={`Info about ${title}`} />
        <meta property="og:description" content={`Learning about NextJS and Pokemon API, this is ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
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
