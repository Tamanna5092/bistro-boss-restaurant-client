import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='mx-auto text-center my-10 md:w-4/12'>
            <p className='text-lg text-[#D99904] mb-4'>---{subHeading}---</p>
            <h1 className='text-4xl  border-y-4 py-4 uppercase'>{heading}</h1>
        </div>
    );
};

export default SectionTitle;