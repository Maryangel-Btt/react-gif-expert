


export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=LzXelV8OWKihwSTcT7kqLfxnBPmNTId0&q=valorant=${ category }&limit=10`
    const resp = await fetch( url );
    const { data } = await resp.json();

    console.log(resp);

    
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;

}