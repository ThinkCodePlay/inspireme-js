const fs = require("fs");

const loadQuoets = () => {
  const rawdata = fs.readFileSync("./assets/phrases.json");
  const data = JSON.parse(rawdata);
  return data;
};

const getQuote = (data,index) => {
  return data[index];
};


module.exports = {
  loadQuoets,
  getQuote,
};
