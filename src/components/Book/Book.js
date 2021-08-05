import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../data/fakeData.json';
import styles from './Book.module.css'
const Book = () => {
    const {id} =useParams();
    const [data,setData] =useState({});
    console.log(data);
    const bookData=fakeData.vehicles[id];
    useEffect(()=>{
        setData(bookData);
    },[bookData])
    return (
        <div>
           <div  className={styles.bookMain}>
               <div className={styles.search}>
                   <img className={styles.img} src={data.url} alt="" />
                   <br />
                   <input placeholder="pickup" type="text" name="" id="" />
                   <br />
                   <input placeholder="destination" type="text" name="" id="" />
                   <br />
                   <button  type="button" class="btn btn-info"> Serach </button>
               </div>
               <div className="map">
               <iframe title="This is a unique title" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.230719708728!2d90.41949371527508!3d23.810393392398044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c652ad474d1d%3A0x89919f070b3fd1f2!2sBH%20Plaza!5e0!3m2!1sen!2sbd!4v1628104575039!5m2!1sen!2sbd" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
               </div>
           </div>
        </div>
    );
};

export default Book;