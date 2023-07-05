const apiToken = process.env.REACT_APP_API_TOKEN;

import('node-fetch').then(({default: fetch}) => {
    fetch(`https://www.pricecharting.com/api/offers?t=${apiToken}&id=630417`)
    .then(response => response.json())
    .then(data => {
        console.log('Status: ', data.status);
        data.offers.forEach((offer, index) => {
            console.log('Offer ' + (index + 1) + ': ', JSON.stringify(offer, null, 2));
        });
    })
    .catch(error => console.error('Error:', error));
});

// to get sold history

import('node-fetch').then(({default: fetch}) => {
    fetch(`https://www.pricecharting.com/api/offers?t=${apiToken}&id=630417&status=sold`)
    .then(response => response.json())
    .then(data => {
        console.log('Status: ', data.status);
        data.offers.forEach((offer, index) => {
            console.log('Offer ' + (index + 1) + ': ', JSON.stringify(offer, null, 2));
        });
    })
    .catch(error => console.error('Error:', error));
});