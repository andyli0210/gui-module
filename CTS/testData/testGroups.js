var testGroups = {
    name: 'supermarket',
    isIncluded: false,
    arriveTimePlus: 2,
    arriveTimeMinus: 2,
    deliveryFees: 0,
    unitPrice: 2.5,
    members: [
        {
            name: 'coles',
            isIncluded: false,
            arriveTimePlus: 2,
            arriveTimeMinus: 2,
            deliveryFees: 0,
            unitPrice: 2.5,
            members: [
                {name: 'coles-1',isIncluded: true,arriveTimePlus: 2, arriveTimeMinus: 2, deliveryFees: 0,unitPrice: 2.5},
                {name: 'coles-2',isIncluded: false, arriveTimePlus: 2, arriveTimeMinus: 2,deliveryFees: 0,unitPrice: 2.5},
                {name: 'coles-3',isIncluded: false, arriveTimePlus: 2, arriveTimeMinus: 2,deliveryFees: 0,unitPrice: 2.5}
            ]
        },
        {
            name: 'woolworths',
            isIncluded: false,
            arriveTimePlus: 2,
            arriveTimeMinus: 2,
            deliveryFees: 0,
            unitPrice: 2.5,
            members: [
                {name: 'woolworths-1',isIncluded: false, arriveTimePlus: 2,arriveTimeMinus: 2,deliveryFees: 0,unitPrice: 2.5},
                {name: 'woolworths-2',isIncluded: false, arriveTimePlus: 2,arriveTimeMinus: 2,deliveryFees: 0,unitPrice: 2.5},
                {name: 'woolworths-3',isIncluded: false, arriveTimePlus: 2,arriveTimeMinus: 2,deliveryFees: 0,unitPrice: 2.5}
            ]
        }
    ]
};

