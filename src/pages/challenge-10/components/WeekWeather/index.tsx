import climaWeatherClouds from "@/assets/images/clima-weather-clouds.svg";
import climaWeatherCloudy from "@/assets/images/clima-weather-cloudy.svg";
import climaWeatherRain from "@/assets/images/clima-weather-rain.svg";
import climaWeatherSun from "@/assets/images/clima-weather-sun.svg";
import climaWeatherThunder from "@/assets/images/clima-weather-thunder.svg";
import Image from "next/image";
import { Day, WeekWeatherContainer } from "./styles";

export function WeekWeather() {
  return (
    <WeekWeatherContainer>
      <Day>
        <h4>Amanhã</h4>
        <Image src={climaWeatherClouds} alt="Imagem do clima do dia." />
        <p>
          21° <span>16°</span>
        </p>
      </Day>
      <Day>
        <h4>Sexta</h4>
        <Image src={climaWeatherSun} alt="Imagem do clima do dia." />
        <p>
          28° <span>16°</span>
        </p>
      </Day>
      <Day>
        <h4>Sábado</h4>
        <Image src={climaWeatherRain} alt="Imagem do clima do dia." />
        <p>
          20° <span>16°</span>
        </p>
      </Day>
      <Day>
        <h4>Domingo</h4>
        <Image src={climaWeatherThunder} alt="Imagem do clima do dia." />
        <p>
          28° <span>26°</span>
        </p>
      </Day>
      <Day>
        <h4>Segunda</h4>
        <Image src={climaWeatherCloudy} alt="Imagem do clima do dia." />
        <p>
          26° <span>20°</span>
        </p>
      </Day>
    </WeekWeatherContainer>
  );
}
