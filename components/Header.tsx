// 'use client';

// import classNames from 'classnames';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import MobileNav from './MobileNav';
// import SectionContainer from './SectionContainer';
// import ThemeSwitch from './ThemeSwitch';
// import headerNavLinks from '@/content/headerNavLinks';
// import { useEffect, useState } from 'react';

// export default function Header() {
//   const [activeSection, setActiveSection] = useState(headerNavLinks[0].id);

//   useEffect(() => {
//     const observerOptions = {
//       root: null, // Default: viewport
//       threshold: 0.8, // Trigger when 50% of the section is visible
//     };

//     console.log('Hello:0');

//     const handleIntersect = (
//       entries: { isIntersecting: any; target: { id: any } }[],
//     ) => {
//       entries.forEach((entry: { isIntersecting: any; target: { id: any } }) => {
//         if (entry.isIntersecting) {
//           console.log('Hello:1', entry.target.id, activeSection);

//           setActiveSection(`#${entry.target.id}`); // Update active section
//         }
//       });
//     };

//     const observer = new IntersectionObserver(handleIntersect, observerOptions);

//     // Observe all sections defined by headerNavLinks
//     headerNavLinks.forEach(({ id }) => {
//       const section = document.querySelector(id);
//       if (section) {
//         observer.observe(section);
//       }
//     });

//     // Clean up the observer when the component unmounts
//     return () => {
//       headerNavLinks.forEach(({ id }) => {
//         const section = document.querySelector(id);
//         if (section) {
//           observer.unobserve(section);
//         }
//       });
//     };
//   }, []);

//   const activeSectionData = headerNavLinks.find(
//     (section) => section.id === activeSection,
//   );

//   console.log('Hello:2', activeSectionData?.id, activeSectionData?.lightColor);

//   const pathName = usePathname();

//   return (
//     <SectionContainer>
//       <header className=" bg-transparent py-5 md:py-10">
//         <div className="mx-auto flex max-w-5xl items-center justify-between">
//           <div>
//             <Link
//               href="/"
//               className={classNames(
//                 `horizontal-underline hidden text-3xl font-extrabold sm:block dark:${
//                   activeSectionData?.id === '#works'
//                     ? 'text-white'
//                     : activeSectionData?.darkColor
//                 } ${
//                   activeSectionData?.id === '#works'
//                     ? 'text-white'
//                     : activeSectionData?.lightColor
//                 }`,
//                 {
//                   'horizontal-underline-active': pathName === '/',
//                 },
//               )}
//               aria-label="v."
//             >
//               v.
//             </Link>
//           </div>
//           <div className="flex items-center space-x-3 text-base leading-5">
//             <div className="hidden space-x-5 sm:flex">
//               {headerNavLinks.map(({ title, id }) => {
//                 return (
//                   <div key={title}>
//                     <button
//                       key={title}
//                       onClick={() => {
//                         const ref = document?.querySelector(id);

//                         ref?.scrollIntoView({ behavior: 'smooth' });
//                       }}
//                       className="horizontal-underline text-base"
//                       aria-label={title}
//                     >
//                       {/* {
//                         <span className="font-semibold tracking-wide text-gray-900 dark:text-gray-100">
//                           {title}
//                         </span>
//                       } */}
//                       <span
//                         className={`font-semibold tracking-wide dark:${activeSectionData?.darkColor} ${activeSectionData?.lightColor}`}
//                       >
//                         {title}
//                       </span>
//                     </button>
//                   </div>
//                 );
//               })}
//             </div>
//             <div className="flex items-center">
//               <ThemeSwitch />
//               <MobileNav activeSectionData={activeSectionData} />
//             </div>
//           </div>
//         </div>
//       </header>
//     </SectionContainer>
//   );
// }

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
