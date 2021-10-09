import { GetServerSideProps } from 'next';
import { ContinentLoading } from '../../components/Continents/ContinentLoading';
import { ContinentError } from '../../components/Continents/ContinentError';
import { ContinentTopCities } from '../../components/Continents/ContinentTopCities';
import { ContinentHeader } from '../../components/Continents/ContinentHeader';
import { useContinent } from '../../hooks/useContinent';

export type Continent = {
  countries_amount: number;
  description: string;
  id: string;
  languages_amount: number;
  name: string;
  slug: string;
};

interface ContinentProps {
  slug: string;
}

export default function Continent({ slug }: ContinentProps) {
  const { cities, continent, requestStatus } = useContinent(slug);

  if (requestStatus === 'LOADING') {
    return <ContinentLoading />;
  }

  if (requestStatus === 'ERROR' || !continent) {
    return <ContinentError />;
  }

  return (
    <>
      <ContinentHeader cities={cities} continent={continent} />
      <ContinentTopCities cities={cities} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = String(params?.slug);

  return {
    props: {
      slug,
    },
  };
};
