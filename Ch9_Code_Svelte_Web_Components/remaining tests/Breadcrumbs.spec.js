import { render, screen } from '@testing-library/svelte';
import { fireEvent } from '@testing-library/dom';
import Breadcrumbs from "../src/lib/Breadcrumbs/Breadcrumbs.svelte";

describe("Tests for Breadcrumbs", () => {
  const props = { 
    divider: "/",
    image: false,
    breadcrumbItems: [
      { href: "/", text: "Dashboard" },
      { href: "/reports", text: "Annual reports" },
      { href: "/reports/2019", text: "2019" },
    ],
  };

  it("should render properly", async() => {
    const result = render(Breadcrumbs, { props });
    expect(() => result).not.toThrow();
  });

  it("should show the Breadcrumbs when clicking the button", async() => {
    const result = render(Breadcrumbs, { props });
    const links = result.getAllByTestId("breadcrumbLink");
    expect(links.length).toBe(2);
  })

  it("get a snapshot of component", () => {
    const tree = render(Breadcrumbs, props);
    expect(tree).toMatchSnapshot();
  })
});