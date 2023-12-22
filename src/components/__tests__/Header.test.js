import React from "react";
const { render, screen } = require("@testing-library/react");
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter as Router } from "react-router-dom";
it("should cart items quantity", () => {
  render(
    <Provider store={appStore}>
      <Router>
        <Header />
      </Router>
    </Provider>
  );
  //querying
  const text = screen.getByText(/cart/i);
  // assertion
  expect(text).toBeInTheDocument();
});
it("should render header with cart item 0", () => {
  render(
    <Provider store={appStore}>
      <Router>
        <Header />
      </Router>
    </Provider>
  );
  //querying
  const cartItems = screen.getByText(/Cart/);
  // assertion
  expect(cartItems).toBeInTheDocument();
});
