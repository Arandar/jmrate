# jmrate migrator for MongoDB
An easy way to create a new database with collections in MongoDB  
# Installation
Installation is done using the [npm install](https://docs.npmjs.com/downloading-and-installing-packages-locally):  
```javascript
$ npm i jmrate --save-dev
``` 
# Simple usage:
```javascript
const mongoMigrate = require('jmrate').mongoMigrate; // import jmrate into your file

// write the information, which you want to import
const articles = {
	name: 'articles',
	// you can add validation
	required: ['title', 'description'], // or string, if it's only one required property
    properties: {
        title: {
            bsonType: 'string',
            description: 'must be a string and is required'
        },
        description: {
            bsonType: 'string',
            description: 'must be a string and is not required'
        },
        comments: {
            bsonType: 'array',
            description: 'must be an array'
        },
    },
	items: [
		{
			title: 'Article 1',
			description: 'Short description of the Article 1',
			body: 'Short information of the Article 1',
			comments: [],
		},
		{
			title: 'Article 2',
			description: 'Short description of the Article 2',
			body: 'Short information of the Article 2',
		},
	],
}


/* write the parameters 
1. mongo url;
2. db name;
3. your collections;
4. optional parameter - false if you don't want to use the notificator;
*/
mongoMigrate('mongodb://localhost:27017', 'newsDb', articles, false);
```
Look more [here](https://github.com/Arandar/jmrate/tree/master/db)
