export const getGifs = async (category, service) => {
    let url

    if (service === "giphy") {
        url = `https://api.giphy.com/v1/gifs/search?api_key=0hhOxirl2oCYiP0OEaZLahkUPTLBsiEh&q=${category}`;
        const response = await fetch(url);
        const { data = [] } = await response.json();

        const gifs = data.map((img) => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.fixed_height_small.url,
                width: img.images.fixed_height_small.width,
                height: img.images.fixed_height_small.height,
                original: img.images.original.url
            };
        });
        return gifs;
    }
    if (service === "tenor") {
        url = `https://tenor.googleapis.com/v2/search?q=excited&key=AIzaSyCOXj5OWovvp9aeFziMPmus3d9B5xK-6nY&client_key=my_test_app&q=${category}&limit=50`
        const response = await fetch(url);
        const data = await response.json();
        const gifs = data.results.map((img) => {
            return {
                id: img.id,
                title: img.title,
                url: img.media_formats.tinygif.url,
                width: img.media_formats.tinygif.dims[0],
                height: img.media_formats.tinygif.dims[1],
                original:img.media_formats.gif.url
            }
        })
        return gifs
    }
    // console.log(gifs);
    // return gifs
};