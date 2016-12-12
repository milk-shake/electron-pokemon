import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";

@connect((store) => {
  return {
    pokemon: store.trainerPokemonReducer.party
  }
})
export default class Boxes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="box-list">
      <div className="box">
        <h1 className="box__header">Box 1</h1>
        <div className="box__contents">
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
        </div>
      </div>
      <div className="box">
        <h1 className="box__header">Box 2</h1>
        <div className="box__contents">
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
        </div>
      </div>
      <div className="box">
        <h1 className="box__header">Box 3</h1>
        <div className="box__contents">
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
        </div>
      </div>
      <div className="box">
        <h1 className="box__header">Box 4</h1>
        <div className="box__contents">
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
        </div>
      </div>
      <div className="box">
        <h1 className="box__header">Box 5</h1>
        <div className="box__contents">
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
        </div>
      </div>
      <div className="box">
        <h1 className="box__header">Box 6</h1>
        <div className="box__contents">
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
        </div>
      </div>
      <div className="box">
        <h1 className="box__header">Box 7</h1>
        <div className="box__contents">
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
        </div>
      </div>
      <div className="box">
        <h1 className="box__header">Box 8</h1>
        <div className="box__contents">
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
        </div>
      </div>
      <div className="box">
        <h1 className="box__header">Box 9</h1>
        <div className="box__contents">
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
        </div>
      </div>
      <div className="box">
        <h1 className="box__header">Box 10</h1>
        <div className="box__contents">
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
          <div className="box__item"><img src="./img/sprites/pokemon/1.png"/></div>
        </div>
      </div>
    </div>
  }
}
