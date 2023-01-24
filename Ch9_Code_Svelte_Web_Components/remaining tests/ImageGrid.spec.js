import { render, screen } from '@testing-library/svelte';
import Table from "../src/lib/ImageGrid/Table.svelte";

describe("Tests for ImageGrid", () => {
  const props = { 
    columnCount: "1",
    rowCount: "4", 
    border: "none",
    placeholderImages: "false",
    itemCount: "12",
  };

  it("should render properly without images", async() => {
    const result = render(Table, { props });
    expect(() => result).not.toThrow();
  });

  it("should render properly if images added", async() => {
    const result = render(Table, { ...props, placeholderImages: "true" });
    expect(() => result).not.toThrow();
  });

  it("should render properly if images added with text labels", async() => {
    const result = render(Table, { ...props, placeholderImages: "true" });
    const imageCount = result.getAllByTestId("placeholderImage");
    const labelCount = result.getAllByTestId("placeholderLabel");
    expect(imageCount.length).toBe(12);
    expect(labelCount.length).toBe(12)
  }); 

  it("get a snapshot of component", () => {
    const tree = render(Table, props);
    expect(tree).toMatchSnapshot();
  })
});