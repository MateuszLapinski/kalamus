import React from 'react';

function RightContext() {
    const [context, setContext] = React.useState(false);
    const [xyPosition, setxyPosition] = React.useState({ x: 0, y: 0 });
    const [chosen, setChosen] = React.useState();

    const showNav = (event) => {
        event.preventDefault();
        setContext(false);
        const positionChange = {
            x: event.pageX,
            y: event.pageY,
        };
        setxyPosition(positionChange);
        setContext(true);
    };

    const hideContext = () => {
        setContext(false);
    };

    const initMenu = (chosenOption) => {
        setChosen(chosenOption);
    };

    return (
        <>
            <h2 className="mb-3">Context Menu Example</h2>
            <h3> Right Click anywhere to preview the context menu </h3>
            <div
                className="contextContainer"
                onContextMenu={showNav}
                onClick={hideContext}
            >
                {chosen && <h4>"{chosen}" is chosen</h4>}
                {context && (
                    <div
                        style={{ top: xyPosition.y, left: xyPosition.x }}
                        className="rightClick"
                    >
                        <div className="menuElement" onClick={() => initMenu("Open with")}>
                            Open With
                        </div>
                        <div className="menuElement" onClick={() => initMenu("Copy")}>
                            Copy
                        </div>
                        <div className="menuElement" onClick={() => initMenu("Cut")}>
                            Cut
                        </div>
                        <div className="menuElement" onClick={() => initMenu("Paste")}>
                            Paste
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default RightContext;
