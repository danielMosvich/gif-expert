import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("addCategory component", () => {
  test("debe cambiar el valor de la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: "Valorant" } });
    expect(input.value).toBe("Valorant");
  });

  test("debe de llamar al onNewCategory", () => {
    const inputValue = "valorant";
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe(inputValue);
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });
  test("no debe de llamar al onNewCategory si no se envía ningun valor", () => {
    const onNewCategory = jest.fn();
    const setCategories = jest.fn();
    render(
      <AddCategory
        onNewCategory={onNewCategory}
        setCategories={setCategories} 
      />
    );
    const form = screen.getByRole("form");

    fireEvent.submit(form);

    expect(onNewCategory).not.toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledWith(null);
  });
});
