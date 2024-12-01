import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Card } from "./ui/card"

export function ProductInfo() {
  return (
    <Card className="mb-8">
      <div className="p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Product Details</h2>
            <Badge className="bg-green-100 text-green-800">Stock Available</Badge>
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Add Product Image
            </Button>
            <Button variant="outline">Edit Product</Button>
          </div>
        </div>

        <div className="mb-6">
          <img
            src="/assets/detail.jpg"
            alt="Product"
            className="rounded-lg w-full max-w-md"
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Product Title 1</h3>
          <p className="text-gray-500 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="space-y-2">
            <h4 className="font-medium">Set Availability</h4>
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-16 h-2 rounded-full bg-pink-500"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

