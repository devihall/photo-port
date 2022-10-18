import React from "react";
//render function-"renders" the component. Jest creates a simulated DOM in a Node.js environment to approximate the DOM
//cleanup function is used to remove components from the DOM to prevent memory leaking and data collisions between tests that could corrupt test results.
import { render, cleanup } from "@testing-library/react";
//jest-dom offers access to custom matchers that are used to test DOM elements
import "@testing-library/jest-dom/extend-expect";
//component to be tested
import About from "..";

///////////configure testing environment////////

//afterEach global function from Jest:to ensure there is no leftover memory data-could give false results 
afterEach(cleanup);

//declare the component we're testing
describe("About component", () => {
  // First Test- to verify component is rendering
  it("renders", () => {
    render(<About />);
  });

  // Second Test-compare snapshot versions of the DOM node structure.
  it("matches snapshot DOM node structure", () => {
    // asFragment function, returns a snapshot of the About component
    const { asFragment } = render(<About />);
    //the expect function with a matcher to assert something about a value- toMatchSnapshot matcher function(?) to assert that snapshots will match
    expect(asFragment()).toMatchSnapshot();
  });
});




