import React from 'react';
import Section from './Section';

const NavigationBar = () => {
    const styles = {
        headerImage: {
            width: '100%',
            height: '100px',
            background: 'gray',
            position: 'relative',
        },
        title: {
            position: 'absolute',
            top: 0,
        },
        text: {
            margin: 0,
        }
        links: {
            float: 'left',
            padding: '10px',
            border: '1px solid black',
        },
    };

    const linkInfo = [
        { title: 'Home', href: '???' },
        { title: 'Pictures', href: '???' },
        { title: 'Blog', href: '???' },
        { title: 'About', href: '???' },
    ];

    const links = linkInfo.map((link, i) => (
        <div style={styles.links} key={i}>
            <a href={link.href}>{link.title}</a>
        </div>
    ));

    return (
        <Section height="50px">
            <div>
                <div style={styles.headerImage} />
                <div style={styles.title}>
                    <h1 style={styles.text}>ASTRO BLOG</h1>
                    <p style={styles.text}>B Duane</p>
                </div>
            </div>
            {links}
        </Section>
    );
};

export default NavigationBar;
