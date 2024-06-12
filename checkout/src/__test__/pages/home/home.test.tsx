import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Page from "../../../app/page";
import { HomeContextProvider } from "../../../app/context/HomeContext";

describe("Page", () => {
  it("should render homepage title", () => {
    render(
      <HomeContextProvider>
        <Page />
      </HomeContextProvider>
    );

    const homeTitle = screen.getByText("Retro Store");
    screen.debug(undefined, 20000);
    expect(homeTitle).toBeInTheDocument();
  });

  it("should render Cart modal on click", async () => {
    render(
      <HomeContextProvider>
        <Page />
      </HomeContextProvider>
    );

    // Get icon button
    const cartIcon = await screen.getByTestId("cart-icon");
    // Fire odal display
    fireEvent.click(cartIcon);

    // Cart modal must be in the document
    const cartModal = await screen.getByText("Shopping Cart");
    expect(cartModal).toBeInTheDocument();

    const cartModalCloseBtn = screen.getByTestId("cart-close-btn");

    await waitFor(() => {
      expect(cartModalCloseBtn).toBeInTheDocument();

      fireEvent.click(cartModalCloseBtn);
      expect(cartModal).not.toBeInTheDocument();
    });

    screen.debug(undefined, 20000);
  });
});
