import React from 'react';


const Cover = ({img, title, subTitle}) => {
    return (
      <div className="relative">
            <img
              className="w-full h-[500px] md:h-[600px] bg-cover object-center"
              src={img}
              alt=""
            />
            <div className="absolute inset-0 m-14 md:m-32 bg-black bg-opacity-60 flex justify-center items-center px-4">
              <div className="text-center text-white max-w-4xl md:p-10">
                <h1 className="text-3xl md:text-5xl uppercase mb-4">{title}</h1>
                <p>
                  {subTitle}
                </p>
              </div>
            </div>
          </div>
        // <div>
        //     <div
        //             className="hero h-[500px] md:h-[600px] bg-cover bg-center"
        //             style={{
        //               backgroundImage:
        //                  `url(${img})`,
        //             }}
        //           >
        //             <div className="hero-overlay bg-opacity-60"></div>
        //             <div className="hero-content text-neutral-content text-center bg-[#151515] bg-opacity-60 ">
        //               <div className='py-20 px-10 md:px-96'>
        //                 <div className="border-4">
        //                 <h1 className="mb-5 text-5xl font-bold">{title}</h1>
        //                 <p className="mb-5 max-w-4xl">
        //                     {subTitle}
        //                 </p>
        //               </div>
        //               </div>
        //             </div>
        //           </div>
        // </div>
    );
};

export default Cover;