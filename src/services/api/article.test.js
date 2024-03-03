/**
 * This test is NOT running
 * Getting error for "const API_KEY = import.meta.env.VITE_REACT_APP_ARTICLES_API_KEY;"  from
 * "service/api/article.js" on calling getPopularArticles().
 */
import { config } from 'dotenv';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import getPopularArticles from './article';

config({ path: './.env.test' });

const mock = new MockAdapter(axios);

const BASE_URL = 'https://api.nytimes.com';
const API_KEY = process.env.VITE_REACT_APP_ARTICLES_API_KEY;

it('fetches popular articles for a given time period', async () => {
  const timePeriod = 1;
  const responseData = {
    uri: 'nyt://article/3fe9cfa1-ed73-5cab-b2f9-3b32a3b6bf77',
    url: 'https://www.nytimes.com/2024/02/29/nyregion/disney-world-allergy-death-lawsuit.html',
    id: 100000009334192,
    asset_id: 100000009334192,
    source: 'New York Times',
    published_date: '2024-02-29',
    updated: '2024-03-01 00:07:32',
    section: 'New York',
    subsection: '',
    nytdsection: 'new york',
    adx_keywords:
			'Allergies;Restaurants;Peanuts;Suits and Litigation (Civil);Amusement and Theme Parks;Deaths (Fatalities);Disney, Walt, World (Lake Buena Vista, Fla);Walt Disney Company;Carle Place (NY)',
    column: null,
    byline: 'By Ed Shanahan',
    type: 'Article',
    title:
			'Disney Sued Over Doctor’s Allergy Death After Meal at Resort Restaurant',
    abstract:
			'Kanokporn Tangsuan’s husband said his wife had been served dishes containing allergens at a Disney World restaurant despite being assured she would not be.',
    des_facet: [
      'Allergies',
      'Restaurants',
      'Peanuts',
      'Suits and Litigation (Civil)',
      'Amusement and Theme Parks',
      'Deaths (Fatalities)',
    ],
    org_facet: [
      'Disney, Walt, World (Lake Buena Vista, Fla)',
      'Walt Disney Company',
    ],
    per_facet: [],
    geo_facet: ['Carle Place (NY)'],
    media: [
      {
        type: 'image',
        subtype: 'photo',
        caption: '',
        copyright: 'via Searcy Denney Scarola Barnhart and Shipley',
        approved_for_syndication: 0,
        'media-metadata': [
          {
            url: 'https://static01.nyt.com/images/2024/02/28/nyregion/28disney-allergy-death-promo/28disney-allergy-death-promo-thumbStandard.jpg',
            format: 'Standard Thumbnail',
            height: 75,
            width: 75,
          },
          {
            url: 'https://static01.nyt.com/images/2024/02/28/nyregion/28disney-allergy-death-promo/28disney-allergy-death-promo-mediumThreeByTwo210.jpg',
            format: 'mediumThreeByTwo210',
            height: 140,
            width: 210,
          },
          {
            url: 'https://static01.nyt.com/images/2024/02/28/nyregion/28disney-allergy-death-promo/28disney-allergy-death-promo-mediumThreeByTwo440.jpg',
            format: 'mediumThreeByTwo440',
            height: 293,
            width: 440,
          },
        ],
      },
    ],
    eta_id: 0,
  };

  mock
    .onGet(
      `${BASE_URL}/svc/mostpopular/v2/viewed/${timePeriod}.json?api-key=${API_KEY}`,
    )
    .reply(200, responseData);

  const articlesResponse = await getPopularArticles(timePeriod);
  expect(articlesResponse).toEqual(responseData);
});
