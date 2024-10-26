import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function SectionContainer({ children }: Props) {
  return (
    <div className="sticky top-0 z-50 mx-auto max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0">
      {children}
    </div>
  );
}

export function SectionContainer1({ children }: Props) {
  return <div className="sticky top-0 z-50 w-full mx-auto ">{children}</div>;
}
