import React from 'react';
import NumberAdder from './number-adder';

const App = () => {
    return (
        <div className="root">
            <div className="app-description">
                <p>
                    The Application has a text input that only accepts integers
                </p>
                <p>
                    When you press enter on the input, the number will be added
                    to the list
                </p>
                <p>
                    The list of numbers will always show the highest number
                    first, the lowest number last, and the number that would be
                    in the middle of the list if sorted in the middle
                </p>
                <p>
                    The rest of the numbers appear in the same order they are
                    added
                </p>
                <p>
                    When a number's checkbox is checked, the number will have a
                    line through as indication of an excluded number
                </p>
                <p>
                    If checked, the number cannot be considered as maximum,
                    minimum or middle
                </p>
                <p>Reset the app to the default state with the reset button</p>
            </div>
            <div className="divider" />
            <NumberAdder />
        </div>
    );
};

export default App;
