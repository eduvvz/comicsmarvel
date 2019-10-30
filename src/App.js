import React, { useState, useEffect } from 'react';

import stylesGeral from './assets/styles/geral'

import { getComics } from './utils/requests/comics'

function App() {

  const [comics, setComics] = useState([])

  useEffect(() => {
    getComics();
  })

  return (
    <>
      <div style={styles.bannerPrincipal}>
        <h1 style={styles.bannerTitle}>COMICS</h1>
      </div>
      <div style={styles.containerListComics}>

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
    backgroundColor: stylesGeral.colors.grey,
    padding: '30px 0px',
  }
}
