import axios from 'axios';

export const fetchPosts = async (search, page)=> {
  const SEARCH_PARAMS = new URLSearchParams({
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: page,
    per_page: 20,
  });

  
    const response = await axios.get(
      `https://pixabay.com/api/?key=34960745-b530bdf219145f51506c30578&q=${search}&${SEARCH_PARAMS}`
    );
    return response.data;

}
