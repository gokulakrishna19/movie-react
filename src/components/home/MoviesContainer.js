import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from './Moviecard';

class MoviesContainer extends Component {
    render() {
        const { movies, response } = this.props;
        console.log("movies", movies)
        let maplist = "No result found"
        if (movies) {
            maplist = movies.map((movie) =>
                <MovieCard key={movie.imdbID} movie={movie} />
            )
        }
        return (
            <div>
                {maplist}
            </div>
        )
    }
}


const mapStatesToProps = state => ({
    loading: state.movies.loading,
    movies: state.movies.movies,
})

export default connect(mapStatesToProps)(MoviesContainer)
