import { render, screen } from '@testing-library/svelte';

import Avatar from "../src/lib/Avatar/Avatar.svelte";

describe("Tests for Avatar", () => {
  const props = { 
    src: "",
    status: "available",
    statusSize: "medium",
  };

  it("should render properly", async() => {
    const result = render(Avatar, { props });
    expect(() => result).not.toThrow();
  });

  it("get a snapshot of component", () => {
    const tree = render(Avatar, props);
    expect(tree).toMatchSnapshot();
  })
});