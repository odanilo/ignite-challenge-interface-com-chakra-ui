import { useEffect, useState } from 'react';
import { City } from '../services/mirage/cities';

export type Continent = {
  countries_amount: number;
  description: string;
  id: string;
  languages_amount: number;
  name: string;
  slug: string;
};

interface responseData {
  continent: Continent;
  cities: City[];
}

type Status = 'LOADING' | 'ERROR' | 'SUCCESS';

export function useContinent(slug: string) {
  const [requestStatus, setRequestStatus] = useState<Status>('LOADING');
  const [continent, setContinent] = useState<Continent | null>(null);
  const [cities, setCities] = useState<City[]>([]);

  useEffect(() => {
    setRequestStatus('LOADING');
    try {
      fetch(`http://localhost:3000/api/cities?slug=${slug}`)
        .then(response => response.json())
        .then((data: responseData) => {
          setContinent(data.continent);
          setCities(data.cities);
          setRequestStatus('SUCCESS');
        });
    } catch {
      setRequestStatus('ERROR');
    }
  }, [slug]);

  return {
    requestStatus,
    continent,
    cities,
  };
}
