import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../styles/SearchForm.css';
import MovieList from './MovieList';

function SearchForm() {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState(false);
  const [movies, setMovies] = useState([]);
  const endpoint = 'https://tv-v2.api-fetch.website/movies/1?sort=rating&order=-1&genre=all&keywords=';

  useEffect(() => {
    console.log("Effect has ben run");
    
    const getMovies = async () => {
      if(query)
      {
        const response = await fetch(endpoint + query);
        const data = await response.json();
        console.log(data);
        setMovies(data);
      }else
      {
        console.log("Nothing yet");
      }
    }

    getMovies();
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <>
      <form className="search-form" onSubmit={getSearch}>
          <input className="search-bar" type="text" value={search} onChange={updateSearch}></input>
          <button className="search-button" type="submit">Search</button>
      </form>
      <Container>
        <Row className="justify-content-md-center movie-list">
          {movies.map((movie, index) => (
            <Col md="auto" key={movie.imdb_id + index}>
              <MovieList title={movie.title} synposis={movie.synopsis}
              year={movie.year} image={movie.images['fanart']}/>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default SearchForm;