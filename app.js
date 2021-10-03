const { loadQuoets, getQuote } = require("./utils/utils");
const fs = require("fs");

const nodeHtmlToImage = require("node-html-to-image");

const quotes = loadQuoets();

for (let i = 0; i < quotes.length; i++) {
  const quote = getQuote(quotes,i);

  let html = "";
  try {
    html = fs.readFileSync("./index.html", "utf8");
  } catch (err) {
    console.error(err);
  }

  const imageName = `./assets/images/image${i}.jpg`;
  nodeHtmlToImage({
    output: imageName,
    html,
    content: {
      quote: quote.q,
      author: quote.a,
    },
  }).then(() => console.log(`Image ${i} was created successfully!`));
}
