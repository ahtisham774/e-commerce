import { Button } from "./components/ui/button"
import { Badge } from "./components/ui/badge"
import { Card } from "./components/ui/card"
import { ImageGrid } from "./components/image-grid"
import { ProductInfo } from "./components/product-info"
import { DimensionsTable } from "./components/dimensions-table"
import { Categories } from "./components/categories"
import { useEffect, useState } from "react"
import { useAuth } from "../../../context/useAuth"
import { API_URL } from "../../API"

export default function ProductDetails() {








  return (
    <div className="min-h-screen bg-gray-50 my-6 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Product</h1>
          <Button className="bg-pink-500 hover:bg-pink-600 text-white">
            <svg
              className="w-5 h-5 mr-2"
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
            New Product
          </Button>
        </div>
        <p className="text-gray-500 mb-8">
          Here is your products summary with graph view
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <ProductInfo />
            <Categories />
            <DimensionsTable />
          </div>
          <ImageGrid />
        </div>
      </div>
    </div>
  )
}

