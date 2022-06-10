const pool = require('../utils/pool');

module.exports = class City {
  id;
  city_name;
  country;
  expensive;

  constructor(row) {
    this.id = row.id;
    this.city_name = row.city_name;
    this.country = row.city;
    this.expensive = row.expensive;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM cities;');
    return rows.map((row) => new City(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM cities WHERE id=$1;', [
      id,
    ]);
    if (!rows[0]) return null;
    return new City(rows[0]);
  }
};
