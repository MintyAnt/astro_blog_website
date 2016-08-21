import React from 'react';
import markdown from 'markdown';
import BlogPost from './BlogPost';

const Blog = () => {
    //@TODO yank from a db?
    const postsData = [
        {
            title: 'Post 1',
            date: 'aug 25th',
            tags: ['a', 'b', 'c'],
            postMarkup: 'Hello.\n\n* This is markdown.\n* It is fun\n* Love it or leave it.',
        },
        {
            title: 'Post 2',
            date: 'aug 28th',
            tags: ['d', 'e', 'f'],
            postMarkup: 'Vessel     | Captain\n-----------|-------------\nNCC-1701   | James T Kirk\nNCC-1701 A | James T Kirk\nNCC-1701 D | Picard',
        },
    ];


    const posts = postsData.map((post, i) => {
        const convertedMarkup = markdown.toHTML(post.postMarkup);
        return (
            <BlogPost
              key={i}
              title={post.title}
              date={post.title}
              tags={post.title}
              markup={convertedMarkup}
            />
        );
    });


    return (
        <div>
            {posts}
        </div>
    );
};

export default Blog;
