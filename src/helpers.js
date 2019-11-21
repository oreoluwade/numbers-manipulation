export const data = [
    {
        number: 10,
        checked: false
    },
    {
        number: 23,
        checked: true
    },
    {
        number: 8,
        checked: false
    },
    {
        number: 16,
        checked: false
    },
    {
        number: 52,
        checked: true
    },
    {
        number: 98,
        checked: false
    }
];

export const getMiddleNumber = sortedArray => {
    return sortedArray.length % 2 === 1
        ? sortedArray[(sortedArray.length - 1) / 2]
        : sortedArray[sortedArray.length / 2];
};
