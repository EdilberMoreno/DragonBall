import axios from 'axios';

export const fetchCharacters = async () => {
  try {
    const response = await axios.get('https://dragonball-api.com/api/characters?limit=58');
    return response.data.items;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw new Error("Error al cargar los datos");
  }
};