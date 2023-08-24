import { createContext, useEffect, useState } from "react";
import { requestData } from "../helper";

export const SocialContext = createContext();

const modeLS = JSON.parse(localStorage.getItem('isMode')) || false;
const toggleLS = JSON.parse(localStorage.getItem('isToggle')) || false;

export const SocialProvider = ({children}) => {

    // estado que maneja el modo claro y modo oscuro
    const [isMode, setIsMode] = useState(modeLS);

    // estado que maneja el estado del toggle(active, desactive)
    const [isToggle, setIsToggle] = useState(toggleLS);

    // estado que maneja el array de los followers
    const [followers, setFollowers] = useState([]);

    requestData()
      .then((res) => {
        setFollowers(res);
      });
    
    //? funcion que devuelve los dos primeros digitos y la palabra 'k'
    const lessAmount = (number) => {
      return Math.floor(number / 1000) + 'k';
    };

    // useEffect que maneja el localStorage del modo oscuro y el toggle para activarlo
    useEffect(() => {
        localStorage.setItem('isMode', isMode);
        localStorage.setItem('isToggle', isToggle);
    }, [isMode, isToggle]);

    return (
        <SocialContext.Provider value={{
            isMode,
            setIsMode,
            isToggle,
            setIsToggle,
            followers,
            lessAmount
        }}>
            {children}
        </SocialContext.Provider>
    )
}