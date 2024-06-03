import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CheckoutMainTable from "../../app/shared/components/CheckoutMainTable";
import { videoGames } from "@/app/mock/data";

describe("Checkout Main Table", () => {
  it("should render a card item", async () => {
    render(<CheckoutMainTable data={videoGames} />);

    // first card is rendered
    const firstCardTitle = await screen.getByText(
      "The Legend of Zelda: Breath of the Wild"
    );
    const firstCardISBN = await screen.getByText("978-0-87424-858-2");

    // last card is rendered
    const lastCardTitle = await screen.getByText("Halo Infinite 2");
    const lastCardISBN = await screen.getByText("978-0-7415-3157-9");

    expect(firstCardTitle).toBeInTheDocument();
    expect(firstCardISBN).toBeInTheDocument();

    expect(lastCardTitle).toBeInTheDocument();
    expect(lastCardISBN).toBeInTheDocument();
  });
});
