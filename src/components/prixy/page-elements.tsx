import type { ReactNode } from "react";
import { ArrowDown } from "lucide-react";

type PageIntroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <header className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-intro-description">{description}</p>
      <ArrowDown className="page-intro-arrow" size={24} aria-hidden="true" />
    </header>
  );
}

type EditorialPanelProps = {
  children: ReactNode;
  className?: string;
};

export function EditorialPanel({ children, className = "" }: EditorialPanelProps) {
  return <section className={`editorial-panel ${className}`}>{children}</section>;
}

export function LeafItem({ children }: { children: ReactNode }) {
  return (
    <li className="leaf-item">
      <span className="list-index" aria-hidden="true">+</span>
      <span>{children}</span>
    </li>
  );
}

export function PullQuote({ children }: { children: ReactNode }) {
  return <p className="pull-quote">{children}</p>;
}