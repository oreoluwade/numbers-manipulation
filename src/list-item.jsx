import React from 'react';

const ListItem = ({ item, handleCheckedState, maxNum, minNum, middleNum }) => {
    const itemOfInterest =
        maxNum === item.number ||
        minNum === item.number ||
        middleNum === item.number;

    return (
        <div className="item-root">
            <span className="item-span-no-input">
                <p
                    className={
                        item.checked ? 'item-text text-crossed' : 'item-text'
                    }
                >
                    Number {item.number}
                </p>
                {itemOfInterest && (
                    <span className="item-pellet">
                        {minNum === item.number
                            ? 'MIN'
                            : maxNum === item.number
                            ? 'MAX'
                            : 'MID'}
                    </span>
                )}
            </span>
            <input
                type="checkbox"
                className="item-box"
                checked={item.checked}
                onChange={() => handleCheckedState(item)}
            />
        </div>
    );
};

export default ListItem;
