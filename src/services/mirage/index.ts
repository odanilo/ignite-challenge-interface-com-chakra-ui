import { createServer, Model, Registry } from 'miragejs';
import { ModelDefinition } from 'miragejs/-types';
import Schema from 'miragejs/orm/schema';
import { cities, City } from './cities';
import { continents, Continent } from './continents';

const ContinentModel: ModelDefinition<Continent> = Model.extend({});
const CityModel: ModelDefinition<City> = Model.extend({});

type AppRegistry = Registry<
  {
    continent: typeof ContinentModel;
    city: typeof CityModel;
  },
  {}
>;

type AppSchema = Schema<AppRegistry>;

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

    factories: {},

    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get('/continents');
      this.get('/cities', (schema: AppSchema, request) => {
        const slug = request.queryParams.slug;
        if (slug) {
          return {
            continent: schema.findBy('continent', { slug }),
            cities: schema.where('city', { continentSlug: slug }).models,
          };
        }

        return schema.all('city');
      });

      this.namespace = '';
      this.passthrough();
    },
  });

  return server;
}
