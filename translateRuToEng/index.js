const { default: axios } = require("axios");
const fs = require("fs");

const googleTranslateURL = (from, to, txt) =>
  `https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&sl=${from}&tl=${to}&q=${txt}`;

const pause = 300; // API limit (5 requests per second)

const sub = fs.readFileSync("captions.sbv").toString();

const timeLineRegEx = /^(\d:\d{2}:\d{2}.\d{3}),(\d:\d{2}:\d{2}.\d{3})/gm;
const txtRegEx =
  /^([а-яА-Яa-zA-Z\[][а-яА-Я\w  \-\[\]\.\"\']+\s([а-яА-Яa-zA-Z][а-яА-Я\w  \-\[\]\.\"\']+)?)/gm;

const timestamps = sub.match(timeLineRegEx);
const phrases = sub.match(txtRegEx);

let engSubTxt = "";
let index = 0;

const intervalID = setInterval(addTranslation, pause);

async function addTranslation() {
  if (index >= phrases.length) {
    console.log("stop process");
    clearInterval(intervalID);

    fs.writeFileSync("eng_sub.sbv", engSubTxt);
    return;
  }
  console.log("try line..", index);
  const url = googleTranslateURL(
    "ru",
    "en",
    encodeURI(
      phrases[index]
        .replace(/\n/g, " ") // remove new line
        .replace(/  /g, " ") // removes double space
    )
  );
  let enResp;
  try {
    enResp = await axios(url);
  } catch (e) {
    console.log("skipped line", phrases[index]);
    console.error(e);
  }
  engSubTxt += timestamps[index];
  engSubTxt += "\n";
  engSubTxt += enResp ? enResp.data[0][0][0] : phrases[index];
  engSubTxt += "\n";
  engSubTxt += "\n";

  index++;
}
