import { render, screen } from '@testing-library/svelte';
import { fireEvent } from '@testing-library/dom';
import Slider from "../src/lib/Slider/Slider.svelte";

describe("Tests for Slider", () => {
  const props = {
    id: "Slider",
  };

  it("should render properly", () => {
    const result = render(Slider, { props });
    expect(() => result).not.toThrow();
  });

  it("should show a new value when slider handle moved", async() => {
    render(Slider, props);  
    const slider = screen.getByRole("slider");
    fireEvent.change(slider, {target: {value: '23'}});
    expect(slider.value).toBe('23');
  })

  it("get a snapshot of component", () => {
    const tree = render(Slider, props);
    expect(tree).toMatchSnapshot();
  })
});