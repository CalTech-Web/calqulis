import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export default function Section({ children, className = "", containerClassName = "" }: SectionProps) {
  return (
    <section className={className}>
      <div className={`mx-auto max-w-7xl px-6 ${containerClassName}`}>{children}</div>
    </section>
  );
}
