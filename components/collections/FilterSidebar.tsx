'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { filterOptions } from '@/lib/data';

interface FilterSidebarProps {
  activeFilters: Record<string, string[]>;
  onChange: (group: string, value: string) => void;
}

const groups = [
  { key: 'categories', label: 'Jewelry Type', options: filterOptions.categories },
  { key: 'gemstones', label: 'Gemstone', options: filterOptions.gemstones },
  { key: 'metals', label: 'Metal Type', options: filterOptions.metals },
  { key: 'eras', label: 'Era', options: filterOptions.eras },
];

export default function FilterSidebar({ activeFilters, onChange }: FilterSidebarProps) {
  const [open, setOpen] = useState<Record<string, boolean>>({ categories: true });

  const toggle = (key: string) => setOpen((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <aside className="w-56 flex-shrink-0">
      <p
        className="text-[10px] tracking-[0.3em] uppercase text-[#2C2C2C]/40 mb-8"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        Refine
      </p>

      <div className="space-y-0 divide-y divide-[#2C2C2C]/08">
        {groups.map((group) => (
          <div key={group.key} className="py-5">
            <button
              onClick={() => toggle(group.key)}
              className="flex items-center justify-between w-full text-left"
            >
              <span
                className="text-[11px] tracking-[0.2em] uppercase text-[#2C2C2C]/60"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {group.label}
              </span>
              <ChevronDown
                size={14}
                strokeWidth={1.5}
                className={`text-[#2C2C2C]/30 transition-transform duration-300 ${
                  open[group.key] ? 'rotate-180' : ''
                }`}
              />
            </button>

            {open[group.key] && (
              <ul className="mt-4 space-y-3">
                {group.options.map((opt) => {
                  const active = activeFilters[group.key]?.includes(opt);
                  return (
                    <li key={opt}>
                      <button
                        onClick={() => onChange(group.key, opt)}
                        className={`text-[11px] leading-relaxed transition-colors ${
                          active
                            ? 'text-[#2C2C2C]'
                            : 'text-[#2C2C2C]/40 hover:text-[#2C2C2C]/70'
                        }`}
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: active ? 400 : 300 }}
                      >
                        {active && <span className="mr-2 text-[#A8935A]">—</span>}
                        {opt}
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}
