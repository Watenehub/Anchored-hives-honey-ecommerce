import React, { useState } from 'react'

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(-1)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {items.map((item, index) => (
        <div key={index} className="border border-amber-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <button
            onClick={() => toggle(index)}
            className={`w-full px-6 py-5 text-left flex justify-between items-center transition-colors ${
              openIndex === index ? 'bg-amber-100' : 'bg-amber-50 hover:bg-amber-100'
            }`}
          >
            <span className="font-semibold text-amber-900 text-lg">{item.question}</span>
            <span className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''} text-amber-700`}>
              ▼
            </span>
          </button>
          {openIndex === index && (
            <div className="px-6 py-5 text-gray-700 border-t border-amber-200">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Accordion
