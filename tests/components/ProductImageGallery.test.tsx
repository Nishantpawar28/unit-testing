import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("ProductImageGallery", () => {
  it("should not render component for empty image url array", () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("should render images when image urls are passed", () => {
    const imageUrls: string[] = ["url1", "url2"];
    render(<ProductImageGallery imageUrls={imageUrls} />);

    const images = screen.getAllByRole("img")
    
    imageUrls.forEach((url, index) => {
        expect(images[index]).toHaveAttribute("src", url)
    })
  });
});
