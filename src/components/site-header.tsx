'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import site from '../../content/data/site.json';

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header" id="header">
      <div className="container header-inner">
        <button
          className={`menu-toggle${open ? ' is-open' : ''}`}
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="site-navigation"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
        {open && (
          <button
            className="menu-backdrop"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
        )}
        <nav
          id="site-navigation"
          className={`site-navigation${open ? ' is-open' : ''}`}
          aria-label="Main navigation"
          onKeyDown={(event) => {
            if (event.key === 'Escape') setOpen(false);
          }}
        >
          {site.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
