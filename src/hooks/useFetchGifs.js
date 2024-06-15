import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

const useFetchGifs = (category, service) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const getImages = async () => {
        const newImages = await getGifs(category, service)
        setImages(newImages)
        setIsLoading(false)
    }
    useEffect(() => {
        getImages()
    }, [category]);
    return {
        images,
        isLoading
    }
}
export default useFetchGifs
