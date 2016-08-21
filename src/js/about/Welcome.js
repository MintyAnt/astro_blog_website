
import React from 'react';
import Section from '../common/Section';

const Welcome = () => {
    const styles = {
        image: {
            width: '40%',
            height: '100px',
            background: 'gray',
            float: 'left',
        },
        text: {
            width: '60%',
            height: '100%',
            float: 'left',
        },
    };

    return (
        <Section height="150px">
            <div style={styles.image}>img</div>
            <div style={styles.text}>Welcome</div>
        </Section>
    );
};

export default Welcome;
