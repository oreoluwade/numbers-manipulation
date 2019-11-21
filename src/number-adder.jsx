import React, { useState, useEffect, Fragment } from 'react';
import ListItem from './list-item';
import { KEY_NAME } from './constants';
import { data, getMiddleNumber, getMax, getMin } from './helpers';

const storageItem = localStorage.getItem(KEY_NAME);

const storedData = storageItem ? JSON.parse(storageItem) : data;

const NumberAdder = () => {
    const [numbersArray, setNumbersArray] = useState([]);
    const [inputNumber, setInputNumber] = useState('');
    const [noDataInStorage, setNoDataInStorage] = useState(false);

    useEffect(() => {
        setNumbersArray(storedData);
    }, []);

    useEffect(() => {
        if (!storageItem) {
            setNoDataInStorage(true);
        }
    }, []);

    const handleInputChange = e => {
        e.persist();
        if (/^\d+$/.test(e.target.value)) {
            setInputNumber(Number(e.target.value));
        } else {
            setInputNumber('');
        }
    };

    const updateNumbersList = newArray => {
        setNumbersArray(newArray);
        localStorage.setItem(KEY_NAME, JSON.stringify(newArray));
        setNoDataInStorage(false); // Enable reset button once there's data in local storage
    };

    const addNumberToList = e => {
        if (e.charCode === 13) {
            if (
                !numbersArray.find(element => element.number === inputNumber) &&
                String(inputNumber).length
            ) {
                const newItem = { number: inputNumber, checked: false };
                const mappedNumbers = numbersArray.map(el => el.number);

                const sortedNumbers = [...mappedNumbers, inputNumber].sort(
                    (a, b) => a - b
                );

                if (Math.max(...mappedNumbers) < inputNumber) {
                    updateNumbersList([...numbersArray, newItem]);
                } else if (Math.min(...mappedNumbers) > inputNumber) {
                    updateNumbersList([newItem, ...numbersArray]);
                } else if (getMiddleNumber(sortedNumbers) === inputNumber) {
                    const modifiedArray = [...numbersArray];
                    modifiedArray.splice(
                        sortedNumbers.indexOf(inputNumber),
                        0,
                        newItem
                    );
                    updateNumbersList(modifiedArray);
                } else {
                    const modifiedArray = [...numbersArray];
                    modifiedArray.splice(numbersArray.length - 1, 0, newItem);
                    updateNumbersList(modifiedArray);
                }
                setInputNumber('');
            }
        }
    };

    const handleCheckedState = item => {
        const modifiedNumbersArray = numbersArray.reduce((acc, next) => {
            if (next.number === item.number) {
                next.checked = !next.checked;
            }
            acc.push(next);
            return acc;
        }, []);
        updateNumbersList(modifiedNumbersArray);
    };

    const resetData = () => {
        updateNumbersList(data);
        localStorage.removeItem(KEY_NAME);
        setNoDataInStorage(true);
    };

    const numbersOnly = numbersArray.map(el => el.number);

    return (
        <div className="adder-wrapper">
            <div className="adder-cta-section">
                <input
                    type="text"
                    placeholder="Type a number here..."
                    value={inputNumber}
                    className="input-adder"
                    onChange={handleInputChange}
                    onKeyPress={addNumberToList}
                />
                <button
                    onClick={resetData}
                    className={
                        noDataInStorage
                            ? 'reset-button no-data'
                            : 'reset-button'
                    }
                    disabled={noDataInStorage}
                >
                    RESET DATA
                </button>
            </div>
            <Fragment>
                {numbersArray.map(datum => (
                    <ListItem
                        item={datum}
                        key={datum.number}
                        handleCheckedState={handleCheckedState}
                        maxNum={getMax(numbersOnly)}
                        minNum={getMin(numbersOnly)}
                        middleNum={getMiddleNumber(numbersOnly)}
                    />
                ))}
            </Fragment>
        </div>
    );
};

export default NumberAdder;
