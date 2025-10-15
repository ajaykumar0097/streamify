import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
    part: 'id, snippet',
    maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  // const options = {
  //   method: 'GET',
  //   url: BASE_URL,
  //   params: {
  //     // relatedToVideoId: '7ghhRHRP6t4',
  //     part: 'id,snippet',
  //     type: 'video',
  //     maxResults: '50'
  //   },
  //   headers: {
  //     'X-RapidAPI-Key': '5a81670cb6mshc05ab6d3d1572c5p12747cjsn283804107781',
  //     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  //   }
  // };

  export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    return data
  }