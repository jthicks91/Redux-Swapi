import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getCharacter } from "../actions";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getCharacter();
  }

  render() {
    if (this.props.fetching) {
      <h2>Fetching Stars Wars Characters....</h2>;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  fetching: state.charsReducer.fetching,
  error: state.charsReducer.error
});

export default connect(
  mapStateToProps,
  {
    getCharacter
  }
)(CharacterListView);
