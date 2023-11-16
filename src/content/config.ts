// src/content/config.js
import {z} from 'zod';

export const collections = {
    // Define a collection for courses
    'courses': {
        // Define the schema for the course frontmatter
        schema: z.object({
            title: z.string(), // The title of the course
            description: z.string(), // A short description of the course
            author: z.string(), // The name of the course author
            tags: z.array(z.string()), // An array of tags for the course
            nav: z.array( // The navigation structure for the course
                z.object({
                    title: z.string(), // The title of the page
                    url: z.string(), // The URL of the page
                    children: z.array( // The subpages of the page
                        z.array(z.object({
                            title: z.string(), // The title of the subpage
                            url: z.string(), // The URL of the subpage
                        }))
                    ).optional(), // The children property is optional
                })
            ),
        }),
        options: {
            // The directory where the course files are located
            src: 'courses',
            // The URL prefix for the course pages
            route: '/courses/:slug',
            // The name of the property that contains the slug
            slug: 'title',
            // The name of the property that contains the date
            date: null,
            // The name of the property that contains the draft status
            draft: null,
            // The name of the property that contains the pagination data
            paginate: null,
        },
    },
};
