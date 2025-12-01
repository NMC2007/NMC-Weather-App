import { useState, useEffect } from 'react';

import DefaultLayout from './layouts';

function App() {
    const [informationAPI, setInformationAPI] = useState();

    useEffect(() => {
        fetch(
            'https://api.openweathermap.org/data/2.5/weather?lat=21.028511&lon=105.804817&appid=c385bf013ab54351d57c2493b91862b4&lang=vi',
        )
            .then((resp) => resp.json())
            .then((information) => {
                setInformationAPI(information);
            });
    }, []);

    console.log(informationAPI);

    return (
        <div className="App">
            <DefaultLayout>
                <h1>Hello World!</h1>
                {informationAPI && (
                    <ul>
                        <li>{informationAPI.weather[0].main}</li>
                        <li>{informationAPI.weather[0].description}</li>
                        <li>{informationAPI.name}</li>
                    </ul>
                )}
            </DefaultLayout>
        </div>
    );
}

export default App;
