import React from 'react';
import PropTypes from 'prop-types';

export default function GamesList({ games }) {
    const emptyMessage = (
        <p>There are no games yet in your collection.</p>
    );

    const gamesList = (
        <p>Games List</p>
    );

    return (
        <div>
            {games.length === 0 ? emptyMessage : gamesList}
        </div>
    );
}

GamesList.propTypes = {
    games: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        imagePath: PropTypes.string
        }).isRequired).isRequired
}