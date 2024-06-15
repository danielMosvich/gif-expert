import { renderHook, waitFor } from "@testing-library/react"
import useFetchGifs from "../../src/hooks/useFetchGifs"

describe("Pruebas en el hoock useFetchGifs", () => {
    test('debe de regresar el estado inicial', () => {
        const { result: { current: { images, isLoading } } } = renderHook(() => useFetchGifs("valorant", "giphy"))
        expect(images).toEqual([])
        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy()
    })
    test('debe de retornar arreglo de imagenes y el true', async () => {
        const { result } = renderHook(() => useFetchGifs("valorant", "giphy"))
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
        )
        const {images, isLoading} = result.current
        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy()
    })

})