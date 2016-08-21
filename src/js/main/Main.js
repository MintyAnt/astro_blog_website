import React, { PropTypes as Types } from 'react';
import NavigationBar from '../common/NavigationBar';

const Main = ({ children }) => {
    const styles = {
        childrenStyle: {
            maxWidth: '1400px',
            minWidth: '400px',
        },
    };

    return (
      <div>
        <NavigationBar />
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
