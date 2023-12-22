import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import MenuItems from "../MenuItems";
import appStore from "../../utils/appStore";
import React from "react";
import Header from "../Header";
import MOCK_DATA from "../mockData/cartMockData.json";
import "@testing-library/jest-dom";

it("should lead restaurant menu component", async () => {
  console.log(MOCK_DATA);
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <MenuItems list={MOCK_DATA} showItems={"true"} />
        </Provider>
      </BrowserRouter>
    );
  });
  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  expect(screen.getByText("Cart(0)")).toBeInTheDocument();
  fireEvent.click(addBtns[0]);
  expect(screen.getByText("Cart(1)")).toBeInTheDocument();
});
