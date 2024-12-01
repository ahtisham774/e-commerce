'use client'

import { useState } from 'react'
import { Dialog } from './ui/dialog'
import { Button } from './ui/button'
import { Input } from './ui/input'

const steps = [
  {
    title: 'Product images',
    description: 'Add product images'
  },
  {
    title: 'Product information',
    description: 'Add product details'
  },
  {
    title: 'Pricing',
    description: 'Set product pricing'
  },
  {
    title: 'Dimensions',
    description: 'Add product dimensions'
  }
]

export function ProductModal({ open, onClose }) {
  const [currentStep, setCurrentStep] = useState(0)

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      onClose()
      setCurrentStep(0)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <div className="fixed inset-0 bg-black/50" />
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="bg-white rounded-lg w-full max-w-md mx-4">
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4">{steps[currentStep].title}</h2>
            
            {currentStep === 0 && (
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="aspect-square rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center"
                  >
                    <button className="text-gray-400">+ Add Image</button>
                  </div>
                ))}
              </div>
            )}

            {currentStep === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Memory</label>
                  <Input placeholder="8GB unified memory" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Storage</label>
                  <Input placeholder="512GB SSD storage" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Dimensions</label>
                  <Input placeholder="12 x 8 x 0.6 inches" />
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Base Price</label>
                  <Input type="number" placeholder="0.00" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Discounted Price</label>
                  <Input type="number" placeholder="0.00" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Tax Rate (%)</label>
                  <Input type="number" placeholder="0" />
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Height</label>
                  <Input type="number" placeholder="0.0" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Width</label>
                  <Input type="number" placeholder="0.0" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Weight</label>
                  <Input type="number" placeholder="0.0" />
                </div>
              </div>
            )}
          </div>

          <div className="border-t p-4 flex justify-end gap-2">
            {currentStep > 0 && (
              <Button variant="outline" onClick={handlePrevious}>
                Previous
              </Button>
            )}
            <Button 
              className="bg-pink-500 hover:bg-pink-600 text-white"
              onClick={handleNext}
            >
              {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  )
}

