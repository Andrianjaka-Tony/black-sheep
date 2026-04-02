import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};
export function Button({ className, children }: Props) {
  return (
    <button
      className={`group px-4 py-3 w-fit md:px-5 md:py-3.5 lg:px-6 lg:py-4 flex items-center gap-2 md:gap-3 lg:gap-4 text-xs md:text-sm lg:text-base font-ws uppercase font-bold rounded-lg cursor-pointer transition-all duration-200 hover:scale-105 ${className}`}
    >
      {children}
    </button>
  );
}
