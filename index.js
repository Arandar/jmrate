"use strict";
const notifier = require('node-notifier');

const mongoMigrate = (url, dbName, collections, notifications) => {
    try {
        if (collections && !collections.length) collections = new Array(collections);
        const MongoClient = require('mongodb').MongoClient;
        const mongoClient = new MongoClient(url, { useNewUrlParser: true });

        mongoClient.connect(async (err, client) => {
            console.log('\x1b[33m%s\x1b[0m', 'Migration started...');
            try {
                const results = new Array();
                const db = client.db(dbName);
                await db.dropDatabase();
                await new Promise((res, rej) => {
                    collections.map(collection => {
                        try {
                            db.collection(collection.name).insertMany(collection.items, (err, result) => {
                                console.log('\x1b[34m%s\x1b[0m', `  -- ${collection.name} is inserted...`);
                                results.push(result);
                                results.length === collections.length && res();
                            });
                        } catch (err) {
                            console.error('\x1b[31m%s\x1b[0m', `Collection "${collection.name}" Error! ${err.message.charAt(0).toUpperCase() + err.message.slice(1)}.`);
                            notifications !== false && notifier.notify({
                                'title': err.name,
                                'message': `Collection "${collection.name}" Error! ${err.message.charAt(0).toUpperCase() + err.message.slice(1)}.`,
                            });
                            client.close();
                        }
                    });
                });
                console.log('\x1b[32m%s\x1b[0m', 'Migration finished!');
                notifications !== false && notifier.notify({
                    'title': 'MongoSuccess',
                    'message': 'Migration finished! All collections were inserted.',
                });
                client.close();
            } catch (err) {
                console.error('\x1b[31m%s\x1b[0m', `Migration Failed! ${err.message.charAt(0).toUpperCase() + err.message.slice(1)}.`);
                notifications !== false && notifier.notify({
                    'title': err.name,
                    'message': `Migration Failed! ${err.message.charAt(0).toUpperCase() + err.message.slice(1)}.`,
                });
                client.close();
            }
        });
    } catch (err) {
        console.error('\x1b[31m%s\x1b[0m', `Connection Failed! ${err.message.charAt(0).toUpperCase() + err.message.slice(1)}.`);
        notifications !== false && notifier.notify({
            'title': err.name,
            'message': `Connection Failed! ${err.message.charAt(0).toUpperCase() + err.message.slice(1)}.`,
        });
    }
}

module.exports.mongoMigrate = mongoMigrate;