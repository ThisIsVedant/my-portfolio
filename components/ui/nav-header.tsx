'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

type NavLink = { title: string; id: string };
type Position = { left: number; width: number; opacity: number };

export function NavHeader({
  links,
  onNavigate,
}: {
  links: NavLink[];
  onNavigate: (id: string, title: string) => void;
}) {
  const [position, setPosition] = useState<Position>({ left: 0, width: 0, opacity: 0 });

  return (
    <ul
      className="relative mx-auto flex w-fit rounded-full border border-gray-300 dark:border-white/20 bg-white dark:bg-white/5 p-1"
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
    >
      {links.map(({ title, id }) => (
        <Tab key={title} setPosition={setPosition} onClick={() => onNavigate(id, title)}>
          {title}
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
}

const Tab = ({
  children,
  setPosition,
  onClick,
}: {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
  onClick: () => void;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onClick={onClick}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({ width, opacity: 1, left: ref.current.offsetLeft });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs font-medium uppercase text-white mix-blend-difference md:px-4 md:py-2 md:text-sm"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }: { position: Position }) => (
  <motion.li
    animate={position}
    className="absolute z-0 h-7 rounded-full bg-black dark:bg-white md:h-9"
  />
);
