import React from 'react';


const Cover = ({img, title, subTitle}) => {
    return (
      <div className="relative">
            <img
              className="w-full h-[400px] md:h-[600px] bg-cover object-center"
              src={img}
              alt=""
            />
            <div className="absolute inset-0 md:m-32 bg-black bg-opacity-60 flex justify-center items-center px-4">
              <div className="text-center text-white max-w-4xl md:p-10">
                <h1 className="text-3xl md:text-5xl font-semibold uppercase mb-4">{title}</h1>
                <p className='uppercase'>
                  {subTitle}
                </p>
              </div>
            </div>
          </div>
    );
};

export default Cover;