import { Card } from "./ui/card"

export function Categories() {
  const categories = ["Category 1", "Category 2", "Category 3"]

  return (
    <Card className="p-6 mb-8">
      <h3 className="text-lg font-semibold mb-4">Categories</h3>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li
            key={category}
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            {category}
          </li>
        ))}
      </ul>
    </Card>
  )
}

