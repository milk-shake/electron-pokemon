import React from 'react';
import ReactDOM from 'react-dom';

import TrainerPokemonController from "./controllers/trainerPokemonController";

import MetaComponent from "./components/trainer-pokemon/trainer-pokemon-meta.component";
import StatsComponent from "./components/trainer-pokemon/trainer-pokemon-stats.component";
import MovesComponent from "./components/trainer-pokemon/trainer-pokemon-moves.component";
import TraitsComponent from "./components/trainer-pokemon/trainer-pokemon-traits.component";

var trainerPokemon = TrainerPokemonController.getAll()[0];
console.log(trainerPokemon);

trainerPokemon.knownMoves.sort(function(a, b) {
  if(a.slot < b.slot) { return -1 }
  if(a.slot > b.slot) { return 1 }
});


//TODO split stats and meta into their own componenets
//TODO make damageClass a type (so I can make an icon)

class TrainerPokemonSingleView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <MetaComponent
        nickName={trainerPokemon.nickName}
        species={trainerPokemon.name}
        sprite={trainerPokemon.sprite}
        types={trainerPokemon.types}
        trainerName={trainerPokemon.trainerName}
        dateMet={trainerPokemon.dateMet}
        ot={trainerPokemon.oT}
        hp={trainerPokemon.hp}
        gender={trainerPokemon.gender}
        shiny={trainerPokemon.shiny}
        box={trainerPokemon.box}
      />
      <TraitsComponent
        level={trainerPokemon.level}
        characteristic={trainerPokemon.characteristic}
        nature={trainerPokemon.nature}
        ability={trainerPokemon.ability}
      />
      <StatsComponent
        hp={trainerPokemon.hp}
        attack={trainerPokemon.attack}
        defence={trainerPokemon.defence}
        spAttack={trainerPokemon.spAttack}
        spDefence={trainerPokemon.spDefence}
        speed={trainerPokemon.speed}
        evasion={trainerPokemon.evasion}
      />
      <MovesComponent
        moves={ trainerPokemon.knownMoves}
      />
    </div>
  }
}

ReactDOM.render(
  <TrainerPokemonSingleView />,
  document.getElementById('app')
);
