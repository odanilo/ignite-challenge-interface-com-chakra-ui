import { createServer, Model } from 'miragejs';

type Continent = {
  description: string;
  id: string;
  name: string;
  slug: string;
};

const continents: Continent[] = [
  {
    id: '1',
    description: 'O continente mais antigo',
    name: 'África',
    slug: 'africa',
  },
  {
    id: '2',
    description: 'O continente mais antigo',
    name: 'América do Norte',
    slug: 'america-do-norte',
  },
  {
    id: '3',
    description: 'O continente mais antigo',
    name: 'América do Sul',
    slug: 'america-do-sul',
  },
  {
    id: '4',
    description: 'O continente mais antigo',
    name: 'Ásia',
    slug: 'asia',
  },
  {
    id: '5',
    description: 'O continente mais antigo',
    name: 'Europa',
    slug: 'europa',
  },
  {
    id: '6',
    description: 'O continente mais antigo',
    name: 'Oceania',
    slug: 'oceania',
  },
];

export function makeServer() {
  const server = createServer({
    models: {
      continent: Model.extend<Partial<Continent>>({}),
    },

    seeds(server) {
      continents.forEach(continent => {
        server.create('continent', continent);
      });
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get('/continents', schema => {
        return schema.continents.all();
      });

      this.namespace = '';
      this.passthrough();
    },
  });

  return server;
}
