import { createServer, Model } from 'miragejs';
import { cities, City } from './cities';

type Continent = {
  countries_amount: number;
  description: string;
  id: string;
  languages_amount: number;
  name: string;
  slug: string;
  summary: string;
};

const continents: Continent[] = [
  {
    countries_amount: 54,
    description:
      'A África é o terceiro continente mais extenso (depois da Ásia e da América) com cerca de 30 milhões de quilômetros quadrados, cobrindo 20,3% da área total da terra firme do planeta',
    id: '1',
    languages_amount: 3000,
    name: 'África',
    slug: 'africa',
    summary: 'O continente mais antigo',
  },
  {
    countries_amount: 3,
    description:
      'A América do Norte é um subcontinente que compreende a porção setentrional do continente americano',
    id: '2',
    languages_amount: 6,
    name: 'América do Norte',
    slug: 'america-do-norte',
    summary: 'O continente mais antigo',
  },
  {
    countries_amount: 12,
    description:
      'A América do Sul é um continente que compreende a porção meridional da América. Também é considerada um subcontinente do continente americano. A sua extensão é de 17 819 100 km², abrangendo 12% da superfície terrestre e 6% da população mundial.',
    id: '3',
    languages_amount: 9,
    name: 'América do Sul',
    slug: 'america-do-sul',
    summary: 'O continente mais antigo',
  },
  {
    countries_amount: 50,
    description:
      'A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial',
    id: '4',
    languages_amount: 7,
    name: 'Ásia',
    slug: 'asia',
    summary: 'O continente mais antigo',
  },
  {
    countries_amount: 50,
    description:
      'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso,[1] e o mar Negro a sudeste',
    id: '5',
    languages_amount: 60,
    name: 'Europa',
    slug: 'europa',
    summary: 'O continente mais antigo',
  },
  {
    countries_amount: 16,
    description:
      "Oceania ou Oceânia é uma região geográfica composta por vários grupos de ilhas do oceano Pacífico (Polinésia, Melanésia e Micronésia). O termo Oceania foi criado em 1831 pelo explorador francês Dumont d'Urville",
    id: '6',
    languages_amount: 18,
    name: 'Oceania',
    slug: 'oceania',
    summary: 'O continente mais antigo',
  },
];

export function makeServer() {
  const server = createServer({
    models: {
      continent: Model.extend<Partial<Continent>>({}),
      city: Model.extend<Partial<City>>({}),
    },

    seeds(server) {
      continents.forEach(continent => {
        server.create('continent', continent);
      });

      cities.forEach(city => {
        server.create('city', city);
      });
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get('/continents');
      this.get('/cities', (schema, request) => {
        const slug = request.queryParams.slug;
        if (slug) {
          return {
            continent: schema.continents.findBy({ slug }),
            cities: schema.cities.where({ continentSlug: slug }).models,
          };
        }

        return schema.cities.all();
      });

      this.namespace = '';
      this.passthrough();
    },
  });

  return server;
}
