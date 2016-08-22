import React from 'react';
import BlogPost from './BlogPost';

const Blog = () => {
    //@TODO yank from a db?
    const postsData = [
        {
            title: 'Post 1',
            date: 'aug 25th',
            tags: ['a', 'b', 'c'],
            markdown: 'Hello.\n\n* This is markdown.\n* It is fun\n* Love it or leave it.',
        },
        {
            title: 'Post 2',
            date: 'aug 27th',
            tags: ['d', 'e', 'f'],
            markdown: '## HTML block below\n\n<blockquote>\nThis blockquote will change based on the HTML settings above.\n</blockquote>',
        },
        {
            title: 'Post 3',
            date: 'aug 28th',
            tags: ['bee', 'bats', 'bort'],
            markdown: `
                ## How about some code?
                \`\`\`js
                var React = require('react');
                var Markdown = require('react-markdown');

                React.render(
                    <Markdown source="# Your markdown here" />,
                    document.getElementById('content')
                );
                \`\`\`
            `,
        },
    ];

    const posts = postsData.map((post, i) => (
        <BlogPost
          key={i}
          title={post.title}
          date={post.title}
          tags={post.title}
          markdown={post.markdown}
        />
    ));

    return (
        <div>
            The Blog
            {posts}
        </div>
    );
};

export default Blog;
