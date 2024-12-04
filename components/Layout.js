// components/Layout.js
import { useEffect, useState } from 'react';
// import { GlobalDataContext } from '../context/GlobalDataContext';

export default function Layout({ children }) {
//   const [globalData, setGlobalData] = useState(null);

//   useEffect(() => {
//     async function fetchGlobalData() {
//       const res = await fetch('https://dummyjson.com/posts');
//       const data = await res.json();
//       console.log("🐈 ~ fetchGlobalData ~ data:", data)
//       setGlobalData(data);
//     }
//     fetchGlobalData();
//   }, []);

  return (
    <div>
      {/* <header>{}</header> */}
      {children}
    </div>
  );
}
