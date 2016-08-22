import React, { PropTypes as Types } from 'react';
import ReactMarkdown from 'react-markdown';

const BlogPost = (props) => {
    const styles = {
    };

    return (
        <div>
            <div />
            <ReactMarkdown escapeHtml={false} source={props.markdown} />
        </div>
    );
};

BlogPost.propTypes = {
    title: Types.string,
    date: Types.string,
    tags: Types.string,
    markdown: Types.string,
};

export default BlogPost;
