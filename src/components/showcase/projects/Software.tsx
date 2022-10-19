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
                <h2>Eespresso</h2>
                <br />
                <p>
                    Espresso or Rocket Espresso is an unltra-minimal platform for anyone to write. From fictional stories to documentation - 
                    espresso is for anyone to write anything, they love!
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={espresso} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Official homepage of Espresso
                        </sub>
                    </p>
                </div>
                <p>
                    Now, a quick technical breakdown of the site. The website is
                    created using NextJS // Javascript. The backend is is managed using Firebase, this includes
                    Auth and Analytics. OH, forgot to mention but am soon moving the backend to supabase to avoid a vendor lock-in.
                </p>
                <br />
                <h3>Website and Tool's Link:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://rocketespresso.ml"
                        >
                            <p>
                                <b>[Official Site]</b> - https://rocketespresso.ml
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
                </ul>
                <p>
                    I'm skipping over a lot of details in exchange for brevity,
                    but I do plan on doing a more in depth breakdown for those
                    interested sometime in the future. To get updates with that
                    project feel free to follow me on twitter{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://twitter.com/shalomlijo"
                    >
                        @shalomlijo
                    </a>
                </p>
            </div>
            <div className="text-block">
                <h2>Takiyomi</h2>
                <br />
                <p>
                    Takiyomi is an anime streaming platform for all the weebs out there :D, I initially made it for myself but
                    made it public after I realized that many who streamed anime struggled finding a good site to watch, a site that was one - free, 
                    two - fast and three - an amazing UI/UX! So, after weeks of fine-tuning, I launched Takiyomi!
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={takiyomi} />
                    <div style={styles.caption}>
                        <p>
                            <sub>
                                <b>Figure 2: </b> Official Homepage of Takiyomi
                            </sub>
                        </p>
                    </div>
                </div>
                <p>
                    Takiyomi, unlike espresso was a lot easier to built and it took few weeks to actually set it up. The frontend is 
                    built using NextJS while the API is a custom, hand-crafted scraper.
                    overall.
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
                                <b>[Website]</b> - https://takiyomi.tk
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
                </ul>
                <p>
                    Currently, Takiyomi is still under development with a lot of features still in beta but is 
                    expected to launch within few months. 
                </p>
            </div>
            <div className="text-block">
                <h2>Github // Twitter</h2>
                <br />
                <p>
                    The above two aren't my only projects and I have built a lot, which if I were to start writing would take years
                    to complete, loll. So, you can check out all of my OSS projects at my Github and any major // tiny announcements at my twitter :D
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
                            href="https://twitter.com/shalomlijo"
                        >
                            <p>
                                <b>[Twitter]</b> - Twitter
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://sky-net.ml"
                        >
                            <p>
                                <b>[Website]</b> - https://sky-net.ml
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
