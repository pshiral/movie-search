import { useCallback, useState } from 'react';
import './App.css';

function App() {
  const [options, setOptions] = useState([]),
    [selected, setSelected] = useState(null);

  const debounce = (cb) => {
    let id = null;

    return (...args) => {
      clearTimeout(id);

      id = setTimeout(() => {
        cb.apply(null, args);
      }, 300);
    };
  };

  const handleChange = useCallback(debounce((event) => {
    let text = event?.target?.value;

    if (text.length > 2) {
      fetch(`http://www.omdbapi.com/?s=${text}&apiKey=74de3445`).then((response) => {
        return response.json();
      }).then((response) => {
        const result = response?.Search?.slice(0, 5);

        if (result) {
          setOptions(response.Search.slice(0, 5));
        } else {
          setOptions([]);
        }
      });
    } else {
      setOptions([]);
    }
  }), []);

  return (
    <div className="app">
      <header>
        <h2 className="heading">
          Web Developer Assignment
        </h2>
        <span className="by">Sr Software Engineer</span>
      </header>
      <main>
        <form autoComplete="off">
          <section className="autocomplete">
            <input type="text" name="places" placeholder="Search a place"
              data-test-id="input" onChange={handleChange} />
            <div className="options">
              {options?.map((movie) => (
                <div onClick={() => {
                  setOptions([]);
                  setSelected(movie);
                }}>{movie.Title}</div>
              ))}
            </div>
          </section>
          {selected && <section className="card">
            <img alt={selected.Title} src={selected.Poster} />
            <div className="title">
              <span>Title: {selected.Title}</span>
              <span>Year: {selected.Year}</span>
            </div>
          </section>}
        </form>
      </main>
    </div>
  );
}

export default App;
