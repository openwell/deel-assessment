import './App.css';
import useDemoServer from './hooks/useDemoServer';

// do nothing if it's any of the keys
const keyBoardCode = [37, 38, 39, 40, 13];
let debounce;
function App() {
  const [input, setInput, results, setResults, wordNotFound] = useDemoServer();

  function autocompleteMatch(e) {
    let input = e.target.value.trim();
    if (keyBoardCode.includes(e.keyCode)) {
      return setResults([]);
    } else {
      // debounce to avoid multiple call and for efficiency
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        setInput(input);
      }, 350);
    }
  }
  // {/* highlight the matching part of the text   */}
  const renderHightLightedWord = (result) => {
    return result.replace(
      input,
      `<span class="hightLightedWord">${input}</span>`
    );
  };

  return (
    <div className="App">
      <h1>Auto Complete Application</h1>
      <form action="" autoComplete="off">
        {/* Input form */}
        <input
          type="text"
          name="query"
          onKeyUp={autocompleteMatch}
          placeholder="input a word"
        />
        <div className={`results ${results.length == 0 ? 'results-hide' : ''}`}>
          {results?.map((result) => (
            <li
              key={result}
              dangerouslySetInnerHTML={{
                __html: renderHightLightedWord(result),
              }}
            ></li>
          ))}
        </div>
        {/*No result found feedback  */}
        {wordNotFound && <span className="empty_search">No result found</span>}
      </form>
    </div>
  );
}

export default App;
