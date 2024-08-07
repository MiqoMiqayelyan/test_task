import axios from 'axios';
import { useState } from 'react';

export const useMovieSearch = ({ title }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true);

            const options = {
                method: 'GET',
                // api from https://rapidapi.com
                url: `https://moviesdatabase.p.rapidapi.com/titles/search/title/${title}`,
                params: {
                  exact: 'true',
                  titleType: 'movie'
                },
                headers: {
                  'x-rapidapi-key': 'c8861c435cmsh489e5512be1c2e8p1810b5jsncbd1b60e25ca',
                  'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com'
                }
              };

            const response = await axios.request(options);

            setData(response.data);

        } catch(error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    const onSearch = () => {
        fetchData();
    }


    return {
        data,
        loading,
        error,
        onSearch
    }
}
