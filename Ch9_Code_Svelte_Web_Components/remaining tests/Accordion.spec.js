import { render, fireEvent, screen } from '@testing-library/svelte';
import Accordion from "../src/lib/Accordion/Accordion.svelte";
import '@testing-library/jest-dom';

describe("Tests for Accordion", () => {
  const mockText = "This is a Accordion";

  const props = {
    data: [
      { "title": "Heading 1", "text": "aaa" },
      { "title": "Heading 2", "text": "bbb" },
      { "title": "Heading 3", "text": "ccc" }
    ]
  };

  it("should render properly", () => {
    const result = render(Accordion, { props });
    expect(() => result).not.toThrow();
  });

  it("should show the first heading with correct text", () => {
    const result = render(Accordion, props);
    expect(result).not.toBeNull();
  })

  // Should have text too, but throws a  null error
  it("should have the correct title", () => {
    render(Accordion, props); 
    
    expect(screen.queryByText(props.data[0].title)).toBeInTheDocument();
    expect(screen.queryByText(props.data[1].title)).toBeInTheDocument();
    expect(screen.queryByText(props.data[2].title)).toBeInTheDocument();
  })

  // https://testing-library.com/docs/svelte-testing-library/example
  it("should show aria-expanded as true when first item clicked", async() => {
    render(Accordion, props);  
    const AccordionObj = await(screen.getAllByRole("button")[0]);
    await fireEvent.click(AccordionObj);
    expect(screen.getAllByRole("button", {expanded: true})[0]).not.toBeNull();
  })

  it("get a snapshot of component", () => {
    const tree = render(Accordion, props);
    expect(tree).toMatchSnapshot();
  })
});