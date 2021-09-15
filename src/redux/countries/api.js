const utc = new Date().toJSON().slice(0, 10);
const BASE_URL = `https://api.covid19tracking.narrativa.com/api/${utc}`;

const filterEuContries = obj => {
  const countries = ['Germany', 'United Kingdom',
    'France', 'Italy', 'Spain',
    'Romania', 'Netherlands', 'Belgium', 'Czechia',
    'Greece', 'Portugal', 'Sweden', 'Hungary', 'Holy See',
    'Belarus', 'Austria', 'Serbia', 'Switzerland',
    'Bulgaria', 'Denmark', 'Finland', 'Slovakia',
    'Norway', 'Ireland', 'Croatia', 'Moldova', 'Bosnia and Herzegovina',
    'Albania', 'Lithuania', 'North Macedonia', 'Slovenia',
    'Latvia', 'Estonia', 'Montenegro', 'Luxembourg',
    'Andorra', 'Monaco', 'Liechtenstein', 'San Marino', 'Russia', 'Ukraine',
    'Poland',
  ];

  const europe = countries.map(country => obj[country]);

  return europe;
};

const getContries = async () => {
  const response = await fetch(`${BASE_URL}`);
  try {
    const contries = await response.json();

    const { dates: { [utc]: { countries } } } = contries;

    return filterEuContries(countries);
  } catch (error) {
    return {};
  }
};

export default getContries;
