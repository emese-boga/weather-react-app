import axios from "axios";

function useRequestHandler() {
    const example = {
        "temperature": "+19 °C",
        "wind": "22 km/h",
        "description": "Partly cloudy",
        "forecast": [
            {
                "day": "1",
                "temperature": "25 °C",
                "wind": "33 km/h"
            },
            {
                "day": "2",
                "temperature": "23 °C",
                "wind": "28 km/h"
            },
            {
                "day": "3",
                "temperature": "27 °C",
                "wind": "26 km/h"
            }
        ]
    }

    const getData = async (url) => {
        return await axios.get(url).then(handleResponse).catch(handleError);
    }

    const getExampleData = () => {
        return example;
    }

    const handleResponse = (response) => {

        return response.data;
    }

    const handleError = (error) => {
        return ({ "error": error.message });
    }

    return { getData, getExampleData };
}

export default useRequestHandler;
