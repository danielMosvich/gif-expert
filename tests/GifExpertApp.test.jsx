import { fireEvent, render, screen } from "@testing-library/react";
import GifExpertApp from "../src/GifExpertApp";

describe("Pruebas en el componente GifExpertApp", () => {
  test("el boton Tenor debe funcionar", () => {
    render(<GifExpertApp />);
    const button_tenor = screen.getByRole("button", { name: "tenor-button" });
    fireEvent.click(button_tenor);
    const button_tennor_class = button_tenor.className;
    const button_giphy_class = screen.getByRole("button", { name: "giphy-button" }).className;
    expect(button_tennor_class).toMatch("active");
    expect(button_giphy_class).not.toMatch("active");
    
  });
  test("el boton Giphy debe funcionar", () => {
    render(<GifExpertApp />);
    const button_giphy = screen.getByRole("button", { name: "giphy-button" });
    fireEvent.click(button_giphy);
    const button_giphy_class = button_giphy.className;
    const button_tennor_class = screen.getByRole("button", { name: "tenor-button" }).className;
    expect(button_giphy_class).toMatch("active");
    expect(button_tennor_class).not.toMatch("active");

  });
  test('El mensaje inicial debe mostrarse', () => {
    const { container:DOM } = render(<GifExpertApp />);
    const element = DOM.querySelector(".card-default");
    expect(element).toBeTruthy();
  })
  
});
