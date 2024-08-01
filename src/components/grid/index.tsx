import { PropsWithChildren } from "react";

export interface GridProps {
  className?: string;
}

export const Grid = ({ className, children }: PropsWithChildren<GridProps>) => (
  <div
    className={`w-full grid gap-4 grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ${className}`}
  >
    {children}
  </div>
);
