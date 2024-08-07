import React from 'react';

import { MovieItems } from '../MovieItems';

import { Loader } from '../Loader';

export const SearchResults = ({
    data,
    loading,
    error
}) => {

    if(error) {
        return <div>Please try Again</div>;
    }

    if(loading) {
        return <Loader />;
    }

    return (
        <div>
            {data.map((item) => (
                <MovieItems url={item.primaryImage.url} alt={item.primaryImage.captionplainText} text={item.originalTitleText.text} />
            ))}
        </div>
    )
}
