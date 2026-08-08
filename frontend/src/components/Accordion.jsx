import React, { useState } from 'react'

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index} className="overflow-hidden">
          <button
            onClick={() => toggle(index)}
            className="w-full px-4 py-3 text-left flex justify-between items-center transition-colors"
          >
            <span className="font-semibold text-gray-800 text-sm">{item.question}</span>
            <span className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
          {openIndex === index && (
            <div className="px-6 py-4 text-gray-700">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Accordion
