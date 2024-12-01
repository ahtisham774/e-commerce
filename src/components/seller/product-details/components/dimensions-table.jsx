import { Card } from "./ui/card"
import { Input } from "./ui/input"

export function DimensionsTable() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Dimensions</h3>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Length (mm)
            </label>
            <Input type="number" defaultValue="00" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Number of units available
            </label>
            <Input type="number" defaultValue="00" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Width (mm)
          </label>
          <Input type="number" defaultValue="00" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Height (mm)
          </label>
          <Input type="number" defaultValue="00" />
        </div>
      </div>
    </Card>
  )
}

