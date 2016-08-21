
import React from 'react';
import Section from '../common/Section';

const AboutSite = () => {
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
            <div style={styles.text}>AboutSite</div>
            <div style={styles.image}>img</div>
        </Section>
    );
};

export default AboutSite;
