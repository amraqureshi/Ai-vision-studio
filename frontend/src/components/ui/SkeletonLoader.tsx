import type { ReactNode } from "react";

interface SkeletonLoaderProps {
  rows?: number;
  columns?: number;
}

const SkeletonLoader = ({ rows = 4, columns = 4 }: SkeletonLoaderProps) => {
  return (
    <div className="grid gap-4">
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div
          key={rowIndex}
          className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
        >
          {Array.from({ length: columns }).map((_, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="h-32 rounded-[1.5rem] bg-slate-900/80 shadow-inner shadow-slate-950/10 animate-pulse"
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
