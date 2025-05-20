import React from 'react';
import SectionTitle from '../../Pages/Shared/SectionTitle/SectionTitle';
import featuredImage from '../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
         <section className='featured-item text-white pt-10 my-10 relative'>
            <div className='absolute inset-0 bg-black bg-opacity-60'></div>
            <div className='relative z-10'>
                <SectionTitle
                subHeading={"Check it out"}
                heading={"From Our Menu"}>
            </SectionTitle>
            <div className='md:flex justify-center items-center px-10 space-y-6 md:space-y-0 pb-20 pt-12 md:px-36 gap-6'>
                <div className='md:w-1/2'>
                    <img src={featuredImage} alt="Featured" className="w-full object-cover" />
                </div>
                <div className='md:w-1/2'>
                    <p>March 20, 2025</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolore id placeat temporibus necessitatibus vero veniam, cupiditate fugit. Ex, sit.</p>
                    <button className="uppercase mt-2 relative inline-block text-white 
                   after:content-[''] after:block after:w-0 after:h-[2px] after:bg-white 
                   after:transition-all after:duration-300 
                   hover:after:w-full">Read More</button>
                </div>
            </div>
            </div>
         </section>
    );
};

export default Featured;