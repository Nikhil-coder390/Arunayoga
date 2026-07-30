"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-gray-50 py-3 px-4 sm:px-6 rounded-lg mb-6 border border-gray-100"
    >
      <ol className="flex items-center flex-wrap gap-2 text-sm text-gray-600 font-primary">
        <li className="flex items-center gap-1">
          <Link
            href="/"
            className="hover:text-primary transition-colors flex items-center gap-1 text-gray-500 hover:underline"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
            {item.href && idx < items.length - 1 ? (
              <Link
                href={item.href}
                className="hover:text-primary transition-colors text-gray-600 hover:underline"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-primary" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
