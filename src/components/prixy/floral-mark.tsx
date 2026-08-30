type FloralMarkProps = {
  className?: string;
};

export function FloralMark({ className = "" }: FloralMarkProps) {
  return (
    <span className={`floral-mark ${className}`} aria-hidden="true">
      <span className="floral-petal floral-petal-top" />
      <span className="floral-petal floral-petal-right" />
      <span className="floral-petal floral-petal-bottom" />
      <span className="floral-petal floral-petal-left" />
      <span className="floral-center" />
    </span>
  );
}