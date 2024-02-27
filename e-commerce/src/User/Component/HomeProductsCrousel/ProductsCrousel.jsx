import React from 'react';
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

const ProductCarousel = () => {
    const handlePrevClick = () => {
        carousel.slidePrev();
    };

    const handleNextClick = () => {
        carousel.slideNext();
    };

    let carousel = null;

    return (
        <div className=' px-4 lg:px-8'>
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
                <Button
                    variant='contained'
                    className="z-50 absolute top-[8rem] left-[0rem] w-4"
                    onClick={handlePrevClick}
                >
                    <KeyboardArrowLeftIcon />
                </Button>
                <Button
                    className="z-50 absolute top-[8rem] right-[0rem] "
                    onClick={handleNextClick}
                    variant="contained"
                    endIcon={<KeyboardArrowRightIcon />}
                >
                    
                </Button>
            </div>
        </div>
    );
};

export default ProductCarousel;
