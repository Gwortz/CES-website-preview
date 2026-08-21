export default function Stars({
  className = "h-5 w-5",
  label = "Star rating placeholder",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <span role="img" aria-label={label} className="inline-flex gap-0.5 text-copper-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={className}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 1.7l2.5 5.2 5.7.7-4.2 4 1.1 5.7L10 14.5l-5.1 2.8 1.1-5.7-4.2-4 5.7-.7L10 1.7z" />
        </svg>
      ))}
    </span>
  );
}
