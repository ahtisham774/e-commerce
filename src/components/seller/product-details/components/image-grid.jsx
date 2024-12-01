import { Card } from "./ui/card"

export function ImageGrid() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Images</h3>
      <div className="grid grid-cols-2 gap-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className={`aspect-video relative rounded-lg overflow-hidden ${i === 1 ? "col-span-2" : ""}`}>
            <img
              src="/assets/detail.jpg"
              alt={`Product image ${i}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </Card>
  )
}

