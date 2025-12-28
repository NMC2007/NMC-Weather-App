// import { useState, useEffect } from 'react';

// import InformationCard from './components/InfomationCard/InformationCard';
// import Wrapper from './components/Wrapper';
// import Wrapper from './components/Wrapper';
import DefaultLayout from './layouts';

function App() {
    // const [informationAPI, setInformationAPI] = useState();

    // call api cái này sau nhấc sang file config
    // useEffect(() => {
    //     fetch(
    //         'https://api.openweathermap.org/data/2.5/weather?lat=21.028511&lon=105.804817&appid=c385bf013ab54351d57c2493b91862b4&lang=vi',
    //     )
    //         .then((resp) => resp.json())
    //         .then((information) => {
    //             setInformationAPI(information);
    //         });
    // }, []);

    // console.log(informationAPI);

    return (
        <div className="App">
            <DefaultLayout/>
        </div>
    );
}

export default App;
