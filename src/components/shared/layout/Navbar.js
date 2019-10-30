import React, { useState, useEffect } from 'react';

import stylesGeral from '../../../assets/styles/geral'

function Navbar() {

    const [styleLogo, setStyleLogo] = useState(styles.logoImg.big);

    useEffect(() => {
        handleScroll()
    });

    const handleScroll = () => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                if (styleLogo === styles.logoImg.big) {
                    setStyleLogo(styles.logoImg.small)
                }
            } else {
                if (styleLogo !== styles.logoImg.big) {
                    setStyleLogo(styles.logoImg.big)
                }
            }
        })
    }

    return (
        <>
            <div style={styles.containerMenu}>
                <div style={{...stylesGeral.containerStyle, ...styles.rowMenu}}>
                    <img src={require('../../../assets/images/marvellogo.png')} alt={'marvel logo'} style={styleLogo} />
                    <img src={require('../../../assets/images/search.png')} alt={'icon search'} style={styles.searchButton} />
                </div>
            </div>
        </>
    );
}

export default Navbar

const styles = {
    containerMenu: {
        position: 'fixed',
        top: 0,
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        backgroundColor: stylesGeral.colors.black,
        padding: '7px 0px',
        zIndex: '999'
    },
    logoImg: {
        big: {
            maxHeight: '70px',
            transition: '0.3s'
        },
        small: {
            maxHeight: '50px',
            transition: '0.3s'
        }
    },
    rowMenu: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    searchButton : {
        maxHeight: 30,
        cursor: 'pointer'
    },
}