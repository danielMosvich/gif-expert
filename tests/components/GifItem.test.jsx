import { render, screen } from "@testing-library/react";
import GifItem from "../../src/components/GifItem";

describe("Component GifItem", () => {
  const id = Math.random().toString(36).substring(7);
  const url = "https://i.imgur.com/xxx.gif" //<- example url
  const original = "https://i.imgur.com/xxx.gif" //<- example url
  test("Debe hacer match con el snapshot", () => {
    const { container } = render(
      <GifItem
        url={url}
        id={id}
        title="Test"
        original={original}
      />
    );
    expect(container).toMatchSnapshot();
  });
  test('debe mostrar la imagen con al url', () => {
    render(<GifItem url={url} id={id} title="Test" original={original} />);
    // screen.debug()
    const {src, alt} = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe("Test");
  })
  
});
