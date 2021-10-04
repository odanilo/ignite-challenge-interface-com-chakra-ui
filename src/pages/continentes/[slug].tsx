import { Heading } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { Header } from '../../components/Header';

interface ContinentProps {
  slug: string;
}

export default function Continent({ slug }: ContinentProps) {
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
