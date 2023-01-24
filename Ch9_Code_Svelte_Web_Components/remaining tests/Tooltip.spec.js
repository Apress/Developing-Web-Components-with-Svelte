import { render, screen } from '@testing-library/svelte';
import Tooltip from "../src/lib/Tooltip/Tooltip.svelte";

describe("Tests for Tooltip", () => {
  const props = {
		tip: '<p>This is an informational tooltip - to learn more <a href="/tutorial">click here</a></p>',
		showHTML: "false",
		timeout: "400",
		label: "more info",
  };

  it("should render properly", () => {
    const result = render(Tooltip, props );
    expect(() => result).not.toThrow();
  });

  it("should appear when hovering over target", () => {
    const result = render(Tooltip, props );
  });

  it("should not show any markup when showHTML is true", () => {
    const result = render(Tooltip, { ...props, showHTML: "true" });
  });  

  it("get a snapshot of component", () => {
    const tree = render(Tooltip, props);
    expect(tree).toMatchSnapshot();
  })
});