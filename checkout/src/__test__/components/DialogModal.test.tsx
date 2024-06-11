import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { DialogModal } from "../../app/shared/components/DialogModal";
import { HomeContextProvider, HomeContext } from "@/app/context/HomeContext";

describe("Dialog Modal", () => {
  it("should render empty when state context for modal is set to false", async () => {
    const { container } = render(
      <HomeContextProvider>
        <DialogModal />
      </HomeContextProvider>
    );

    expect(container.querySelector("div")).toBeNull();
  });

  it("should render Dialog Modal when state is set to open", async () => {
    const value = {
      dataTable: [],
      isCartOpen: false,
      isOpenedCartDialog: true,
      toggleCart: jest.fn(),
      closeCart: jest.fn(),
      addItem: jest.fn(),
      gamesCart: [],
      hideCartDialog: jest.fn(),
    };

    render(
      <HomeContext.Provider value={value}>
        <DialogModal />
      </HomeContext.Provider>
    );

    const modalTitle = screen.getByText(/Item Already in the Cart/i);

    expect(modalTitle).toBeInTheDocument();
  });
});
