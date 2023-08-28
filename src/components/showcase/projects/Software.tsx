import React from 'react';
// @ts-ignore
import takiyomi from '../../../assets/pictures/projects/software/takiyomi.png';
// @ts-ignore
import espresso from '../../../assets/pictures/projects/software/espresso.png';
// @ts-ignore
import skynet from '../../../assets/pictures/projects/software/skynet.png';
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Hand-picked and crafted projects that I hold dearly to my heart
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>The Abyss</h2>
                <br />
                <p>
                    The Abyss is an unltra-minimal platform for anyone to let their thoughts out. From fictional stories to documentation - 
                    The Abyss is for anyone to write anything, they love!
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src="https://ph-files.imgix.net/1d2114e8-ca80-4a21-9f96-44aaf85132a0.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=446&h=220&fit=max&dpr=1" />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Official homepage of The Abyss
                        </sub>
                    </p>
                </div>
                <p>
                    Now, a quick technical breakdown of the site. The website is
                    created using NextJS // Javascript. The backend is is managed using Firebase, this includes
                    Auth and for Analytics, I and my team are going w/ Umami.
                </p>
                <br />
                <h3>Website and Tool's Link:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://theabyss.ink"
                        >
                            <p>
                                <b>[Official Site]</b> - https://theabyss.ink
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://nextjs.org"
                        >
                            <p>
                                <b>[NextJS // Frontend]</b> - https://nextjs.org
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://firebase.google.com"
                        >
                            <p>
                                <b>[Firebase // Backend]</b> - https://firebase.google.com
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://umami.is"
                        >
                            <p>
                                <b>[Umami // Analytics]</b> - https://umami.is
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    I'm skipping over a lot of details in exchange for brevity,
                    but I do plan on doing a more in depth breakdown for those
                    interested sometime in the future. To get updates with that
                    project feel free to follow me on The Abyss{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://theabyss.ink/shalomlijo"
                    >
                        @shalomlijo
                    </a>
                </p>
            </div>
            <div className="text-block">
                <h2>1PM Workout</h2>
                <br />
                <p>
                    1PM Workout is A hyper-minimal workout app that will guide you through a workout.
                    No goals, no stress, just steady progress in maintaining a good form and maybe, bald (In a good way :D).
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={takiyomi} />
                    <div style={styles.caption}>
                        <p>
                            <sub>
                                <b>Figure 2: </b> Official Homepage of 1PM Workout
                            </sub>
                        </p>
                    </div>
                </div>
                <p>
                    1PM Workout, unlike The Abyss was a lot easier to built and it took few weeks to actually set it up (Also because The Abyss is literally a social media platform and not a workout app :D). The frontend is 
                    built using NextJS and does not have any DB involved as it relies on local data. 
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://takiyomi.tk"
                        >
                            <p>
                                <b>[Website]</b> - https://1pmworkout.vercel.app
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://nextjs.org"
                        >
                            <p>
                                <b>[NextJS]</b> - https://nextjs.org
                            </p>
                        </a>
                    </li>
                                        <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://nextjs.org"
                        >
                            <p>
                                <b>[App // Play Store]</b> - https://bit.ly/1pmworkout
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    Currently, 1PM Workout is still under development with a lot of features still in beta but is 
                    expected to launch within few months. 
                </p>
            </div>
            <div className="text-block">
                <h2>Github // The Abyss</h2>
                <br />
                <p>
                    The above two aren't my only projects and I have built a lot, which if I were to start writing would take years
                    to complete, loll. So, you can check out all of my OSS projects at my Github and any major // tiny announcements at The Abyss:D
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={skynet} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 3:</b> Skynet Tech, Babyy
                        </sub>
                    </p>
                </div>
                <p>
                    OH, MAJOR ANNOUNCEMENT - I and my dear friend, Dane have created a startup called Skynet where we 
                    built software tailored for power-users and enterprises. We're currently in our pre-investor stage, so 
                    if your a VC, we would love to hear from you ;)
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/solomonshalom"
                        >
                            <p>
                                <b>[GitHub]</b> - Personal GitHub
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://theabyss.ink/solomonlijo"
                        >
                            <p>
                                <b>[The Abyss]</b> - @solomonlijo
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.linkedin.com/company/skynettech7"
                        >
                            <p>
                                <b>[Website]</b> - linkedin 
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    Byee
                </p>
            </div>
            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
};

export default SoftwareProjects;
