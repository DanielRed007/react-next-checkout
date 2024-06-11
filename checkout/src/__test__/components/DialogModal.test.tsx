import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { DialogModal } from "../../app/shared/components/DialogModal";
import { HomeContextProvider } from "@/app/context/HomeContext";

describe("Dialog Modal", () => {
  it("should render empty when state context for modal is set to false", async () => {
    const { container } = render(
      <HomeContextProvider>
        <DialogModal />
      </HomeContextProvider>
    );

    expect(container.querySelector("div")).toBeNull();
  });
});
