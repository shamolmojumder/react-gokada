import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
const Slider = () => {
  return (
    <div>
      <Carousel data-aos="zoom-in" data-aos-delay="1050" data-aos-duration="4000" data-aos-offset="200">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/Fq1w8bT/spartan-xozz-AP7-Vail-Aug-Y-unsplash.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Our services</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/Fq1w8bT/spartan-xozz-AP7-Vail-Aug-Y-unsplash.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Our Service</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/Fq1w8bT/spartan-xozz-AP7-Vail-Aug-Y-unsplash.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Our Service</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;