import React, { useEffect, useState } from "react";
import { Input, Button, Container, Message } from "semantic-ui-react";
import useRequestHandler from "../hooks/useRequestHandler";

const CityInput = ({ setWeatherData }) => {
    const { getData, getExampleData } = useRequestHandler();
    const [city, setCity] = useState("");
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const data = getExampleData();
        data.city = "Lisbon";
        setWeatherData(data);
    }, []);

    const handleCityInput = (_, { value }) => {
        setCity(value);
    };

    const handleError = (errorMessage) => {
        setWeatherData(null);
        setError(errorMessage);
    }

    const handleSearchButtonClick = async () => {
        setIsLoading(true);
        const data = await getData(`https://goweather.herokuapp.com/weather/${city}`);
        setIsLoading(false);
        if (data.error) {
            handleError(data.error);
        } else {
            if (data.wind === "") {
                handleError("Weather forecast for this city was not found.");
                return;
            }
            setError(null);
            data.city = city;
            setWeatherData(data);
        }
    };

    return (<Container fluid style={{ display: "flex", flexDirection: "column"}}>
        <Container style={{ display: "flex", justifyContent: "center", marginTop: "10px", height: "40px" }}>
            <Input
                size="huge"
                icon="search"
                placeholder="London, Madrid, Lisbon..."
                value={city}
                onChange={handleCityInput}
                style={{ width: "60%", marginRight: "5px" }}
            />
            <Button primary loading={isLoading ? true : false} disabled={city === "" ? true : false} onClick={handleSearchButtonClick}>
                Search
            </Button>
        </Container>
        {error && (
            <Container textAlign="center" style={{ width: "60%", marginTop: "10px" }}>
                <Message color="red">{error}</Message>
            </Container>
        )}
    </Container>);

}

export default CityInput;