import React, { Component } from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { useState } from 'react';

const images = [
    "/src/assets/IMG-3820.jpg",
    "/src/assets/IMG-3968.jpg",
    "/src/assets/IMG-3969.jpg",
    "/src/assets/IMG-3970.jpg",
    "/src/assets/IMG-3971.jpg",
    "/src/assets/IMG-3972.jpg",
    "/src/assets/IMG-3973.jpg",
    "/src/assets/IMG-3980.jpg",
    "/src/assets/IMG-5003.JPG",
    "/src/assets/IMG-5064.JPG",
    "/src/assets/IMG-5074.JPG",
    "/src/assets/IMG-5546.JPG",
    "/src/assets/IMG-5576.jpg",
    "/src/assets/IMG-5577.jpg",
    "/src/assets/IMG-5579.jpg",
    "/src/assets/IMG-5580.jpg",
    "/src/assets/IMG-5582.jpg",
    "/src/assets/IMG-5583.jpg",
    "/src/assets/IMG-5584.jpg",
    "/src/assets/IMG-5585.jpg",
    "/src/assets/IMG-5763.jpg",
    "/src/assets/IMG-5764.jpg",
    "/src/assets/IMG-5765.jpg",
    "/src/assets/IMG-5766.jpg",
    "/src/assets/IMG-5767.jpg",
    "/src/assets/IMG-5768.jpg",
    "/src/assets/IMG-5869.jpg",
    "/src/assets/IMG-5870.jpg",
    "/src/assets/IMG-5871.jpg",
    "/src/assets/IMG-5872.jpg",
    "/src/assets/IMG-5873.jpg",
    "/src/assets/IMG-5874.jpg",
    "/src/assets/IMG-5875.jpg",
    "/src/assets/IMG-5876.jpg",
    "/src/assets/IMG-5877.jpg",
    "/src/assets/IMG-5878.jpg",
    "/src/assets/IMG-5879.jpg",
    "/src/assets/IMG-5880.jpg",
    "/src/assets/IMG-5881.jpg",
    "/src/assets/IMG-5882.jpg",
    "/src/assets/IMG-5883.jpg",
    "/src/assets/IMG-5884.jpg",
    "/src/assets/IMG-5885.jpg",
    "/src/assets/IMG-5891.jpg",
    "/src/assets/IMG-5892.jpg",
    "/src/assets/IMG-5893.jpg",
    "/src/assets/IMG-5894.jpg",
    "/src/assets/IMG-5895.jpg",
    "/src/assets/IMG-5898.jpg",
]

class PhotoGallery extends Component {
    render() {
        
        

        return (
            <div className='bg-gray-200'>
                <div>
                    <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                    <Masonry gutter='20px'>
                        {images.map((image, i) => (
                            <img
                                key={i}
                                src={image}
                                style={{width: "100%", display: "block"}}
                                alt=""
                            />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
                </div>
            </div>
        );
    }
}

export default PhotoGallery;