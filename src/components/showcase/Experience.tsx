import React from 'react';
// @ts-ignore
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Wefeasto</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://wefeasto.com'}
                        >
                            <h4>www.wefeasto.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Developer Architect // Internship</h3>
                        <b>
                            <p>Summer 2022 - Fall 2022</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    A brand revolutionizing breakfast, making it better and better with each product to come - That's wefeasto.
                    Written in HTML using Bootstrap (A lot of CSS libs) and Plain'Ol CSS // JS
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Visioned multiple prototypes for it's homepage and crafted a unique experiance
                        </p>
                    </li>
                    <li>
                        <p>
                            Designed and implemented multiple features to
                            increase app usability and user experience while
                            ensuring the quality, maintainability and
                            scalability of the front end as the user base grew
                            constantly
                        </p>
                    </li>
                    <li>
                        <p>
                            Coordinated major refactors targeted towards app
                            optimization and performance resulting in a smoother
                            user experience and accomplished by eliminating
                            redundant re-renders and API calls by over 50%.
                        </p>
                    </li>
                    <li>
                        <p>
                            Ported most code to the edge, crafting it towards a serverless architected environment
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
