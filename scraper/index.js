const cheerio = require('cheerio');
const axios = require('axios');
const db = require('../database/db.js');


async function getPriceList() {
  let dbResult = await new Promise((resolve, reject) => {
    db.query('SELECT local_id, vendor_id, price, url FROM parts', (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
  return dbResult.rows;
}


async function scrapePrices() {
  var priceList = await getPriceList();
  var scrapedPrice = 0;

  for (var i = 0; i < priceList.length; i++) {
    scrapedPrice = await getResults(priceList[i].vendor_id, priceList[i].url);
    db.query('UPDATE parts SET price = $1 WHERE local_id = $2', [scrapedPrice, priceList[i].local_id], (err) => {
      if (err) {
        console.log('error updating database:', err);
      }
    });
  }

}


const fetchData = async (url) => {
  const result = await axios.get(url);
  return cheerio.load(result.data);
};

const getResults = async (vendor, url) => {
  const $ = await fetchData(url);
  // 1 = cdw
  if (vendor === 1) {
    var scrapedPrice = parseFloat($('.price > .price-type-selected').attr('data-pricevalue'));
  // 2 = newegg
  } else if (vendor === 2) {
    var siteName = cheerio.html($('script[type="application/ld+json"]').get()[2]);
    var htmlStringified = JSON.stringify(siteName);
    var startObj = htmlStringified.indexOf('price');
    var endObj = htmlStringified.indexOf('priceCurrency');
    var scrapedPrice = parseFloat(htmlStringified.substring(startObj+10, endObj-5));
  }
  return scrapedPrice;
};

module.exports = scrapePrices;