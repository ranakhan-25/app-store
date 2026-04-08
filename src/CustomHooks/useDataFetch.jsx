import React, { useEffect, useState } from 'react'

const useDataFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [apps, setApps] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/data.json");
      const data = await res.json();
      setApps(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return {isLoading,apps}

}

export default useDataFetch