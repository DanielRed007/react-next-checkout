import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
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
});
