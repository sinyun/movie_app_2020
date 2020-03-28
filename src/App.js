import React from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';
import "./App.css";


class App extends React.Component{
 
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const {data: { data : {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    // first movies object is state, second movies object is axios
    // this.setState({movies:movies});
    this.setState({movies, isLoading : false});
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const {isLoading, movies} = this.state;
    return (
      <selection className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
          ) : ( 
            <div className="movies">
              {movies.map( movie => (
                <Movie 
                    key={movie.id} 
                    id={movie.id}
                    year={movie.year} 
                    title={movie.title} 
                    summary={movie.summary} 
                    poster={movie.medium_cover_image} 
                    genres={movie.genres}
                  />
              ))}
            </div>
        )}
      </selection>
    );
  }

}


export default App;
