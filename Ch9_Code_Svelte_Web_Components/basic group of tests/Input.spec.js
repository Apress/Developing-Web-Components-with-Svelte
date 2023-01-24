import { render, screen } from '@testing-library/svelte';
import Input from "../src/lib/Input/Input.svelte";

describe("Tests for Input", () => {
  const props = {
    id: "Input",
    class: "cobalt",
    disabled: false,
    placeholder: "example text",
  };

  it("should render properly", () => {
    const result = render(Input, props );
    expect(() => result).not.toThrow();
  });

  it("show show a textbox with correct placeholder text", () => {
    const result = render(Input, props);
    const inputPlaceholder = screen.getByRole("textbox").placeholder;
    expect(inputPlaceholder).toEqual("example text");
  })

  it("get a snapshot of component", () => {
    const tree = render(Input, props);
    expect(tree).toMatchSnapshot();
  })
});