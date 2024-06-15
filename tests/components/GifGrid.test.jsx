import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
jest.mock("../../src/hooks/useFetchGifs");
import useFetchGifs from "../../src/hooks/useFetchGifs";

describe("Pruebas con GifGrid", () => {
  test("debe de mostrar el loading inicial", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    const { container: DOM } = render(
      <GifGrid category="valorant" service="giphy" />
    );
    // screen.debug()
    expect(DOM.querySelector(".loader")).toBeTruthy();
  });
  test("debe de mostrar la lista de items cuando se carguen las imagenes", () => {
    const gifs = [
      {
        id: "120939019802",
        title: "VALORANT GIF",
        url: "https://media.giphy.com/media/120939019802/giphy.gif",
        height: 128,
        original: "https://media.giphy.com/media/120939019802/giphy.gif",
      },
      {
        id: "1209390198022",
        title: "VALORANT 2",
        url: "https://media.giphy.com/media/120939019802/giphy.gif",
        height: 128,
        original: "https://media.giphy.com/media/120939019802/giphy.gif",
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: true,
    });
    render(<GifGrid category="valorant" service="giphy" />);
    expect( screen.getAllByRole("img").length).toBe(2);
  });
});
