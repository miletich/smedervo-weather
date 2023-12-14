import { type PropsWithChildren } from 'react';

export default function ContentWrapper({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {children}
    </div>
  );
}
