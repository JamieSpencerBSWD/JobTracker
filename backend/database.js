require('dotenv').config()
const pgpromise = require('pg-promise')(/* options */)
const database = pgpromise(`postgres://${process.env.POSTGRES_USERNAME}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DATABASE}`)

module.exports = database;