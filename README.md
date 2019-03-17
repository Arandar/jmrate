# jmrate migrator for MongoDB
An easy way to create a new database with collections in MongoDB  
Simple usage:
```javascript
const mongoMigrate = require('jmrate').mongoMigrate; // import jmrate into your file

// write the information, which you want to import
const articles = {
	name: 'articles',
	items: [
		{
			title: 'Article 1',
			description: 'Short description of the Article 1',
			body: 'Short information of the Article 1',
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
