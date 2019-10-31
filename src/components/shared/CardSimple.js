import React from 'react';

function CardSimple({comic}) {

    return (
        <div style={styles.card}>
            <div style={{ ...styles.cardImage, backgroundImage: `url(${comic.thumbnail.path}.${comic.thumbnail.extension})` }}>

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
    },
    cardImage: {
        height: '85%',
        minWidth: '100%',
        backgroundSize: 'cover'
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
    }
}