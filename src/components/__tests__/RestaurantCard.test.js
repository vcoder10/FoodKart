import React from "react";
import { render, screen } from "@testing-library/react";

import RestaurantCard from "../ResturantCard";
import MockData from "../mockData/RestaurantCardMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// global.fetch = jest.fn(()=>
// Promise.resolve({
//   json: ()=> Promise.resolve(MOCK_DATA)
// }))
it("should test Restaurant card props", () => {
  render(
    <BrowserRouter>
      <RestaurantCard {...MockData} />
    </BrowserRouter>
  );
  //   console.log(MockData);
  const resName = screen.getByText("Burger King");
  expect(resName).toBeInTheDocument();
});
