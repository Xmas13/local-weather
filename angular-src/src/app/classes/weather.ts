// This class is for managing all data that we want to use from the weather API.
// It is implemented in the Weather Component
export class Weather {
  city: string;
  description: string;
  temp_kel: number;
  temp_fahr: number;
  temp_cel: number;
  temp_max_kel: number;
  temp_min_kel: number;
  temp_max_fahr: number;
  temp_min_fahr: number;
  temp_max_cel: number;
  temp_min_cel: number;
  wind_mps: number;
  wind_mph: number;
  sunrise: string;
  sunset: string;
}
