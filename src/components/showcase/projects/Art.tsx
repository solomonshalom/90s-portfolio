import React from 'react';

import Bobby from '../../../assets/pictures/projects/art/Bobby.jpg';
import Jacob from '../../../assets/pictures/projects/art/Jacob.jpg';

export interface ArtProjectsProps {}

const ArtProjects: React.FC<ArtProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Art & Design</h1>
            <h3>Endeavors</h3>
            <br />
            <div className="text-block">
                <p>
                    While I love programming and software development, Art,
                    Design, and Animation will always hold a special place in my
                    heart.
                </p>
                <br />
                <p>
                    Here are a few projects/things I've done over the years to
                    keep the artistic side of me alive. I'm always looking to
                    push myself creatively and learn new things.
                </p>
            </div>
            <div className="text-block">
                <h2>Photorealism and AI Art</h2>
                <br />
                <p>
                    I loved creating characters be it in my imagination or just in paper so one fine day - I decided to
                    create bobby, A hand-crafted photorealistic art piece. Bobby came to life when I wanted to design a character that made no sense whatsoever.
                    Think about it - even thought you would see a astronaut chilling with a banana in his hands?

                    Well, it was portrayed in that manner to showcase that sometimes God put's us through some situations that to us might not make sense but there's always a reason. 
                    This is how, Bobby Life came to being.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={Bobby} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> Bobby Life
                        </sub>
                    </p>
                </div>
                <p>
                    This took around a lot of brainstorming, inspiration and a lot of workflows as it was first crafted in paper then
                    transformed using a editor, later crafted using DALL-E
                </p>
                <br />
                <h3>Tools:</h3>
                <br />
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://openai.com/dall-e-2/"
                        >
                            <p>
                                <b>DALL-E</b> - Image generation using AI systems
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://pixlr.com"
                        >
                            <p>
                                <b>Pixlr</b> - Web-based photoeditor // Great photoshop alternative
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="#"
                        >
                            <p>
                                <b>Imagination</b> - Pretty hard to explain :D
                            </p>
                        </a>
                    </li>
                </ul>
                <br />
                <div className="captioned-image">
                    <img src={Jacob} alt="" />
                    <p>
                        <sub>
                            <b>Figure 2:</b> Jacob Lino
                        </sub>
                    </p>
                </div>
                <br />
                <p>
                is the second of my adventures when it comes to NFT.
                I wanted to create a man of authority, a mafia leader with a Russian outlook, thus bringing Jacob Lino to life. This is the creation of a myth, a man may be a legend

                </p>
                <h3>To know more about my Art:</h3>
                <br />
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://instagram/solomonshalom"
                        >
                            <p>
                                <b>Instagram</b> - My Art Portfolio
                            </p>
                        </a>
                    </li>
                </ul>
                <br />
            </div>
        </div>
    );
};

export default ArtProjects;