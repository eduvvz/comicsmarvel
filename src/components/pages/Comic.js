import React, { useState, useEffect } from 'react';

import Loader from '../shared/Loader'

import requests from '../../utils/requests/comics'

import stylesGeral from '../../assets/styles/geral';

import Swiper from 'swiper/js/swiper.min.js'
import 'swiper/css/swiper.min.css'

function Comic() {

    const [comic, setComic] = useState(null)
    const [idComic, setIdComic] = useState(null)

    const createSlider = () => {
        new Swiper('.swiper-container', {
            autoplay: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    useEffect(() => {
        const id = new URL(window.location.href).searchParams.get('id');
        setIdComic(id)
    }, [])

    useEffect(() => {
        const getComic = async () => {
            const comic = await requests.getComic(idComic)
            console.log(comic)
            setComic(comic)
        }

        getComic()
    }, [idComic])

    useEffect(() => {
        createSlider()
    }, [comic])

    return (
        <>
            {comic ? (
                <>
                    <div className="swiper-container" style={styles.containerSwipper}>
                        <div className="swiper-wrapper">
                            {comic.images.length > 0 ? comic.images.map((img, i) => {
                                return (
                                    <div className="swiper-slide" key={i} style={styles.slider}>
                                        <img
                                            style={styles.imgSlider}
                                            src={`${img.path}.${img.extension}`}
                                            alt={comic.title}
                                        />
                                    </div>
                                )
                            }) : (
                                <div className="swiper-slide" style={styles.slider}>
                                    <img
                                        style={styles.imgSlider}
                                        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                                        alt={comic.title}
                                    />
                                </div>
                            )}
                        </div>
                        <div style={styles.sliderOverlay}></div>
                        <p style={styles.sliderTitle}>
                            {comic.title}
                        </p>
                        <div className="swiper-button-next swiper-button-white"></div>
                        <div className="swiper-button-prev swiper-button-white"></div>
                    </div>
                    <div style={{ backgroundColor: stylesGeral.colors.grey }}>
                        <div 
                            style={{ ...stylesGeral.containerStyle, ...styles.containerDetail }}
                            className='containerDetail'
                        >
                            <div style={styles.columnDetail}>
                                <div style={{ padding: 10 }}>
                                    <p style={styles.titleDetail}>
                                        Description:
                                    </p>
                                    <p 
                                        style={styles.descriptionDetail} 
                                        dangerouslySetInnerHTML={{ __html: comic.description || 'Coming soon.' }}
                                    >
                                    </p>
                                </div>
                            </div>
                            <div style={styles.columnDetail}>
                                <div style={{ padding: 10 }}>
                                    <p style={styles.titleDetail}>
                                        Characters:
                                    </p>
                                    <p 
                                        style={styles.descriptionDetail} 
                                    >
                                        {comic.characters.items.length > 0 ? comic.characters.items.map((c, i) => {
                                            return `${c.name}${comic.characters.items.length-1 !== i ? ', ' : '.'}`
                                        }) : 'Coming soon.'}
                                    </p>
                                    <p style={styles.titleDetail}>
                                        Creators:
                                    </p>
                                    <p 
                                        style={styles.descriptionDetail} 
                                    >
                                        {comic.creators.items.length > 0 ? comic.creators.items.map((c, i) => {
                                            return `${c.name} - ${c.role}${comic.creators.items.length-1 !== i ? ', ' : '.'}`
                                        }): 'Coming soon.' }
                                    </p>
                                </div>
                            </div>
                            <div style={styles.columnDetail}>
                                <div style={{ padding: 10 }}>
                                    <p style={styles.titleDetail}>
                                        Page Count: <span style={{ fontWeight: 300 }}>{comic.pageCount}</span>
                                    </p>
                                    <p style={styles.titleDetail}>
                                        Format: <span style={{ fontWeight: 300 }}>{comic.format}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : <Loader />}
        </>
    )
}

export default Comic

const styles = {
    containerSwipper: {
        height: '88vh',
        width: '100%',
        paddingTop: 88,
        background: stylesGeral.colors.grey
    },
    slider: {
        textAlign: 'center',
        fontSize: 18,
    },
    imgSlider: {
        height: '100%'
    },
    sliderTitle: {
        position: 'absolute',
        color: stylesGeral.colors.white,
        fontFamily: 'Comica-BD',
        fontSize: 40,
        bottom: 20,
        left: 20,
        zIndex: 10
    },
    sliderOverlay: {
        top: 0,
        zIndex: 2,
        backgroundImage: `linear-gradient(transparent, transparent, ${stylesGeral.colors.black})`,
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    containerDetail: {
        display: 'flex',
        padding: '30px 0',
        width: '100%'
    },
    columnDetail: {
        width: '100%',
    },
    titleDetail: {
        color: stylesGeral.colors.white,
        fontSize: 18,
        fontFamily: 'Roboto',
        fontWeight: 600,
        marginBottom: 5
    },
    descriptionDetail: {
        color: stylesGeral.colors.white,
        fontSize: 16,
        fontFamily: 'Roboto',
        marginTop: 5
    }
}