import React from 'react';
import NumberAdder from './number-adder';

const App = () => {
    return (
        <div className="root">
            <div className="app-description">
                <p>
                    Type a number into the input box, smash the enter key and
                    see your number added to the list
                </p>
                <p>
                    Click on the checkbox next to a number to cross the number
                </p>
                <p>Reset the app to the default state with the reset button</p>
            </div>
            <div className="divider" />
            <NumberAdder />
        </div>
    );
};

export default App;
