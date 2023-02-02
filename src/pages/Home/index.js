import React, { Fragment, useEffect, useState } from 'react'
import styled from 'styled-components'

import Header from '../../components/Header/index';
import Movie from '../../components/Movie';
import Slide from '../../components/Slide/index';
import axios from 'axios';

import './styles.js';

function Home() {

    const API_KEY = 'd2dce543a682bd8a0f04a001902ca720'
    const API_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`

    const [movies, setMovies] = useState([])

    const getMovies = async () => {
        const response = await axios.get(API_URL)

        setMovies(response.data.results)
    }

    useEffect(() => {
        getMovies()
    }, [])

    return ( 
        <Fragment>
            <Header/>
            <Slide/>
            <Movie
                title="Popular Movies"
                movies={movies}
            />
        </Fragment>
    ) 
}

export default Home