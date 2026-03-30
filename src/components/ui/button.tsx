import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};
export function Button({ className, children }: Props) {
  return (
    <button
      className={`px-6 py-4 flex items-center gap-4 font-ws uppercase font-bold rounded-lg cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
