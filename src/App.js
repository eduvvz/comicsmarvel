import React, { useState, useEffect } from 'react';

import stylesGeral from './assets/styles/geral'

import requests from './utils/requests/comics'

import CardSimple from './components/shared/CardSimple'
import Loader from './components/shared/Loader';

function App() {

  const [comics, setComics] = useState([])
  const [offsetPag, setOffsetPag] = useState(0)
  const [limitPag] = useState(20)
  const [isLoadingComics, setIsLoadingComics] = useState(true)

  useEffect(() => {
    const getComics = async () => {
      const comics = await requests.getComics(offsetPag, limitPag)
      setComics((c) => {
        return [...c, ...comics]
      })
      setIsLoadingComics(false)
    }

    getComics()
  }, [offsetPag, limitPag])

  useEffect(() => {
    const listener = () => {
      if (window.innerHeight + document.documentElement.scrollTop <= document.documentElement.offsetHeight-1000 || isLoadingComics) return
      setIsLoadingComics(true)
    }
    
    window.addEventListener('scroll', listener)

    return () => {
      window.removeEventListener('scroll', listener)
    }
  })

  useEffect(() => {
    if (!isLoadingComics) return;
    setOffsetPag(offset => offset+30)
  }, [isLoadingComics]);

  return (
    <>
      <div style={styles.bannerPrincipal}>
        <h1 style={styles.bannerTitle}>COMICS</h1>
      </div>
      <div style={{ backgroundColor: stylesGeral.colors.grey }} id={'containerListComic'}>
        {isLoadingComics && comics.length === 0 ? <Loader /> : (<div style={styles.containerListComics}>
          { comics.map((comic, i) => {
            return <CardSimple comic={comic} key={i.toString()} />
          }) }
        </div>)}
        <div style={{ backgroundColor: stylesGeral.colors.grey, ...styles.loaderText }}>
          { isLoadingComics && comics.length > 0 ? 'Loading...' : null }
        </div>
      </div>
    </>
  );
}

export default App;

const styles = {
  bannerPrincipal: {
    height: '85vh',
    backgroundColor: stylesGeral.colors.grey,
    backgroundImage: `url(${require('./assets/images/banner.jpg')})`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerTitle: {
    color: stylesGeral.colors.white,
    fontFamily: 'Comica-BD',
    zIndex: 2,
    fontSize: 90
  },
  containerListComics: {
    ...stylesGeral.containerStyle,
    width: 'auto',
    paddingTop: 50,
    paddingBottom: 50,
    backgroundColor: stylesGeral.colors.grey,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  loaderText: {
    fontSize: 20,
    textAlign: 'center',
    color: stylesGeral.colors.white,
    paddingBottom: 20
  }
}
