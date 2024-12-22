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
    const page_response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/pages').then(results => results.json());
    const component_response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/components').then(results => results.json());
    const review_response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/reviews').then(results => results.json());
    
    let data = {
      page: page_response.items,
      component: component_response.result,
      review: review_response.items
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
