import queryString from "query-string";

const API_KEY = "01ba1192cb04fb359fdd07129d95e4e9e590aade";
const API_URL = "https://api.esv.org/v3/passage/html/?";

const getEsvText = async (passage) => {
  const query = {
    q: passage,
    "include-headings": false,
    "include-footnotes": true,
    "include-footnote-body": true,
    "include-verse-numbers": true,
    "include-short-copyright": false,
    "include-passage-references": true,
    "include-styles": true,
    "inlude-crossrefs": true,
    "wrapping-div": true,
    "include-subheadings": false,
    // "include-book-titles": false,
    "include-audio-link": false,
    "paragraph-tag": "p",
  };

  const url = API_URL + queryString.stringify(query);
  const requestOptions = {
    headers: {
      Authorization: `Token ${API_KEY}`,
    },
  };

  const response = await fetch(url, requestOptions);
  const json = await response.json();
  // console.log(json)

  return json.passages[0];
};

export default getEsvText;
