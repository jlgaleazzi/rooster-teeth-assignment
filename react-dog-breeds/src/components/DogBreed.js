import React, { useEffect, useState } from 'react';

const styles = {
    dog: {
        textAlign:'center',
        padding:'5px',
        width: 200,
        height: 200,
        backgroundColor: '#060606',
    },
    dogName: {
        position:'relative',
        display:'box',
        backgroundColor:'#00000066',
        color:'#fff',
        padding: '5px',
        zIndex: 99,
        top: '80%',
        fontSize: '1.5rem',

    },

    dogImage: {
        position:'relative',
        top:'0px',
        display:'box',
        width:'100%',
        height:'100%',
        objectFit: 'scale-down',
    }
}

const DogBreed = (props) => {
    const {breedName} = props;
    const [pict, setPict] = useState('');
    
    useEffect(()=> {
        if (pict === '') {
        fetch(`https://dog.ceo/api/breed/${breedName}/images/random`)
        .then(res => res.json())
        .then(data => setPict(data.message));
        }
    }, [breedName])

    return (
        <div style={styles.dog}>
            <div style={styles.dogName}>
                {breedName}
            </div>
            <img style={styles.dogImage}src={pict} alt={breedName}/>
            
        </div>
    )

}


export default DogBreed;