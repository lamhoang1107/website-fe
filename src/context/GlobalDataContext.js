// context/GlobalDataContext.js
import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export const GlobalDataContext = createContext();

export function GlobalDataProvider({ children }) {
  const [globalData, setGlobalData] = useState(null);
  const router = useRouter();

    // Fetch the initial data on mount
    useEffect(() => {
        fetchData(); // Fetch data when component mounts
    }, []);

    // Listen for route changes and update the data
    useEffect(() => {
        const handleRouteChange = () => {
        console.log('Route changed, re-fetching data...');
        fetchData(); // Trigger data reload on route change
    };

    // Add the event listener for route changes
    router.events.on('routeChangeComplete', handleRouteChange);

    // Cleanup the event listener when the component unmounts
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  // Fetch data function
  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    let demo_data = {
        page: {
            home: {
                id: 1,
                name: "Trang chủ",
                route: "/",
                status: true
            },
            about: {
                id: 2,
                name: "Về chúng tôi",
                route: "/about",
                status: true
            },
            service: {
                id: 3,
                name: "Về dịch vụ nè",
                route: "/service",
                status: false
            },
            blog: {
                id: 4,
                name: "Blog",
                route: "/blog",
                status: false
            },
            pages: {
                id: 5,
                name: "Pages",
                route: "/pages",
                status: false,
            },
            contact: {
                id: 6,
                name: "Contact",
                route: "/contact",
                status: false
            }
        },

    }
    console.log("🐈 ~ fetchData ~ data:", demo_data)
    setGlobalData(demo_data); // Update context with new data
  };

  return (
    <GlobalDataContext.Provider value={{ globalData }}>
      {children}
    </GlobalDataContext.Provider>
  );
}
