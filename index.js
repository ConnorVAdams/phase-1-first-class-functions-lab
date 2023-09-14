const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function(arrayOfDrivers) {
    const firstTwoDrivers = [...arrayOfDrivers].slice(0,2);
    return firstTwoDrivers;
};

const returnLastTwoDrivers = arrayOfDrivers => { 
    const lastTwoDrivers = [...arrayOfDrivers].slice(2,4);
    return lastTwoDrivers;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = multiplier => {
    const fareMultiplier = fare => multiplier * fare;
    return fareMultiplier;
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (arrayOfDrivers, callbackFunction) => callbackFunction(arrayOfDrivers);



