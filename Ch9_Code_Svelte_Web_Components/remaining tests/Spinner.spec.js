import { render, screen } from '@testing-library/svelte';
import { fireEvent } from '@testing-library/dom';
import Spinner from "../src/lib/Spinner/Spinner.svelte";

describe("Tests for Spinner", () => {
  const props = { 
    color: "#19247c",
    duration: "0.75s",
    size: "40",
    variant: "circle",
  };

  it("should render properly", async() => {
    const result = render(Spinner, { props });
    expect(() => result).not.toThrow();
  });

  it("get a snapshot of component", () => {
    const tree = render(Spinner, props);
    expect(tree).toMatchSnapshot();
  })
});