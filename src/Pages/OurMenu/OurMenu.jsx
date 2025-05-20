import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
 
const OurMenu = () => {
      const location = useLocation();

  useEffect(() => {
    document.title = "Bistro Boss | Our Menu";
  }, [location.pathname]);

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <h2>Menu</h2>
        </div>
    );
};

export default OurMenu;