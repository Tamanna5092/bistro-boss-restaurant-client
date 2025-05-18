import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

const Menu = () => {
    return (
        <div>
            <SectionTitle 
            subHeading={"Check it out"}
            heading={"From Our Menu"}></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div className='flex flex-col md:flex-row gap-6 justify-center items-center px-4 md:px-0'>
                <div className='w-full h-full'>
                    <img className='w-full h-full rounded-[0%_57%_49%_50%_/_0%_52%_48%_76%]' src="https://i.ibb.co/py5Sctj/img2.jpg" alt="" />
                </div>
                <div>
                    <div className='flex justify-between items-center'>
                        <h3 className='text-xl uppercase'>Roast Duck Breast--------------</h3>
                    <span className='text-[#BB8506] text-xl'>$20</span>
                    </div>
                    <p className='mt-2 text-justify pr-0 md:pr-10'>
                        Our Roast Duck Breast is expertly prepared to achieve a crispy skin and tender, juicy meat. Served with a delicate sauce and seasonal accompaniments, this dish offers a perfect balance of rich flavors and elegant presentation, making it a standout choice for any gourmet meal.
                    </p>
                </div>
            </div>
                <div className='flex flex-col md:flex-row gap-6 justify-center items-center px-4 md:px-0'>
                <div className='w-full h-full'>
                    <img className='w-full h-full rounded-[0%_57%_49%_50%_/_0%_52%_48%_76%]' src="https://i.ibb.co/C9TtZdh/img1.jpg" alt="" />
                </div>
                <div>
                    <div className='flex justify-between items-center'>
                        <h3 className='text-xl uppercase'>Tuna Nicoise--------------</h3>
                    <span className='text-[#BB8506] text-xl'>$35</span>
                    </div>
                    <p className='mt-2 text-justify pr-0 md:pr-10'>
                        A classic French salad featuring seared tuna, crisp greens, olives, potatoes, green beans, and eggs, all tossed in a light vinaigrette. This refreshing dish combines vibrant flavors and textures for a satisfying and healthy meal.
                    </p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Menu;