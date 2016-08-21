
import React from 'react';
import Section from '../common/Section';

const AboutMe = () => {
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
            <div style={styles.text}>AboutMe</div>
            <div style={styles.image}>img</div>
        </Section>
    );
};

export default AboutMe;
