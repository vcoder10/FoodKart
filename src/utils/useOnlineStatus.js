import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
    //console.log(window);
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;

// import  { useState, useEffect } from 'react';

// const useOnlineStatus = () => {
//   const [isOnline, setIsOnline] = useState(navigator.onLine);

//   useEffect(() => {
//     const handleOnline = () => {
//       setIsOnline(true);
//     };

//     const handleOffline = () => {
//       setIsOnline(false);
//     };

//     window.addEventListener('online', handleOnline);
//     window.addEventListener('offline', handleOffline);

//     return () => {
//       window.removeEventListener('online', handleOnline);
//       window.removeEventListener('offline', handleOffline);
//     };
//   }, []);
//   return isOnline;
// }
//export default useOnlineStatus;
