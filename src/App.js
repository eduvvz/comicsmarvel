import React, { useState, useEffect } from 'react';

import stylesGeral from './assets/styles/geral'

import requests from './utils/requests/comics'

import CardSimple from './components/shared/CardSimple'

function App() {

  const [comics, setComics] = useState([])
  const [pagination, setPagination] = useState({offset: 0, limit: 30})
  const [isLoadingComics, setIsLoadingComics] = useState(true)

  useEffect(() => {
    const getComics = async () => {
      const comics = await requests.getComics()
      setComics((e) => {
        return [...e, ...comics]
      })
      setIsLoadingComics(false)
    }

    getComics()
  }, [pagination])

  useEffect(() => {
    handleScroll()
  })

  const handleScroll = () => {
    window.addEventListener('scroll', () => {
      const containerListComic = document.getElementById('containerListComic')
      if (containerListComic.scrollHeight-300 < window.scrollY) {
        handlePagination(pagination.offset+30)
      }
    })
  }

  const handlePagination = async (newOffset) => {
    if (isLoadingComics) {
      return 
    }

    console.log('traga mais');    
  }

  return (
    <>
      <div style={styles.bannerPrincipal}>
        <h1 style={styles.bannerTitle}>COMICS</h1>
        <button onClick={() => console.log(isLoadingComics)}>press here</button>
      </div>
      <div style={{ backgroundColor: stylesGeral.colors.grey }} id={'containerListComic'}>
        {isLoadingComics && comics.length === 0 ? 'Loading...' : (<div style={styles.containerListComics}>
          { comics.map((comic, i) => {
            return <CardSimple comic={comic} key={i.toString()} />
          }) }
        </div>)}
      </div>
    </>
  );
}

export default App;

const styles = {
  bannerPrincipal: {
    height: '85vh',
    backgroundColor: 'orange',
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
  }
}
