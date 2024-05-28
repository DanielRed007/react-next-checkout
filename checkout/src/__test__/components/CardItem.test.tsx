import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { CardItem } from "../../app/shared/components/CardItem";
import { videoGames } from "@/app/mock/data";

describe("Page", () => {
  it("should render a card item", () => {
    render(<CardItem card={videoGames[0]} />);

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
