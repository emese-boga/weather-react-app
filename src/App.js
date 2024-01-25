import 'bootstrap/dist/css/bootstrap.min.css';
import "semantic-ui-css/semantic.min.css";
import { HeaderSubheader, Header, Icon, Container } from "semantic-ui-react";
import CityInput from "./components/CityInput";
import { useState } from 'react';
import WeatherDisplay from './components/WeatherDisplay';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  return (
      <Container fluid style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <Header as="h1" icon>
          <Icon name="leaf" />
          Weather App
          <HeaderSubheader>
            Check the current weather forecast for any city.
          </HeaderSubheader>
        </Header>
        <CityInput setWeatherData={setWeatherData}/>
        {
          weatherData && <WeatherDisplay weather={weatherData} />
        }
      </Container>
  );
}

export default App;
