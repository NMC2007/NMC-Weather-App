import ProviderWeatherData from './context/weatherContext';
import DefaultLayout from './layouts';

function App() {
    return (
        <ProviderWeatherData>
            <div className="App">
                <DefaultLayout />
            </div>
        </ProviderWeatherData>
    );
}

export default App;
