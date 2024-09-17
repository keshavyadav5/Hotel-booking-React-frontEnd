import React, { useState, useEffect } from 'react';
import './Book.css';
import Card from './Card.jsx';

import book1 from '../../assets/book1.png';
import book2 from '../../assets/book2.png';
import book3 from '../../assets/book3.png';
import book4 from '../../assets/book4.png';
import book5 from '../../assets/book5.png';
import book6 from '../../assets/book6.png';
import book7 from '../../assets/book7.png';

const data = [
    {
        title: "Single Bed Special",
        image: book1,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti hic dolore odio debitis autem dot dark boy"
    },
    {
        title: "Couple Special",
        image: book2,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti hic dolore odio debitis autem daro sfa sf"
    },
    {
        title: "Family Room Special",
        image: book3,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti hic dolore odio debitis autem "
    },
    {
        title: "Children special ",
        image: book4,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti hic dolore odio debitis autem wtrwt sfs wre "
    },
    {
        title: "Expensive luxury room",
        image: book5,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti hic dolore odio debitis autem lsfo sgfsg"
    },
    {
        title: "Apex Night luxury",
        image: book6,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti hic dolore odio debitis autem keshav "
    },
    {
        title: "HoneyMoon special",
        image: book7,
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti hic dolore odio debitis autem your future "
    },
];

function Book() {
    const [startSlide, setStartSlide] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(getInitialSlidesToShow());

    useEffect(() => {
        function handleResize() {
            setSlidesToShow(getInitialSlidesToShow());
        }

        const intervalId = setInterval(() => {
            nextSlide();
        }, 3000); // Slide automatically after 3 seconds

        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(intervalId); // Clear the interval on component unmount
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function getInitialSlidesToShow() {
        if (window.innerWidth < 667) {
            return 1;
        } else if (window.innerWidth < 900) {
            return 1;
        } else {
            return 1;
        }
    }

    const nextSlide = () => {
        setStartSlide((prevStartSlide) => (prevStartSlide === data.length - slidesToShow ? 0 : prevStartSlide + 1));
    };

    const prevSlide = () => {
        setStartSlide((prevStartSlide) => (prevStartSlide === 0 ? data.length - slidesToShow : prevStartSlide - 1));
    };

    const visibleSlides = data.slice(startSlide, startSlide + slidesToShow);

    return (
        <div className="card-container">
            <h4>Apex room & suites</h4>
            <div className="card-container-button">
                {/* <div onClick={prevSlide} className='prev-btn'></div> */}
                <div className='book-container'>
                    {visibleSlides.map((d, i) => (
                        <Card
                            key={startSlide + i} // Use a unique key
                            title={d.title}
                            image={d.image}
                            about={d.about}
                        />
                    ))}
                </div>
                {/* <div onClick={nextSlide} className="next-btn"></div> */}
            </div>
        </div>
    );
}

export default Book;
