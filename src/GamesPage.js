import React from 'react';
import { connect } from 'react-redux';
import GamesList from './GamesList';
import PropTypes from 'prop-types';

class GamesPage extends React.Component {
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
        }).isRequired).isRequired
}

const mapStateToProps = (state) => {
    return {
        games: state.games
    }
}

export default connect(mapStateToProps)(GamesPage);