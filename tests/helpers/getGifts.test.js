import { getGifs } from "../../src/helpers/getGifs";

describe('Pruebas de la funcion getGifts', () => {
    test('debe retornar un arreglo de gifs', async () => {
        const gifs = await getGifs("valorant",
            "giphy"
        )
        expect(gifs.length).toBeGreaterThan(0)
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
            width: expect.any(Number),
            height: expect.any(Number),
            original: expect.any(String),
        })
    })

});