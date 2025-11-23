import { useState, useEffect } from 'react';

function App() {
    const [informationAPI, setInformationAPI] = useState();

    useEffect(() => {
        fetch(
            'https://api.openweathermap.org/data/2.5/weather?lat=21.028511&lon=105.804817&appid=c385bf013ab54351d57c2493b91862b4',
        )
            .then((resp) => resp.json())
            .then((information) => {
                setInformationAPI(information);
            });
    }, []);

    console.log(informationAPI);

    return (
        <div className="App">
            <h1>Hello World!</h1>
            <ul>
                {informationAPI && (
                    <>
                        <li>{informationAPI.weather[0].main}</li>
                        <li>{informationAPI.weather[0].description}</li>
                        <li>{informationAPI.name}</li>
                    </>
                )}
            </ul>
        </div>
    );
}

export default App;
