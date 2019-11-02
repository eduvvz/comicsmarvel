import React, { useState, useEffect } from 'react';

import Loader from '../shared/Loader'

import requests from '../../utils/requests/comics'

import stylesGeral from '../../assets/styles/geral';

import Swiper from 'swiper/js/swiper.min.js'
import 'swiper/css/swiper.min.css'

function Comic() {

    const [comic, setComic] = useState(null)

    const createSlider = () => {
        var swiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }

    const handlerScroll = () => {

    }

    useEffect(() => {
        createSlider()
        handlerScroll()

        const id = new URL(window.location.href).searchParams.get('id');
        
        const getComic = async () => {
            const comic = await requests.getComic(id)
            console.log(comic)
            setComic(comic)
        }

        getComic()
    }, [])

    return (
        <>
            {comic ? (
                <div className="swiper-container" style={styles.containerSwipper}>
                    <div className="swiper-wrapper">
                        {comic.images.map((img, i) => {
                            return (
                                <div className="swiper-slide" key={i} style={styles.slider}>
                                    <img
                                        style={styles.imgSlider}
                                        src={`${img.path}.${img.extension}`}
                                        alt={comic.title}
                                    />
                                </div>
                            )
                        })}
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            ) : <Loader />}
        </>
    )
}

export default Comic

const styles = {
    containerSwipper: {
        height: '100vh',
        width: '100%'
    },
    slider: {
        textAlign: 'center',
        fontSize: 18,
        background: stylesGeral.colors.grey
    },
    imgSlider: {
        height: '100%'
    }
}