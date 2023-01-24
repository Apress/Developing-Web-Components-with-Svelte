import { userEvent } from '@storybook/testing-library';
import { render, screen } from '@testing-library/svelte';
import SelectBox from "../src/lib/SelectBox/SelectBox.svelte";

describe("Tests for SelectBox", () => {
  const props = {
    selectOptions: [
      { "text": "aaa" },
      { "text": "bbb" },
      { "text": "ccc" }
    ],
    index: 0,
    disabled: false,
  };

  it("should render properly", () => {
    const result = render(SelectBox, props );
    expect(() => result).not.toThrow();
  });

  it("should select the second option if clicked", () => {
    const result = render(SelectBox, props );
    const selectedText = userEvent.selectOptions(screen.getAllByTestId("selectdropdown")[1], ["text"]);
    expect(selectedText).toContain("bbb");
  });

  it("get a snapshot of component", () => {
    const tree = render(SelectBox, props);
    expect(tree).toMatchSnapshot();
  })
});