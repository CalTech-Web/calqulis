"use client";

import { useState } from "react";

type FaqItem = {
  q: string;
  a: string;
};

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-12 divide-y divide-slate-200">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q} className="py-6">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <h3 className="text-lg font-semibold text-slate-900">{item.q}</h3>
              <svg
                className={`h-5 w-5 shrink-0 text-brand-indigo transition-transform duration-300 ease-out ${
                  isOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 7.5l5 5 5-5"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "mt-2 grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="leading-relaxed text-slate-600">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
