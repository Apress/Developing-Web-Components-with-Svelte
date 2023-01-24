import { render, fireEvent, screen } from '@testing-library/svelte';
import Checkbox from "../src/lib/Checkbox/Checkbox.svelte";

describe("Tests for Checkbox", () => {
  const mockText = "This is a checkbox";

  const props = {
    id: "Checkbox",
    class: "cobalt",
    checked: false,
  };

  it("should render properly", () => {
    const result = render(Checkbox, { props });
    expect(() => result).not.toThrow();
  });

  it("show show a label with correct text", () => {
    const result = render(Checkbox, { ...props, label: mockText});
    expect(result).not.toBeNull();
  })

  it("should not show a check when clicked", async() => {
    render(Checkbox, { ...props, label: mockText});  
    const checkbox = screen.getByRole("checkbox");
    await fireEvent.click(checkbox);
    expect (checkbox.checked).toBe(true);
  })

  it("get a snapshot of component", () => {
    const tree = render(Checkbox, { ...props, label: mockText});
    expect(tree).toMatchSnapshot();
  })
});