// context/GlobalDataContext.js
import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export const GlobalDataContext = createContext();

export function GlobalDataProvider({ children }) {
  const [globalData, setGlobalData] = useState(null);
  const router = useRouter();

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const handleRouteChange = () => {
        console.log('Route changed, re-fetching data...');
        fetchData(); // Trigger data reload on route change
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  // Fetch data function
  const fetchData = async () => {
    const page_response = await fetch('http://localhost:8888/v1/pages').then(results => results.json());
    const component_response = await fetch('http://localhost:8888/v1/components').then(results => results.json());
    
    let data = {
      page: page_response.items,
      component: component_response.result,
    }
    console.log("🐈 ~ fetchData ~ data:", data)
    setGlobalData(data);
  };

  return (
    <GlobalDataContext.Provider value={{ globalData }}>
      {children}
    </GlobalDataContext.Provider>
  );
}
