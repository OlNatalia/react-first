import React, { Component } from 'react';
import img1 from './img/architectural-design-architecture-blue-build-417273.jpg';
import img2 from './img/gray-framed-glass-wall-building-1898361.jpg';
import img3 from './img/architectural-design-architecture-building-ceiling-215512.jpg';

class Gallery extends Component {
    render() {
        return (
            <div className="gallery">
                <img src={img1} alt="gallery img" width="350" height="250" />
                <img src={img2} alt="gallery img" width="350" height="250" />
                <img src={img3} alt="gallery img" width="350" height="250" />
            </div>
        )
    }
}

export default Gallery;
