import React, { useState } from 'react';
import { useMovieSearch } from "../../hooks/useMovieSearch";

import { SearchResults } from '../SearchResults';
import { SearchForm } from '../SearchForm';

export const MovieSearchPage = () => {
    const [title, setTitle] = useState('');
    const { 
        data,
        loading,
        error, onSearch
    } = useMovieSearch({ title });

    const handleChange = (event) => {
        const value = event.target.value;

        setTitle(value);
    }
   
    return (
        <div>
            <SearchForm title={title} handleChange={handleChange} onSearch={onSearch} />
            <SearchResults data={data} loading={loading} error={error} />
        </div>
    )
}

