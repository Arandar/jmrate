const headers = {
    name: 'headers',
    required: ['title', 'description'],
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
            title: 'Header 1',
            description: 'Short description of the Header 1',
            body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id nisl diam.
            Praesent lobortis, tortor quis euismod scelerisque, mi turpis maximus velit, sed ultricies
            lorem leo accumsan felis. Nunc lacinia eu dolor eu hendrerit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Mauris ultricies massa ex, id molestie nulla pulvinar eu.
            Aenean consectetur vitae felis et semper. Morbi justo ante, mollis non sodales nec, maximus
            et enim. Proin sit amet ultricies quam. Integer nec bibendum est. Phasellus interdum sem varius
            lectus tempus porta. Aenean eget quam at quam venenatis dapibus eget at sapien. Phasellus
            placerat ullamcorper erat ac euismod. Nulla sollicitudin turpis justo, et suscipit tellus
            ornare sed. Cras tortor dui, porttitor a elit eget, consectetur hendrerit sapien. Duis et
            malesuada metus, tristique tempor eros. Sed ut arcu nisl.`,
            comments: [],
        },
        {
            title: 'Header 2',
            description: 'Short description of the Header 2',
            body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id nisl diam.
            Praesent lobortis, tortor quis euismod scelerisque, mi turpis maximus velit, sed ultricies
            lorem leo accumsan felis. Nunc lacinia eu dolor eu hendrerit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Mauris ultricies massa ex, id molestie nulla pulvinar eu.
            Aenean consectetur vitae felis et semper. Morbi justo ante, mollis non sodales nec, maximus
            et enim. Proin sit amet ultricies quam. Integer nec bibendum est. Phasellus interdum sem varius
            lectus tempus porta. Aenean eget quam at quam venenatis dapibus eget at sapien. Phasellus
            placerat ullamcorper erat ac euismod. Nulla sollicitudin turpis justo, et suscipit tellus
            ornare sed. Cras tortor dui, porttitor a elit eget, consectetur hendrerit sapien. Duis et
            malesuada metus, tristique tempor eros. Sed ut arcu nisl.`,
            comments: [],
        },
        {
            title: 'Header 3',
            description: 'Short description of the Header 3',
            body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id nisl diam.
            Praesent lobortis, tortor quis euismod scelerisque, mi turpis maximus velit, sed ultricies
            lorem leo accumsan felis. Nunc lacinia eu dolor eu hendrerit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Mauris ultricies massa ex, id molestie nulla pulvinar eu.
            Aenean consectetur vitae felis et semper. Morbi justo ante, mollis non sodales nec, maximus
            et enim. Proin sit amet ultricies quam. Integer nec bibendum est. Phasellus interdum sem varius
            lectus tempus porta. Aenean eget quam at quam venenatis dapibus eget at sapien. Phasellus
            placerat ullamcorper erat ac euismod. Nulla sollicitudin turpis justo, et suscipit tellus
            ornare sed. Cras tortor dui, porttitor a elit eget, consectetur hendrerit sapien. Duis et
            malesuada metus, tristique tempor eros. Sed ut arcu nisl.`,
            comments: [],
        },
        {
            title: 'Header 4',
            description: 'Short description of the Header 4',
            body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id nisl diam.
            Praesent lobortis, tortor quis euismod scelerisque, mi turpis maximus velit, sed ultricies
            lorem leo accumsan felis. Nunc lacinia eu dolor eu hendrerit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Mauris ultricies massa ex, id molestie nulla pulvinar eu.
            Aenean consectetur vitae felis et semper. Morbi justo ante, mollis non sodales nec, maximus
            et enim. Proin sit amet ultricies quam. Integer nec bibendum est. Phasellus interdum sem varius
            lectus tempus porta. Aenean eget quam at quam venenatis dapibus eget at sapien. Phasellus
            placerat ullamcorper erat ac euismod. Nulla sollicitudin turpis justo, et suscipit tellus
            ornare sed. Cras tortor dui, porttitor a elit eget, consectetur hendrerit sapien. Duis et
            malesuada metus, tristique tempor eros. Sed ut arcu nisl.`,
            comments: [],
        },
        {
            title: 'Header 5',
            description: 'Short description of the Header 5',
            body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id nisl diam.
            Praesent lobortis, tortor quis euismod scelerisque, mi turpis maximus velit, sed ultricies
            lorem leo accumsan felis. Nunc lacinia eu dolor eu hendrerit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Mauris ultricies massa ex, id molestie nulla pulvinar eu.
            Aenean consectetur vitae felis et semper. Morbi justo ante, mollis non sodales nec, maximus
            et enim. Proin sit amet ultricies quam. Integer nec bibendum est. Phasellus interdum sem varius
            lectus tempus porta. Aenean eget quam at quam venenatis dapibus eget at sapien. Phasellus
            placerat ullamcorper erat ac euismod. Nulla sollicitudin turpis justo, et suscipit tellus
            ornare sed. Cras tortor dui, porttitor a elit eget, consectetur hendrerit sapien. Duis et
            malesuada metus, tristique tempor eros. Sed ut arcu nisl.`,
            comments: [],
        },
        {
            title: 'Header 6',
            description: 'Short description of the Header 6',
            body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id nisl diam.
            Praesent lobortis, tortor quis euismod scelerisque, mi turpis maximus velit, sed ultricies
            lorem leo accumsan felis. Nunc lacinia eu dolor eu hendrerit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Mauris ultricies massa ex, id molestie nulla pulvinar eu.
            Aenean consectetur vitae felis et semper. Morbi justo ante, mollis non sodales nec, maximus
            et enim. Proin sit amet ultricies quam. Integer nec bibendum est. Phasellus interdum sem varius
            lectus tempus porta. Aenean eget quam at quam venenatis dapibus eget at sapien. Phasellus
            placerat ullamcorper erat ac euismod. Nulla sollicitudin turpis justo, et suscipit tellus
            ornare sed. Cras tortor dui, porttitor a elit eget, consectetur hendrerit sapien. Duis et
            malesuada metus, tristique tempor eros. Sed ut arcu nisl.`,
            comments: [],
        },
        {
            title: 'Header 7',
            description: 'Short description of the Header 7',
            body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id nisl diam.
            Praesent lobortis, tortor quis euismod scelerisque, mi turpis maximus velit, sed ultricies
            lorem leo accumsan felis. Nunc lacinia eu dolor eu hendrerit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Mauris ultricies massa ex, id molestie nulla pulvinar eu.
            Aenean consectetur vitae felis et semper. Morbi justo ante, mollis non sodales nec, maximus
            et enim. Proin sit amet ultricies quam. Integer nec bibendum est. Phasellus interdum sem varius
            lectus tempus porta. Aenean eget quam at quam venenatis dapibus eget at sapien. Phasellus
            placerat ullamcorper erat ac euismod. Nulla sollicitudin turpis justo, et suscipit tellus
            ornare sed. Cras tortor dui, porttitor a elit eget, consectetur hendrerit sapien. Duis et
            malesuada metus, tristique tempor eros. Sed ut arcu nisl.`,
            comments: [],
        },
        {
            title: 'Header 8',
            description: 'Short description of the Header 8',
            body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id nisl diam.
            Praesent lobortis, tortor quis euismod scelerisque, mi turpis maximus velit, sed ultricies
            lorem leo accumsan felis. Nunc lacinia eu dolor eu hendrerit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Mauris ultricies massa ex, id molestie nulla pulvinar eu.
            Aenean consectetur vitae felis et semper. Morbi justo ante, mollis non sodales nec, maximus
            et enim. Proin sit amet ultricies quam. Integer nec bibendum est. Phasellus interdum sem varius
            lectus tempus porta. Aenean eget quam at quam venenatis dapibus eget at sapien. Phasellus
            placerat ullamcorper erat ac euismod. Nulla sollicitudin turpis justo, et suscipit tellus
            ornare sed. Cras tortor dui, porttitor a elit eget, consectetur hendrerit sapien. Duis et
            malesuada metus, tristique tempor eros. Sed ut arcu nisl.`,
            comments: [],
        },
        {
            title: 'Header 9',
            description: 'Short description of the Header 9',
            body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id nisl diam.
            Praesent lobortis, tortor quis euismod scelerisque, mi turpis maximus velit, sed ultricies
            lorem leo accumsan felis. Nunc lacinia eu dolor eu hendrerit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Mauris ultricies massa ex, id molestie nulla pulvinar eu.
            Aenean consectetur vitae felis et semper. Morbi justo ante, mollis non sodales nec, maximus
            et enim. Proin sit amet ultricies quam. Integer nec bibendum est. Phasellus interdum sem varius
            lectus tempus porta. Aenean eget quam at quam venenatis dapibus eget at sapien. Phasellus
            placerat ullamcorper erat ac euismod. Nulla sollicitudin turpis justo, et suscipit tellus
            ornare sed. Cras tortor dui, porttitor a elit eget, consectetur hendrerit sapien. Duis et
            malesuada metus, tristique tempor eros. Sed ut arcu nisl.`,
            comments: [],
        },
        {
            title: 'Header 10',
            description: 'Short description of the Header 10',
            body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id nisl diam.
            Praesent lobortis, tortor quis euismod scelerisque, mi turpis maximus velit, sed ultricies
            lorem leo accumsan felis. Nunc lacinia eu dolor eu hendrerit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Mauris ultricies massa ex, id molestie nulla pulvinar eu.
            Aenean consectetur vitae felis et semper. Morbi justo ante, mollis non sodales nec, maximus
            et enim. Proin sit amet ultricies quam. Integer nec bibendum est. Phasellus interdum sem varius
            lectus tempus porta. Aenean eget quam at quam venenatis dapibus eget at sapien. Phasellus
            placerat ullamcorper erat ac euismod. Nulla sollicitudin turpis justo, et suscipit tellus
            ornare sed. Cras tortor dui, porttitor a elit eget, consectetur hendrerit sapien. Duis et
            malesuada metus, tristique tempor eros. Sed ut arcu nisl.`,
            comments: [],
        },
    ],
}


module.exports.headers = headers;
