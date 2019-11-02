import React from 'react'

import stylesGeral from '../../assets/styles/geral'

function Loader() {
    return (
        <div style={styles.loaderContainer}>
            <img style={styles.loader} src={require('../../assets/images/loader.gif')} alt='loader' />
        </div>
    )
}

export default Loader

const styles = {
    loaderContainer: {
        height: '100vh',
        width: '100%',
        backgroundColor: stylesGeral.colors.grey,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loader: {
        width: 100
    }
}