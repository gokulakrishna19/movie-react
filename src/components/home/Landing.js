import React, { Component } from 'react'
import SearchForm from './SearchForm';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import MoviesContainer from './MoviesContainer';


class Landing extends Component {
    render() {
        const { loading, movies } = this.props;
        console.log("loading", loading)
        console.log("movies land", movies)
        return (
            <div className="container">
                <SearchForm />
                {loading ? <Spinner /> : <MoviesContainer />}
            </div>
        )
    }
}

const mapStatesToProps = state => ({
    loading: state.movies.loading,
    movies: state.movies.movies

})

export default connect(mapStatesToProps)(Landing)
