import fetch from 'node-fetch';

// fetch data from autotempest api
const params = {
    make: "toyota",
    model: "landcruiser",
    radius: "30",
    originalradius: "300",
    showUnpaid: 0,
    zip: 98144,
    sort: "best_match",
    sites: "cm",
    deduplicationSites: "te|cm|cv|eb|cs|tc|cab|ot|st|fbm",
    rpp: 50,
    page: 1,
    token: "d55aaea7b65f2b87285d759d951cb57596923b8ba45b347f23d13298ef2b7dfd"
};

const listingSites = ["te", "cm", "cv", "eb", "cs", "tc", "cab", "ot", "st", "fbm"];
let results = [];

for (let i = 0; i < listingSites.length; i++) {
    const data = fetch(`https://www.autotempest.com/queue-results?make=toyota&model=landcruiser&radius=30&originalradius=300&showUnpaid=0&zip=98144&sort=best_match&sites=${listingSites[i]}&deduplicationSites=te%7Ccm%7Ccv%7Ceb%7Ccs%7Ctc%7Ccab%7Cot%7Cst%7Cfbm&rpp=50&page=1&token=d55aaea7b65f2b87285d759d951cb57596923b8ba45b347f23d13298ef2b7dfd`,
        {
            method: 'GET',
            // body: JSON.stringify(params),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(function handleError(error) {
            console.log(error);
        });
    results.push(data);
}



// save to file as json, one file for all sites

