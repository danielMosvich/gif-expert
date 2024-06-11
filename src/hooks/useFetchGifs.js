import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

const useFetchGifs = (category,service) => {
    const [images, setImages] = useState([]);   
    const [isLoading, setIsLoading] = useState(true);
    const getImages = async ()=>{
        const newImages = await getGifs(category, service)
        setImages(newImages)
        setIsLoading(false)
    }
    useEffect(() => {
        // if(category === null){
        //     console.log("no category")
        //     setImages([])
        //     setIsLoading(false)
        // }
        getImages()
    }, [category]);

    return {
        images,
        isLoading
    }
}
// AIzaSyCOXj5OWovvp9aeFziMPmus3d9B5xK-6nY
export default useFetchGifs
