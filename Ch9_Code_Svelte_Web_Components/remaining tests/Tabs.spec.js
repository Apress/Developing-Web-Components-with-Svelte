import { fireEvent, render, screen } from '@testing-library/svelte';
import Tabs from "../src/lib/Tabs/Tabs.svelte";

describe("Tests for Tabs", () => {
  const props = {
    vertical: false,
    items: [
      { "id": 1, "name": "Tab 1", "text": "This is a test"},
      { "id": 2, "name": "Tab 2", "text": "Here is tab 2"},
      { "id": 3, "name": "Tab 3", "text": "And this is tab 3"},
    ],
  };

  it("should render properly", () => {
    const result = render(Tabs, props );
    expect(() => result).not.toThrow();
  });

  it("should change text if clicking on tab 2", async()=> {
    const result = render(Tabs, props );
    const tabResult = await(screen.getAllByRole("")[0]);
    const tabHeader = result.getByTextId("tabHeader")[1];
    await fireEvent.click(tabHeader);
    expect(screen.getByTextId("tabContent")[1]).toBe("Here is tab 2")
  })

  it("get a snapshot of component", () => {
    const tree = render(Tabs, props);
    expect(tree).toMatchSnapshot();
  })
});