import { useState } from 'react'
import Image from 'next/image'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  {
    question: 'What features does DealerCenter offer for managing deals?',
    answer:
      'DealerCenter provides Desking & Deal Management, Finance & Insurance Calculation, and integration with over 1200 lenders for sending and receiving deals.',
  },
  {
    question: 'Can I manage my inventory from my phone?',
    answer:
      'Yes, with DealerCenter’s Mobile App, you can upload inventory, scan VINs, manage photos and videos, and access auction run lists.',
  },
  {
    question: 'How does DealerCenter support Buy Here Pay Here (BHPH)?',
    answer:
      'DealerCenter’s BHPH module includes portfolio management, collections workflow, recurring payments, and QuickBooks integration.',
  },
  {
    question: 'Does DealerCenter integrate with accounting software?',
    answer:
      'Yes, DealerCenter integrates seamlessly with QuickBooks for accounting management.',
  },
  {
    question: 'How can I improve my digital marketing with DealerCenter?',
    answer:
      'DealerCenter offers automated classified listings, SEO services, PPC ad management, and retargeting on the Google Display Network.',
  }
  
];

export function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32 flex justify-center"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative max-w-3xl w-full">
        <div className="text-center mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-gray-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mt-16 space-y-8 mx-auto w-full max-w-2xl"
        >
          {faqs.map((faq, faqIndex) => (
            <li key={faqIndex} className="border-b border-slate-200 pb-6">
              <div
                className="cursor-pointer flex justify-between items-center"
                onClick={() => toggleAnswer(faqIndex)}
              >
                <h3 className="font-display text-lg leading-7 text-slate-900">
                  {faq.question}
                </h3>
                <span className="ml-2 text-xl">
                  {activeIndex === faqIndex ? '-' : '+'}
                </span>
              </div>
              {activeIndex === faqIndex && (
                <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
