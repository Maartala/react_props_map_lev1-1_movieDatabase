import movies from './data/movies';
import './App.css';
import MovieCard from './components/MovieCard';

function App() {
  return (
    <div className="App">
      <section className="movie_list_grid">
        {
          movies.map((elt, i) =>
            <MovieCard
              key={i}
              title={elt.title}
              year={elt.year}
              director={elt.director}
              duration={elt.duration}
              genre={elt.genre}
              rate={elt.rate}
            />
          )}
      </section>
    </div>
  );
}

export default App;
