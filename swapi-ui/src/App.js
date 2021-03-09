import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { GET_PLANETS } from './action-creators';
import { Planets } from './components/planetsView/Planets';

const _App = ({ loading, list, getPlanets }) => {

  return (
    <div id="app">
      <h1>SWAPI UI</h1>

      <div className="spacing">
        <button className="inline" onClick={getPlanets}>Get Planets</button>
      </div>

      { loading &&
        <div className="spacing">Loading...</div>
      }

      { !loading &&
        <ul className="spacing">
          {list.map(item =>
            <li key={item.name}>{item.name}</li>
          )}
        </ul>
      }

      { !loading &&
        <Planets list={list} />
      }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.loading,
    list: state.list
  }
};

const mapDispatchToProps = {
  getPlanets: GET_PLANETS,
};

export { _App };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(_App);
