export interface WeatherInfo {
  main: string;
  description: string;
  icon: string;
}

export interface WeatherData {
  name: string;
  weather: WeatherInfo[];
  main: {
    temp: number;
  };
}

export interface Card {
  id: number;
  data: WeatherData;
  time: string;
}
