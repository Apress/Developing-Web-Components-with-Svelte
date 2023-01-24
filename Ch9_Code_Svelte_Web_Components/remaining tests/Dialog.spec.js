import { render, screen } from '@testing-library/svelte';
import { fireEvent } from '@testing-library/dom';
import Dialog from "../src/lib/Dialog/Dialog.svelte";

describe("Tests for Dialog", () => {
  const props = { };

  it("should render properly", async() => {
    const result = render(Dialog, { props });
    expect(() => result).not.toThrow();
  });

  it("should show the dialog when clicking the button", async() => {
    const result = render(Dialog, { props });
    fireEvent.click(screen.getByTestId("buttonDialog"));
    expect(screen.getByRole("dialog")).tobeVisible;
  })

  it("should disappear when close button clicked", async() => {
    const result = render(Dialog, { props });
    fireEvent.click(screen.getByTestId("buttonDialog"));
    expect(screen.getByRole("dialog")).tobeVisible;
    fireEvent.click(screen.getByTestId("buttonDialog"));
    expect(screen.getByRole("dialog")).not.tobeVisible;
  })

  it("get a snapshot of component", () => {
    const tree = render(Dialog, props);
    expect(tree).toMatchSnapshot();
  })
});