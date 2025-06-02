import React, { useEffect, useState } from "react";

const AllMenu = () => {
  const [menu , setMenu] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(5);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(`https://bistro-boss-server-flame-two.vercel.app/all-menu?page=${currentPage}&size=${itemPerPage}`)
    .then(res => res.json())
    .then(data => {
      setMenu(data)
    })
  fetch(`https://bistro-boss-server-flame-two.vercel.app/menuCount`)
      .then(res => res.json())
      .then(data => setCount(data.count));
  }, [currentPage, itemPerPage]);

  const numberOfPages = Math.ceil(count / itemPerPage);
  const pages = [...Array(numberOfPages).keys()].map((element) => element + 1);

  const handleItemPerpage = (e) => {
    console.log(e.target.value);
    const value = parseInt(e.target.value);
    setItemPerPage(value);
    setCurrentPage(1)
  };

  const handlePrevPage = () => {
    if(currentPage > 1)
      setCurrentPage(currentPage - 1)
  }

  const handleNextPage = () => {
    if(currentPage < pages.length)
      setCurrentPage(currentPage + 1)
  }

  return (
    <div className="max-w-screen-xl mx-auto my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {menu.map((item) => (
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center border-2 p-4">
            <div className="md:w-1/4">
              <img
                className="w-full h-full rounded-[0%_57%_49%_50%_/_0%_52%_48%_76%]"
                src={item.image}
                alt=""
              />
            </div>
            <div className="md:w-3/4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl uppercase">{item.name}--------------</h3>
                <span className="text-[#BB8506] text-xl">{item.price}</span>
              </div>
              <p className="mt-2 text-justify pr-0 md:pr-10">{item.recipe}</p>
            </div>
          </div>
        ))}
      </div>
      {/* pagination */}
      <div className="text-center space-x-2 my-10">
        <p>Current page: {currentPage}</p>
        <button onClick={handlePrevPage} className="btn">Prev</button>
        {pages.map((page) => (
          <button
            className={`btn ${
              currentPage === page
                ? "bg-yellow-500 text-white"
                : "bg-[#E8E8E8] hover:bg-gray-300"
            }`}
            onClick={() => setCurrentPage(page)}
            key={page}
          >
            {page}
          </button>
        ))}
        <button onClick={handleNextPage} className="btn">Next</button>
        <select value={itemPerPage} onChange={handleItemPerpage}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
    </div>
  );
};

export default AllMenu;
