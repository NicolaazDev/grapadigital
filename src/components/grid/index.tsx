import { PropsWithChildren } from "react";

export interface GridProps {
  className?: string;
}

export const Grid = ({ className, children }: PropsWithChildren<GridProps>) => (
  <div
    className={`w-full overflow-y-scroll h-auto grid gap-4 grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 ${className}`}
  >
    {children}
  </div>
);
