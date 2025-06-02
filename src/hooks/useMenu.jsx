import { useEffect, useState } from "react";


const useMenu = () => {
      const [menu, setMenu] = useState([]);
    
      useEffect(() => {
        fetch("https://bistro-boss-server-flame-two.vercel.app/menu")
          .then((res) => res.json())
          .then((data) => {
            console.log("Total items:", data.length);
            setMenu(data);
          });
      }, []);
      return [menu];
};

export default useMenu;