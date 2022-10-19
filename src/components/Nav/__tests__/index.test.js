import React from "react";
//render function-"renders" the component. Jest creates a simulated DOM in a Node.js environment to approximate the DOM
//cleanup function- remove components from the DOM to prevent memory leaking and data collisions between tests that could corrupt test results.
import { render, cleanup } from "@testing-library/react";
//jest-dom offers access to custom matchers that are used to test DOM elements
import "@testing-library/jest-dom/extend-expect";
//component to be tested
import Nav from "..";

const categories = [
  { name: "portraits", description: "Portraits of people in my life" },
];
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

///////////configure testing environment////////

//afterEach global function from Jest:used to ensure there is no leftover memory data-which could give false results 
afterEach(cleanup);

                      //declare the component we're testing
describe("Nav component", () => {

  // First Test- baseline test- to see if it renders
  it("renders", () => {
    render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
      />
    );
  });


  //Second Test-Snapshot test
  it("matches snapshot", () => {
    // asFragment function, returns a snapshot of the Nav component
    const { asFragment } = render(<Nav />);
    ///// assert value comparison below////
    //expect function- is the matcher
    //.toMatchSnapshot(), is our snapshot assertion.
    expect(asFragment()).toMatchSnapshot();
  });
});

//Emoji visibility test
describe("emoji is visible", () => {
  it("inserts emoji into the h2", () => {
    //query to return the element containing the emoji
    const { getByLabelText } = render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
      />
    );
    //use the getByLabelText method and query by the aria-label
    //toHaveTextContent()- is a custom matcher
    expect(getByLabelText("camera")).toHaveTextContent("📸");
  });
});


//link visibility test
describe("links are visible", () => {
  it("inserts text into the links", () => {
    const { getByTestId } = render(<Nav
    categories={categories}
    setCurrentCategory={mockSetCurrentCategory}
    currentCategory={mockCurrentCategory}
  />);

    //use the getByTestId method to query by the data-testid that we added
    //toHaveTextContent()- is a custom matcher
    expect(getByTestId("link")).toHaveTextContent("Oh Snap!");
    expect(getByTestId("about")).toHaveTextContent("About me");
    //two expect staments- if either assertion fails- test will fail
  });
});