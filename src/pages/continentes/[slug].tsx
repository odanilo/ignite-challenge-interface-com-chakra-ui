import { Heading } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { useEffect } from 'react';
import { Header } from '../../components/Header';

interface ContinentProps {
  slug: string;
}

export default function Continent({ slug }: ContinentProps) {
  useEffect(() => {
    fetch(`http://localhost:3000/api/cities?slug=${slug}`)
      .then(response => response.json())
      .then(data => console.log(data));
  }, [slug]);

  return (
    <>
      <Header />
      <Heading>{slug}</Heading>
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
