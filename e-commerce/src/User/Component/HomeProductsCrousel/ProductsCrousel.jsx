import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import DefaultProductCard from '../HomeSectionCard/DefaultProductCard';
import { Button } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const responsive = {
    0: { items: 1.5 },
    568: { items: 2.5 },
    1024: { items: 5 },
};

const items = [1, 1, 1, 1, 1, 1, 1].map((item) => <DefaultProductCard />);

const ProductCarousel = ({sectionName}) => {
    
    const [activeIndex, setActiveIndex] = useState(0); // State to hold the active index

    const handlePrevClick = () => {
        setActiveIndex(activeIndex === 0 ? items.length - 1 : activeIndex - 1);
        carousel.slidePrev();
    };

    const handleNextClick = () => {
        setActiveIndex(activeIndex === items.length - 1 ? 0 : activeIndex + 1);
        carousel.slideNext();
    };

    let carousel = null;

    return (
        <div className=' px-4 lg:px-8 mt-5 mb-5' >
            <h2 className='text-2xl font-extrabold text-gray-800'>{sectionName}</h2>
            <div className='relative '>
                <AliceCarousel
                    mouseTracking
                    items={items}
                    responsive={responsive}
                    controlsStrategy="alternate"
                    disableButtonsControls
                    disableDotsControls
                    buttonsDisabled={true}
                    ref={(el) => (carousel = el)}
                />
                {activeIndex!== 0 &&
                <Button
                    variant='contained'
                    className="z-50 bg-white"
                    sx={{position:'absolute', top:'8rem',left:'0rem',transform:'translate(-50%) rotate(-90deg)',bgcolor:'white'}}
                    aria-label='previous'
                    onClick={handlePrevClick}
                    endIcon={<KeyboardArrowLeftIcon sx={{transform:'translate(-30%) rotate(90deg)',color:'black'}}/>}
                />}
                {activeIndex!== items.length - 1 && <Button
                    
                    variant="contained"
                    className="z-50 bg-white"
                    sx={{position:'absolute', top:'8rem',right:'0rem',transform:'translate(50%) rotate(-90deg)',bgcolor:'white'}}
                    aria-label='next'
                    onClick={handleNextClick}
                    endIcon={<KeyboardArrowRightIcon sx={{transform:'translate(-25%) rotate(90deg)',color:'black'}}/>}
                />}
            </div>
        </div>
    );
};

export default ProductCarousel;
