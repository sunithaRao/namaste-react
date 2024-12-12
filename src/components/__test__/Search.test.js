import { render, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/dom";

import { act } from "react-dom/test-utils";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(
        MOCK_DATA.data.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    },
  });
});

global.fetchData = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search Res List for Pizza input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(8);

  const searchButton = screen.getByTestId("searchButton");
  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "pizza" } });

  fireEvent.click(searchButton);

  const cards = screen.getAllByTestId("resCard");

  expect(cards.length).toBe(1);
});

// it("Should render the Body component with Search", async () => {
//   await act(async () =>
//     render(
//       <BrowserRouter>
//         <Body />
//       </BrowserRouter>
//     )
//   );

//const logoutButton = screen.getByTestId("searchButton");

//   const searchBtn = screen.getByRole("button", { name: "Search" });

//   const searchInput = screen.getByTestId("searchInput");

//   fireEvent.change(searchInput, { target: { value: "hut" } });

//   fireEvent.click(searchBtn);

//   const cards = screen.getAllByTestId("resCard");

//   expect(cards.length).toBe(4);
