
import React, { PropTypes as Types } from 'react';

const Section = (props) => {
    const style = {
        position: 'relative',
        height: props.height,
        width: props.width,
        padding: props.padding,
    };

    return (
        <div style={style}>
            {props.children}
        </div>
    );
};

Section.propTypes = {
    children: Types.node,
    height: Types.string,
    width: Types.string,
    padding: Types.string,
};

Section.defaultProps = {
    height: '200px',
    width: '100vw',
    background: '',
    padding: '',
};

export default Section;
