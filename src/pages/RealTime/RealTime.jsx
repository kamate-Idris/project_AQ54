import "./RealTime.css"
import { useEffect, useState } from 'react';
import { baseURl } from '../../utils';

import RealTimeTable from "../../components/Table/RealTimeTable";

const RealTime = () => {
    const [firstSensor, setFirstSensor] = useState([])
    const [secondSensor, setSecondSensor] = useState([])

    /**
     * Fonction pour recuperer les donnees des capteurs
     * @param {string} sensor 
     */
    const fetchSensorDataAsync = async (sensor) => {
        try {
            const result = await baseURl(`getCurrentValues/${sensor}`);
            if (sensor === "SMART188") {
                setFirstSensor(result)
            } else {
                setSecondSensor(result)
            }
        } catch (error) {
            console.error(error);
        }
    };

    // Appel de la fonction de recuperation des donnnees des capteurs chaque 5 s
    useEffect(() => {
        const interval = setInterval(() => {
            fetchSensorDataAsync("SMART188");
            fetchSensorDataAsync("SMART189");
        }, 5000)
        return () => clearInterval(interval)
    }, []);



    return (
        firstSensor &&
        <div className="realtime">
            <div className="realtime-container">
                <RealTimeTable stationInfo={firstSensor} />
                <RealTimeTable stationInfo={secondSensor} />
            </div>
        </div>
    )
}

export default RealTime
