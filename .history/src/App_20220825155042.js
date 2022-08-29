import './App.css';
import SearchCitys from './Inputs';
import ShowWheatherData from './ShowData';
import { useState } from 'react';

function App() {
  const [city, setCity] = useState('');
  const [finalSearch, setFinalSearch] = useState('')
  return (
    <div className="App">
      <SearchCitys 
        setCity={setCity}
        city={city}
        finalSearch={finalSearch}
        setFinalSearch={setFinalSearch}
      />
      <ShowWheatherData
        city={finalSearch}
      />
    </div>
  );
}

export default App;
