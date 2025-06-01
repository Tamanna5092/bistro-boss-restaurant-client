import React, { useEffect, useState } from "react";
import FoodCard from "../../components/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(3);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(items.length);
    // setCurrentPage(1)
  }, [items]);

  const numberOfPages = Math.ceil(count / itemPerPage);
  const pages = [...Array(numberOfPages).keys()].map((i) => i + 1);
  const startIndex = (currentPage - 1) * itemPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemPerPage);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0">
        {currentItems.map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
      </div>
      {/* pagination */}
      <div className="my-10 space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-[#E8E8E8] hover:bg-[#1F2937] hover:text-[#BB8506] hover:border-none border-b-4 border-[#BB8506] rounded disabled:opacity-50"
        >
          Prev
        </button>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 rounded ${
              currentPage === page
                ? "bg-yellow-500 text-white"
                : "bg-[#E8E8E8] hover:bg-gray-300"
            }`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, numberOfPages))
          }
          disabled={currentPage === numberOfPages}
          className="px-3 py-1 bg-[#E8E8E8] hover:bg-[#1F2937] hover:text-[#BB8506] hover:border-none border-b-4 border-[#BB8506] rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default OrderTab;
