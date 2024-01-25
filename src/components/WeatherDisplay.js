import { Header, Container, Label } from "semantic-ui-react";

const WeatherDisplay = ({ weather }) => {
    const maxWindDay = weather.forecast.reduce((max, current) => {
        const currentWindSpeed = parseInt(current.wind.split(" ")[0]);
        const maxWindSpeed = parseInt(max.wind.split(" ")[0]);

        return currentWindSpeed > maxWindSpeed ? current : max;
    }, weather.forecast[0]);

    const minWindDay = weather.forecast.reduce((min, current) => {
        const currentWindSpeed = parseInt(current.wind.split(" ")[0]);
        const minWindSpeed = parseInt(min.wind.split(" ")[0]);

        return currentWindSpeed < minWindSpeed ? current : min;
    }, weather.forecast[0]);

    const maxTempDay = weather.forecast.reduce((max, current) => {
        const currentTemp = parseInt(current.temperature.split(" ")[0]);
        const maxTemp = parseInt(max.temperature.split(" ")[0]);

        return currentTemp > maxTemp ? current : max;
    }, weather.forecast[0]);

    const minTempDay = weather.forecast.reduce((min, current) => {
        const currentTemp = parseInt(current.temperature.split(" ")[0]);
        const minTemp = parseInt(min.temperature.split(" ")[0]);

        return currentTemp < minTemp ? current : min;
    }, weather.forecast[0]);

    return (<Container style={{ marginTop: "20px", textAlign: "center" }}>
        <Header as="h2">{`Weather for ${weather.city}`}</Header>
        <Container text className="mt-3">
            <Label size="big">{`Temperature: ${weather.temperature}`}</Label>
        </Container>
        <Container text className="mt-3">
            <Label size="big">{`Description: ${weather.description}`}</Label>
        </Container>
        <Container text className="mt-3">
            <Label size="big">{`Wind: ${weather.wind}`}</Label>
        </Container>
        <Header as="h2">{"Forecast upcoming 3 days"}</Header>
        <Container text className="mt-3">
            <Label size="big">{`Highest temperature: day ${maxTempDay.day}`}</Label>
        </Container>
        <Container text className="mt-3">
            <Label size="big">{`Lowest temperature: day ${minTempDay.day}`}</Label>
        </Container>
        <Container text className="mt-3">
            <Label size="big">{`Highest wind speed: day ${maxWindDay.day}`}</Label>
        </Container>
        <Container text className="mt-3">
            <Label size="big">{`Lowest wind speed: day ${minWindDay.day}`}</Label>
        </Container>
    </Container>);
}

export default WeatherDisplay;
