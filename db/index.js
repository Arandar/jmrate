const articles = require('./_articles').articles;
const headers = require('./_headers').headers;
const mongoMigrate = require('../index').mongoMigrate;
const config = require('../config/config.json').mongo;

const COLLECTIONS = [
    articles,
    headers,
]

mongoMigrate(config.url, config.dbName, COLLECTIONS);
