import axios from 'axios';

export async function getImg(searchName) {
  const baseUrl = 'https://pixabay.com';
  const endPoint = '/api';
  const params = new URLSearchParams({
    key: '48897316-c1284323f9ede48e892c0fd4f',
    q: searchName,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const response = await axios.get(baseUrl + endPoint + `?${params}`);
  return response.data;
}
