import { useEffect, useState } from 'react';
const wordsDB = [
  'deel',
  'lets deel',
  'start up',
  'intel',
  'meta',
  'nigeria',
  'covid',
];

export default function useDemoServer() {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);
  const [wordNotFound, setNotFound] = useState(false);

  // Fetch words from external API
  useEffect(() => {
    const loadWords = async () => {
      try {
        const res = await fetch('https://deel-assessment.herokuapp.com/');
        const data = await res.json();
        localStorage.setItem('words', JSON.stringify(data));
      } catch (error) {
        console.error(error);
      }
    };
    loadWords();
    return () => {};
  }, []);

  // filter out the words
  useEffect(() => {
    const wordSearchController = (query) => {
      const reg = new RegExp(query);
      let wordsPool = JSON.parse(localStorage.getItem('words')) || wordsDB;
      return wordsPool.filter((word) => word.match(reg));
    };

    // Query the input word from async mock server
    const demoServer = async (query) => {
      return new Promise((resolve, reject) => {
        let checkEmptyArray = wordSearchController(query).length == 0;
        if (checkEmptyArray) {
          reject('Word Not Found');
        } else {
          setTimeout(() => resolve(wordSearchController(query)), 1000);
        }
      });
    };
    const getResults = async () => {
      setNotFound(false);
      let query = input;
      try {
        const res = await demoServer(query);
        if (input == '') {
          return setResults([]);
        }
        setResults(res);
      } catch (error) {
        if (query?.length != 0) {
          setResults([]);
          setNotFound(true);
        }
      }
    };
    getResults();
    return () => {};
  }, [input]);

  return [input, setInput, results, setResults, wordNotFound];
}
