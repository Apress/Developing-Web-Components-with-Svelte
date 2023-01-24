import { render, screen } from '@testing-library/svelte';
import { fireEvent } from '@testing-library/dom';
import Alert from "../src/lib/Alert/Alert.svelte";

jest.useFakeTimers();

describe("Tests for Alert", () => {
  const props = {
		show: true,
		description: "An info description",
		title: "Simple Info",
		icon: "true",
		type: "info",
    close: "false",
  };

  it("should render properly", async() => {
    const result = await(render(Alert, { props }));
    expect(() => result).not.toThrow();
  });

  // https://testing-library.com/docs/svelte-testing-library/example
  it("should disappear when close button clicked", async() => {
    const result = await(render(Alert, { props }));
    const alertDialog = fireEvent.click(screen.getByRole("alert"));
    expect(alertDialog).tobeNull;
  })

  it("get a snapshot of component", () => {
    const tree = render(Alert, props);
    expect(tree).toMatchSnapshot();
  })
});