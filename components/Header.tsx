'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileNav from './MobileNav';
import { SectionContainer1 } from './SectionContainer';
import ThemeSwitch from './ThemeSwitch';
import headerNavLinks from '@/content/headerNavLinks';

export default function Header() {
  const pathName = usePathname();

  return (
    <SectionContainer1>
      <header className=" bg-white dark:bg-black py-3 md:py-3">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div>
            <Link
              href="/"
              className={classNames(
                `horizontal-underline hidden text-3xl font-extrabold sm:block text-black dark:text-white`,
                {
                  'horizontal-underline-active': pathName === '/',
                },
              )}
              aria-label="v."
            >
              v.
            </Link>
          </div>
          <div className="flex items-center space-x-3 text-base leading-5">
            <div className="hidden space-x-5 sm:flex">
              {headerNavLinks.map(({ title, id }) => {
                return (
                  <div key={title}>
                    <button
                      key={title}
                      onClick={() => {
                        const ref = document?.querySelector(id);

                        ref?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="horizontal-underline text-base"
                      aria-label={title}
                    >
                      <span
                        className={`font-semibold tracking-wide dark:text-white text-black`}
                      >
                        {title}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center">
              <ThemeSwitch />
              <MobileNav />
            </div>
          </div>
        </div>
      </header>
    </SectionContainer1>
  );
}
