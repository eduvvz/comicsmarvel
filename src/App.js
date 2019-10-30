import React from 'react';

import stylesGeral from './assets/styles/geral'

function App() {
  return (
    <>
      <div style={styles.bannerPrincipal}>
        <h1 style={styles.bannerTitle}>COMICS</h1>
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
    zIndex: 1
  },
  bannerTitle: {
    color: stylesGeral.colors.white,
    fontFamily: 'Comica-BD',
    zIndex: 2,
    fontSize: 90
  }
}
