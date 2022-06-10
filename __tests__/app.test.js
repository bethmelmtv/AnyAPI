const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { cities } = require('../data/cities');

describe('city routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('cities should return a list of cities', async () => {
    const res = await request(app).get('/cities');
    expect(res.body).toEqual(cities);
  });

  xit('/cities/:id should return city detail', async () => {
    const res = await request(app).get('/cities/1');
    expect(res.body).toEqual({
      id: '1',
      city_name: 'Portland',
      country: 'USA',
      expensive: true,
    });
  });

  afterAll(() => {
    pool.end();
  });
});
