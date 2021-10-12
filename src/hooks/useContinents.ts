import { useEffect, useState } from 'react';

type Continent = {
  summary: string;
  id: string;
  name: string;
  slug: string;
};

type RequestStatus = 'LOADING' | 'ERROR' | 'SUCCESS';

export function useContinents() {
  const [continents, setContinents] = useState<Continent[] | null>(null);
  const [requestStatus, setRequestStatus] = useState<RequestStatus>('LOADING');

  useEffect(() => {
    try {
      fetch('http://localhost:3000/api/continents')
        .then(response => response.json())
        .then(data => {
          setContinents(data.continents);
          setRequestStatus('SUCCESS');
        });
    } catch (error) {
      setRequestStatus('ERROR');
    }
  }, []);

  return {
    continents,
    requestStatus,
  };
}
