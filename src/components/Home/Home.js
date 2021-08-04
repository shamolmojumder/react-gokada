import React from 'react';
import Slider from '../Slider/Slider';
import styles from './Home.module.css'
import fakedata from '../../data/fakeData.json'
import { useState } from 'react';
import Vehicle from '../Vehicle/Vehicle'
import { useEffect } from 'react';

const Home = () => {
    const allData=fakedata.vehicles;
    const[vehicles,setvehicles] =useState(allData)
    useEffect(()=>{
        setvehicles(allData)
    },[allData])
    
    return (
        <div>
            <Slider></Slider>
            <div className={styles.background}>
              <div className={styles.flex}>
              {
                    vehicles.map(vehicle=> <Vehicle vehicle={vehicle} key={vehicle.id}></Vehicle> )
                }
              </div>

            </div>
        </div>
    );
};

export default Home;