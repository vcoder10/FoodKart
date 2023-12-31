import { useEffect, useState } from "react";
import { SWIGGY_MENU_API_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  //console.log("hello from cutom hooks")
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const getresInfo = async () => {
      const data = await fetch(SWIGGY_MENU_API_URL + resId);
      const jsonData = await data.json();
      //console.log("hello from inside cutom hooks")
      console.log(jsonData);
      setResInfo(jsonData);
    };
    getresInfo();
  }, []);

  return resInfo;
};

export default useRestaurantMenu;
