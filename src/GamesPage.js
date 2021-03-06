import React from 'react';
import { connect } from 'react-redux';
import GamesList from './GamesList';
import PropTypes from 'prop-types';
import { fetchGames } from './actions';

class GamesPage extends React.Component {
    componentDidMount() {
        this.props.fetchGames();
    }


    render() {
        return (
            <div>
                <h1>Games List</h1>
                <GamesList games={this.props.games}/>
            </div>
        )
    }
}

GamesPage.propTypes = {
    games: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        imagePath: PropTypes.string
        }).isRequired),
    fetchGames: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        games: state.games
    }
}

export default connect(mapStateToProps, {fetchGames})(GamesPage);