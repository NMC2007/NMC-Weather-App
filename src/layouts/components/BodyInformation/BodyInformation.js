import { useContext } from 'react';
import InfomationCard from '~/components/InfomationCard';
import { WeatherContext } from '~/context';

function BodyInformation() {
    const { dataWeather } = useContext(WeatherContext);

    // nếu tồn tại context thì cardInformation = context.cardInformation
    const cardInformations = dataWeather?.cardInformation;

    return (
        cardInformations && (
            <>
                {cardInformations.map((cardInformation) => (
                    <InfomationCard
                        key={cardInformation.title}
                        title={cardInformation.title}
                        parameter={cardInformation.parameter}
                        icon={cardInformation.icon}
                        measurement={cardInformation.measurement}
                        suggest={cardInformation.suggest}
                    />
                ))}
            </>
        )
    );
}

export default BodyInformation;
