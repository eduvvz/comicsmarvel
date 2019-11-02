import React, { useState, useEffect } from 'react';

import stylesGeral from '../../assets/styles/geral'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function CardSimple({comic}) {

    const [isHover, setIsHover] = useState(false)

    return (
        <div 
            style={styles.card}
            onMouseEnter={() => setIsHover(true)} 
            onMouseLeave={() => setIsHover(false)}
        >
            <div style={styles.cardImage}>
                <LazyLoadImage
                    alt={comic.title}
                    effect="blur"
                    height={'100%'}
                    style={{ transform: isHover ? `scale(1.1)` : 'none', transition: '0.4s' }}
                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                />
                <div style={{ ...styles.overlay, opacity: isHover ? 0.5 : 0 }}>
                    <img style={styles.iconSearch} src={require('../../assets/images/search.png')} alt={'icon search'} />
                </div>
            </div>
            <div style={styles.cardTitle}>
                <span style={styles.title}>
                    {comic.title}
                </span>
            </div>
        </div>
    )
}

export default CardSimple

const styles = {
    card: {
        width: 300,
        height: 540,
        marginBottom: 30,
        marginRight: 5,
        marginLeft: 5,
        overflow: 'hidden',
        cursor: 'pointer'
    },
    cardImage: {
        position: 'relative',
        top: 0,
        height: '85%',
        minWidth: '100%',
        overflow: 'hidden'
    },
    cardTitle: {
        height: '15%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'Roboto',
        fontSize: 16,
        color: 'white',
        textAlign: 'center'
    },
    overlay: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        height: 460,
        width: '100%',
        backgroundColor: stylesGeral.colors.grey,
        transition: '0.2s',
        top: 0
    },
    iconSearch: {
        alignSelf: 'center'
    }
}