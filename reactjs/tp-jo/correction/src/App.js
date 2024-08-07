import './App.css';
import {useState, useEffect} from 'react';
import { Team } from './components/Team';
import { TeamsHeader } from './components/TeamsHeader';
import _sortBy from 'lodash-es/sortBy';
import _reverse from 'lodash-es/reverse';

export default function App() {
  const COMPACT = 5;
  const FULL = 12;
  const [teams, setTeams] = useState([]);
  const [numVisible, setNumVisible] = useState(COMPACT)
  const api = 'http://localhost:3500/countries';

  useEffect(() => {
    fetch(api)
      .then(res => res.json())
      .then(countries => {
        const sortByMedalsAsc = _sortBy(countries, [
          country => country.medals[0],
          country => country.medals[1],
          country => country.medals[2],
        ]);
        setTeams(_reverse(sortByMedalsAsc));
      })
  }, [api])

  function onClick() {
    if(numVisible === COMPACT) {
      setNumVisible(FULL);
    } else {
      setNumVisible(COMPACT);
    }
  }

  return (
    <div className="App">
      <h1 className='m-2'>TP JO</h1>
      <div className='container'>
        <TeamsHeader />
        { 
          teams.map((team, index) => (
            <Team key={index} team={team} rank={index+1} />
          )).slice(0,numVisible)
        }
        <div className='row'>
          <div className='col-12'>
            <button onClick={onClick} className='btn btn-outline-dark rounded-4 mt-3'>
              <i className={'bi bi-chevron-' + (numVisible === 5 ? 'down' : 'up')}></i>
              <span className='ms-3'>
                { numVisible === COMPACT ? 'Plus' : 'Moins'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}