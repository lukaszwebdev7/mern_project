import React, { useEffect, useState } from 'react';
import '../styles/Slider.css';

const Slider = () => {

    let [animals, setAnimals] = useState([]);

    useEffect(() => {
        fetch('/api/animals')
            .then((r) => r.json())
            .then((r) => {
                setAnimals(r.animals);
            });
    }, [])

    return (
        <div className="slider-container" >
            {animals = animals.map((animal => {
                return (
                    <>
                        <img key={animal.id} className="slider-image" src={animal.imageDog} alt='piesek' />
                        <h2 key={animal.id} className="slider-text">{animal.nameDog}</h2>
                    </>
                )
            }))}
        </div>
    )
}

export default Slider;

