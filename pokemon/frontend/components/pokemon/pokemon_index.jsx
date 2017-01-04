import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return(
      <div>
        {this.props.pokemon.map(pokemon =>
          (<li key={pokemon.id}>{pokemon.name}
            <img src={pokemon.image_url}/></li>))
        }
      </div>
    );
  }
}

export default PokemonIndex;
