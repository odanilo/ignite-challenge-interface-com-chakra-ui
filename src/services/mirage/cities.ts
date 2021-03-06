export type City = {
  name: string;
  country: {
    name: string;
    flag: string;
  };
  continentSlug: string;
  rank: number;
  photo: string;
};

export const cities: City[] = [
  {
    rank: 1,
    name: 'Hong Kong',
    country: {
      name: 'China',
      flag: '/countries-flags/cn.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1531279550271-23c2a77a765c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80',
  },
  {
    rank: 2,
    name: 'Bangkok',
    country: {
      name: 'Thailand',
      flag: '/countries-flags/th.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1508009603885-50cf7c579365?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  },
  {
    rank: 3,
    name: 'London',
    country: {
      name: 'United Kingdom',
      flag: '/countries-flags/gb.svg',
    },
    continentSlug: 'europa',
    photo:
      'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80',
  },
  {
    rank: 4,
    name: 'Macau',
    country: {
      name: 'China',
      flag: '/countries-flags/cn.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1552912809-6d4240af286b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1197&q=80',
  },
  {
    rank: 5,
    name: 'Singapore',
    country: {
      name: 'Singapore',
      flag: '/countries-flags/sg.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1496939376851-89342e90adcd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
  {
    rank: 6,
    name: 'Paris',
    country: {
      name: 'France',
      flag: '/countries-flags/fr.svg',
    },
    continentSlug: 'europa',
    photo:
      'https://images.unsplash.com/photo-1508050919630-b135583b29ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80',
  },
  {
    rank: 7,
    name: 'Dubai',
    country: {
      name: 'UAE',
      flag: '/countries-flags/ae.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
  {
    rank: 8,
    name: 'New York City',
    country: {
      name: 'US',
      flag: '/countries-flags/us.svg',
    },
    continentSlug: 'america-do-norte',
    photo:
      'https://images.unsplash.com/photo-1538970272646-f61fabb3a8a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=695&q=80',
  },
  {
    rank: 9,
    name: 'Kuala Lumpur',
    country: {
      name: 'Malaysia',
      flag: '/countries-flags/my.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1581792343403-f3201559d559?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=627&q=80',
  },
  {
    rank: 10,
    name: 'Istanbul',
    country: {
      name: 'Turkey',
      flag: '/countries-flags/tr.svg',
    },
    continentSlug: 'europa',
    photo:
      'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80',
  },
  {
    rank: 11,
    name: 'Delhi',
    country: {
      name: 'India',
      flag: '/countries-flags/in.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1581326693291-ce497c5cf84d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=697&q=80',
  },
  {
    rank: 12,
    name: 'Antalya',
    country: {
      name: 'Turkey',
      flag: '/countries-flags/tr.svg',
    },
    continentSlug: 'europa',
    photo:
      'https://images.unsplash.com/photo-1593238739364-18cfde30e522?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80',
  },
  {
    rank: 13,
    name: 'Shenzhen',
    country: {
      name: 'China',
      flag: '/countries-flags/cn.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1608381742187-ea4b48c56630?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=912&q=80',
  },
  {
    rank: 14,
    name: 'Mumbai',
    country: {
      name: 'India',
      flag: '/countries-flags/in.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1566552881560-0be862a7c445?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80',
  },
  {
    rank: 15,
    name: 'Phuket',
    country: {
      name: 'Thailand',
      flag: '/countries-flags/th.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1579683670728-96c9abc7a088?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80',
  },
  {
    rank: 16,
    name: 'Rome',
    country: {
      name: 'Italy',
      flag: '/countries-flags/it.svg',
    },
    continentSlug: 'europa',
    photo:
      'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
  {
    rank: 17,
    name: 'Tokyo',
    country: {
      name: 'Japan',
      flag: '/countries-flags/jp.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
  },
  {
    rank: 18,
    name: 'Pattaya',
    country: {
      name: 'Thailand',
      flag: '/countries-flags/th.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1586098311524-95c1fde90378?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
  {
    rank: 19,
    name: 'Taipei',
    country: {
      name: 'Taiwan',
      flag: '/countries-flags/tw.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1470004914212-05527e49370b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80',
  },
  {
    rank: 20,
    name: 'Mecca',
    country: {
      name: 'Saudi Arabia',
      flag: '/countries-flags/sa.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1592326871020-04f58c1a52f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80',
  },
  {
    rank: 21,
    name: 'Guangzhou',
    country: {
      name: 'China',
      flag: '/countries-flags/cn.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1559056245-f0e8ae7e0635?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
  },
  {
    rank: 22,
    name: 'Prague',
    country: {
      name: 'Czechia',
      flag: '/countries-flags/cz.svg',
    },
    continentSlug: 'europa',
    photo:
      'https://images.unsplash.com/photo-1541849546-216549ae216d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
  {
    rank: 23,
    name: 'Medina',
    country: {
      name: 'Saudi Arabia',
      flag: '/countries-flags/sa.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80',
  },
  {
    rank: 24,
    name: 'Seoul',
    country: {
      name: 'South Korea',
      flag: '/countries-flags/kr.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1617541086271-4d43983704bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80',
  },
  {
    rank: 25,
    name: 'Amsterdam',
    country: {
      name: 'Netherlands',
      flag: '/countries-flags/nl.svg',
    },
    continentSlug: 'europa',
    photo:
      'https://images.unsplash.com/photo-1468436385273-8abca6dfd8d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1105&q=80',
  },
  {
    rank: 26,
    name: 'Agra',
    country: {
      name: 'India',
      flag: '/countries-flags/in.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80',
  },
  {
    rank: 27,
    name: 'Miami',
    country: {
      name: 'US',
      flag: '/countries-flags/us.svg',
    },
    continentSlug: 'america-do-norte',
    photo:
      'https://images.unsplash.com/photo-1503891450247-ee5f8ec46dc3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
  },
  {
    rank: 28,
    name: 'Osaka',
    country: {
      name: 'Japan',
      flag: '/countries-flags/jp.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1589452271712-64b8a66c7b71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80',
  },
  {
    rank: 29,
    name: 'Los Angeles',
    country: {
      name: 'US',
      flag: '/countries-flags/us.svg',
    },
    continentSlug: 'america-do-norte',
    photo:
      'https://images.unsplash.com/photo-1460881680858-30d872d5b530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80',
  },
  {
    rank: 30,
    name: 'Shanghai',
    country: {
      name: 'China',
      flag: '/countries-flags/cn.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1567133803606-3601463f3981?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
  {
    rank: 31,
    name: 'Ho Chi Minh City',
    country: {
      name: 'Vietnam',
      flag: '/countries-flags/vn.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1602646994030-464f98de5e5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80',
  },
  {
    rank: 32,
    name: 'Denpasar',
    country: {
      name: 'Indonesia',
      flag: '/countries-flags/id.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1592364395653-83e648b20cc2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
  {
    rank: 33,
    name: 'Barcelona',
    country: {
      name: 'Spain',
      flag: '/countries-flags/es.svg',
    },
    continentSlug: 'europa',
    photo:
      'https://images.unsplash.com/photo-1528744598421-b7b93e12df15?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80',
  },
  {
    rank: 34,
    name: 'Las Vegas',
    country: {
      name: 'US',
      flag: '/countries-flags/us.svg',
    },
    continentSlug: 'america-do-norte',
    photo:
      'https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1174&q=80',
  },
  {
    rank: 35,
    name: 'Milan',
    country: {
      name: 'Italy',
      flag: '/countries-flags/it.svg',
    },
    continentSlug: 'europa',
    photo:
      'https://images.unsplash.com/photo-1512236077335-f1cda9239c11?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
  {
    rank: 36,
    name: 'Chennai',
    country: {
      name: 'India',
      flag: '/countries-flags/in.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
  {
    rank: 37,
    name: 'Vienna',
    country: {
      name: 'Austria',
      flag: '/countries-flags/at.svg',
    },
    continentSlug: 'oceania',
    photo:
      'https://images.unsplash.com/photo-1573167443175-867d91708f97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=681&q=80',
  },
  {
    rank: 38,
    name: 'Johor Bahru',
    country: {
      name: 'Malaysia',
      flag: '/countries-flags/my.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1518439179742-d8c527d2b607?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80',
  },
  {
    rank: 39,
    name: 'Jaipur',
    country: {
      name: 'India',
      flag: '/countries-flags/in.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1477586957327-847a0f3f4fe3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
  {
    rank: 40,
    name: 'Cancun',
    country: {
      name: 'Mexico',
      flag: '/countries-flags/mx.svg',
    },
    continentSlug: 'america-do-norte',
    photo:
      'https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1167&q=80',
  },
  {
    rank: 41,
    name: 'Berlin',
    country: {
      name: 'Germany',
      flag: '/countries-flags/de.svg',
    },
    continentSlug: 'europa',
    photo:
      'https://images.unsplash.com/photo-1484689228555-fd6bc1b28b7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80',
  },
  {
    rank: 42,
    name: 'Cairo',
    country: {
      name: 'Egypt',
      flag: '/countries-flags/eg.svg',
    },
    continentSlug: 'africa',
    photo:
      'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
  {
    rank: 43,
    name: 'Athens',
    country: {
      name: 'Greece',
      flag: '/countries-flags/gr.svg',
    },
    continentSlug: 'europa',
    photo:
      'https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
  {
    rank: 44,
    name: 'Orlando',
    country: {
      name: 'US',
      flag: '/countries-flags/us.svg',
    },
    continentSlug: 'america-do-norte',
    photo:
      'https://images.unsplash.com/photo-1597466599360-3b9775841aec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80',
  },
  {
    rank: 45,
    name: 'Moscow',
    country: {
      name: 'Russia',
      flag: '/countries-flags/ru.svg',
    },
    continentSlug: 'europa',
    photo:
      'https://images.unsplash.com/photo-1513326738677-b964603b136d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80',
  },
  {
    rank: 46,
    name: 'Venice',
    country: {
      name: 'Italy',
      flag: '/countries-flags/it.svg',
    },
    continentSlug: 'europa',
    photo:
      'https://images.unsplash.com/photo-1519112232436-9923c6ba3d26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
  {
    rank: 47,
    name: 'Madrid',
    country: {
      name: 'Spain',
      flag: '/countries-flags/es.svg',
    },
    continentSlug: 'europa',
    photo:
      'https://images.unsplash.com/photo-1570698473651-b2de99bae12f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80',
  },
  {
    rank: 48,
    name: 'Ha Long',
    country: {
      name: 'Vietnam',
      flag: '/countries-flags/vn.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1605036687969-9c2878c7395b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80',
  },
  {
    rank: 49,
    name: 'Riyadh',
    country: {
      name: 'Saudi Arabia',
      flag: '/countries-flags/sa.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80',
  },
  {
    rank: 50,
    name: 'Dublin',
    country: {
      name: 'Ireland',
      flag: '/countries-flags/ie.svg',
    },
    continentSlug: 'europa',
    photo:
      'https://images.unsplash.com/photo-1518005068251-37900150dfca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1173&q=80',
  },
  {
    rank: 51,
    name: 'Florence',
    country: {
      name: 'Italy',
      flag: '/countries-flags/it.svg',
    },
    continentSlug: 'europa',
    photo:
      'https://images.unsplash.com/photo-1541370976299-4d24ebbc9077?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1333&q=80',
  },
  {
    rank: 52,
    name: 'Ha Noi',
    country: {
      name: 'Vietnam',
      flag: '/countries-flags/vn.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1553851919-596510268b99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80',
  },
  {
    rank: 53,
    name: 'Toronto',
    country: {
      name: 'Canada',
      flag: '/countries-flags/ca.svg',
    },
    continentSlug: 'america-do-norte',
    photo:
      'https://images.unsplash.com/photo-1542704792-e30dac463c90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
  {
    rank: 54,
    name: 'Johannesburg',
    country: {
      name: 'South Africa',
      flag: '/countries-flags/za.svg',
    },
    continentSlug: 'africa',
    photo:
      'https://images.unsplash.com/photo-1577948000111-9c970dfe3743?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80',
  },
  {
    rank: 55,
    name: 'Sydney',
    country: {
      name: 'Australia',
      flag: '/countries-flags/au.svg',
    },
    continentSlug: 'oceania',
    photo:
      'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
  {
    rank: 56,
    name: 'Munich',
    country: {
      name: 'Germany',
      flag: '/countries-flags/de.svg',
    },
    continentSlug: 'europa',
    photo:
      'https://images.unsplash.com/photo-1599982890963-3aabd60064d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80',
  },
  {
    rank: 57,
    name: 'Jakarta',
    country: {
      name: 'Indonesia',
      flag: '/countries-flags/id.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1538582709238-0a503bd5ae04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
  {
    rank: 58,
    name: 'Beijing',
    country: {
      name: 'China',
      flag: '/countries-flags/cn.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
  {
    rank: 59,
    name: 'St. Petersburg',
    country: {
      name: 'Russia',
      flag: '/countries-flags/ru.svg',
    },
    continentSlug: 'europa',
    photo:
      'https://images.unsplash.com/photo-1548834925-e48f8a27ae6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80',
  },
  {
    rank: 60,
    name: 'Brussels',
    country: {
      name: 'Belgium',
      flag: '/countries-flags/be.svg',
    },
    continentSlug: 'europa',
    photo:
      'https://images.unsplash.com/photo-1548092304-e0205cb0031b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80',
  },
  {
    rank: 61,
    name: 'Jerusalem',
    country: {
      name: 'Israel',
      flag: '/countries-flags/il.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1552423314-cf29ab68ad73?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
  {
    rank: 62,
    name: 'Budapest',
    country: {
      name: 'Hungary',
      flag: '/countries-flags/hu.svg',
    },
    continentSlug: 'europa',
    photo:
      'https://images.unsplash.com/photo-1565426873118-a17ed65d74b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80',
  },
  {
    rank: 63,
    name: 'Lisbon',
    country: {
      name: 'Portugal',
      flag: '/countries-flags/pt.svg',
    },
    continentSlug: 'europa',
    photo:
      'https://images.unsplash.com/photo-1562250883-a18ef907fcab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
  },
  {
    rank: 64,
    name: 'Dammam',
    country: {
      name: 'Saudi Arabia',
      flag: '/countries-flags/sa.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1588716343972-84e71c55c8fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80',
  },
  {
    rank: 65,
    name: 'Penang Island',
    country: {
      name: 'Malaysia',
      flag: '/countries-flags/my.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1592878050892-004ab0cd0737?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
  {
    rank: 66,
    name: 'Heraklion',
    country: {
      name: 'Greece',
      flag: '/countries-flags/gr.svg',
    },
    continentSlug: 'europa',
    photo:
      'https://images.unsplash.com/photo-1586119732042-ff23ccf4bd23?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1333&q=80',
  },
  {
    rank: 67,
    name: 'Kyoto',
    country: {
      name: 'Japan',
      flag: '/countries-flags/jp.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    rank: 68,
    name: 'Zhuhai',
    country: {
      name: 'China',
      flag: '/countries-flags/cn.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1568001731724-c868c383b0c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80',
  },
  {
    rank: 69,
    name: 'Vancouver',
    country: {
      name: 'Canada',
      flag: '/countries-flags/ca.svg',
    },
    continentSlug: 'america-do-norte',
    photo:
      'https://images.unsplash.com/photo-1559511260-66a654ae982a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1218&q=80',
  },
  {
    rank: 70,
    name: 'Chiang Mai',
    country: {
      name: 'Thailand',
      flag: '/countries-flags/th.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1596622678000-e55d2266ed7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1331&q=80',
  },
  {
    rank: 71,
    name: 'Copenhagen',
    country: {
      name: 'Denmark',
      flag: '/countries-flags/dk.svg',
    },
    continentSlug: 'europa',
    photo:
      'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
  {
    rank: 72,
    name: 'San Francisco',
    country: {
      name: 'US',
      flag: '/countries-flags/us.svg',
    },
    continentSlug: 'america-do-norte',
    photo:
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80',
  },
  {
    rank: 73,
    name: 'Melbourne',
    country: {
      name: 'Australia',
      flag: '/countries-flags/au.svg',
    },
    continentSlug: 'oceania',
    photo:
      'https://images.unsplash.com/photo-1514395462725-fb4566210144?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80',
  },
  {
    rank: 74,
    name: 'Krakow',
    country: {
      name: 'Poland',
      flag: '/countries-flags/pl.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1606992894456-799462dacd65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
  {
    rank: 75,
    name: 'Marrakech',
    country: {
      name: 'Morocco',
      flag: '/countries-flags/ma.svg',
    },
    continentSlug: 'africa',
    photo:
      'https://images.unsplash.com/photo-1561642769-1bca263542e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80',
  },
  {
    rank: 76,
    name: 'Kolkatta',
    country: {
      name: 'India',
      flag: '/countries-flags/in.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1561891615-a79506c75afe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1167&q=80',
  },
  {
    rank: 77,
    name: 'Cebu',
    country: {
      name: 'Philippines',
      flag: '/countries-flags/ph.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1505449307143-eb99f132e28f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80',
  },
  {
    rank: 78,
    name: 'Auckland',
    country: {
      name: 'New Zealand',
      flag: '/countries-flags/nz.svg',
    },
    continentSlug: 'oceania',
    photo:
      'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80',
  },
  {
    rank: 79,
    name: 'Tel Aviv',
    country: {
      name: 'Israel',
      flag: '/countries-flags/il.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1500990702037-7620ccb6a60a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
  {
    rank: 80,
    name: 'Guilin',
    country: {
      name: 'China',
      flag: '/countries-flags/cn.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1537531383496-f4749b8032cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80',
  },
  {
    rank: 81,
    name: 'Honolulu',
    country: {
      name: 'US',
      flag: '/countries-flags/us.svg',
    },
    continentSlug: 'america-do-norte',
    photo:
      'https://images.unsplash.com/photo-1573992554018-83e7853bd45f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80',
  },
  {
    rank: 82,
    name: 'Hurgada',
    country: {
      name: 'Egypt',
      flag: '/countries-flags/eg.svg',
    },
    continentSlug: 'africa',
    photo:
      'https://images.unsplash.com/photo-1539768942893-daf53e448371?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80',
  },
  {
    rank: 83,
    name: 'Warsaw',
    country: {
      name: 'Poland',
      flag: '/countries-flags/pl.svg',
    },
    continentSlug: 'europa',
    photo:
      'https://images.unsplash.com/photo-1519197924294-4ba991a11128?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80',
  },
  {
    rank: 84,
    name: 'Mugla',
    country: {
      name: 'Turkey',
      flag: '/countries-flags/tr.svg',
    },
    continentSlug: 'europa',
    photo:
      'https://images.unsplash.com/photo-1557156028-90bf9c35e6fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80',
  },
  {
    rank: 85,
    name: 'Buenos Aires City',
    country: {
      name: 'Argentina',
      flag: '/countries-flags/ar.svg',
    },
    continentSlug: 'america-do-sul',
    photo:
      'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80',
  },
  {
    rank: 86,
    name: 'China',
    country: {
      name: 'Japan',
      flag: '/countries-flags/jp.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1517309230475-6736d926b979?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    rank: 87,
    name: 'Frankfurt',
    country: {
      name: 'Germany',
      flag: '/countries-flags/de.svg',
    },
    continentSlug: 'europa',
    photo:
      'https://images.unsplash.com/photo-1577185816322-21f2a92b1342?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
  {
    rank: 88,
    name: 'Stockholm',
    country: {
      name: 'Sweden',
      flag: '/countries-flags/se.svg',
    },
    continentSlug: 'europa',
    photo:
      'https://images.unsplash.com/photo-1588653818221-2651ec1a6423?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80',
  },
  {
    rank: 89,
    name: 'Lima',
    country: {
      name: 'Peru',
      flag: '/countries-flags/pe.svg',
    },
    continentSlug: 'america-do-sul',
    photo:
      'https://images.unsplash.com/photo-1577587230708-187fdbef4d91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80',
  },
  {
    rank: 90,
    name: 'Da Nang',
    country: {
      name: 'Vietnam',
      flag: '/countries-flags/vn.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1603852452378-a4e8d84324a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
  },
  {
    rank: 91,
    name: 'Batam',
    country: {
      name: 'Indonesia',
      flag: '/countries-flags/id.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1579429768169-95cf18a542e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
  },
  {
    rank: 92,
    name: 'Nice',
    country: {
      name: 'France',
      flag: '/countries-flags/fr.svg',
    },
    continentSlug: 'europa',
    photo:
      'https://images.unsplash.com/photo-1562450254-3c4225aa1bcd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80',
  },
  {
    rank: 93,
    name: 'Fukuoka',
    country: {
      name: 'Japan',
      flag: '/countries-flags/jp.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1575862924838-c166e3814df7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
  {
    rank: 94,
    name: 'Abu Dhabi',
    country: {
      name: 'UAE',
      flag: '/countries-flags/ae.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1602490487033-47e43479d51b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=873&q=80',
  },
  {
    rank: 95,
    name: 'Jeju',
    country: {
      name: 'South Korea',
      flag: '/countries-flags/kr.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1595737361672-ae84c6ca2298?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
  {
    rank: 96,
    name: 'Porto',
    country: {
      name: 'Portugal',
      flag: '/countries-flags/pt.svg',
    },
    continentSlug: 'europa',
    photo:
      'https://images.unsplash.com/photo-1577958194277-7b3bc213b03c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1330&q=80',
  },
  {
    rank: 97,
    name: 'Rhodes',
    country: {
      name: 'Greece',
      flag: '/countries-flags/gr.svg',
    },
    continentSlug: 'europa',
    photo:
      'https://images.unsplash.com/photo-1572375901777-1b257481cbb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=743&q=80',
  },
  {
    rank: 98,
    name: 'Rio de Janeiro',
    country: {
      name: 'Brazil',
      flag: '/countries-flags/br.svg',
    },
    continentSlug: 'america-do-sul',
    photo:
      'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
  {
    rank: 99,
    name: 'Krabi',
    country: {
      name: 'Thailand',
      flag: '/countries-flags/th.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1139&q=80',
  },
  {
    rank: 100,
    name: 'Bangalore',
    country: {
      name: 'India',
      flag: '/countries-flags/in.svg',
    },
    continentSlug: 'asia',
    photo:
      'https://images.unsplash.com/photo-1580060092295-dbe639fffda3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=698&q=80',
  },
];
