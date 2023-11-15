import axios from 'axios';

const getAnime = async () => {
  try {
    const response = await axios.get('https://api.jikan.moe/v4/anime');
    return response.data;
  } catch (error) {
    console.error('Error fetching data', error);
    return [];
  }
};

export default getAnime;