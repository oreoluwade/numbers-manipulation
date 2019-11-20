import React from 'react';

const NumberList = ({ item, handleCheckedState }) => {
    return (
        <div className="item-root">
            <p
                className={
                    item.checked ? 'item-text text-crossed' : 'item-text'
                }
            >
                Number {item.number}
            </p>
            <input
                type="checkbox"
                className="item-box"
                checked={item.checked}
                onChange={() => handleCheckedState(item)}
            />
        </div>
    );
};

export default NumberList;
