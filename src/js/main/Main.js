import React, { PropTypes as Types } from 'react';

const Main = ({ children }) => {
    const styles = {
        childrenStyle: {
            maxWidth: '1400px',
            minWidth: '400px',
        },
    };

    return (
      <div>
          <div style={styles.childrenStyle}>
            {children}
          </div>
      </div>
    );
};

Main.propTypes = {
    children: Types.element,
};

export default Main;
