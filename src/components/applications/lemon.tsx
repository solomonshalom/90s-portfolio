import React from 'react';
import Window from '../os/Window';
import Wordle from '../wordle/Wordle';

export interface lemonAppProps extends WindowAppProps {}

const lemonApp: React.FC<lemonAppProps> = (props) => {
    return (
        <Window
            top={20}
            left={300}
            width={600}
            height={860}
            windowBarIcon="windowGameIcon"
            windowTitle="lemon"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            bottomLeftText={'© Copyright 2022 Solomon Shalom Lijo'}
        >
            <div className="site-page">
                <Wordle />
            </div>
        </Window>
    );
};

export default lemonApp;
