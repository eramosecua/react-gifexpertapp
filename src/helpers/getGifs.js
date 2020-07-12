export const getGifs = async (category) => {

  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=1x6cQxAdx014BGHe4jDpgPYe2mLjth1r`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map(elem => {
    return {
      id: elem.id,
      title: elem.title,
      url: elem.images?.downsized_medium.url

    }
  })

  return gifs;

}