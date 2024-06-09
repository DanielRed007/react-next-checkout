import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { HomeContextProvider } from "@/app/context/HomeContext";
import { CardItem } from "../../app/shared/components/CardItem";
import { videoGames } from "@/app/mock/data";

describe("Card Item", () => {
  it("should render a card item", () => {
    render(
      <HomeContextProvider>
        <CardItem card={videoGames[0]} />
      </HomeContextProvider>
    );

    const cardTitle = screen.getByText(
      "The Legend of Zelda: Breath of the Wild"
    );
    const cardDescription = screen.getByText(
      "A critically acclaimed action-adventure game."
    );

    expect(cardTitle).toBeInTheDocument();
    expect(cardDescription).toBeInTheDocument();
  });
});
