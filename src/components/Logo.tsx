type LogoProps = {
  /** "dark" = for use on a navy ground, "light" = for use on white */
  tone?: "dark" | "light";
  className?: string;
};

export default function Logo({ tone = "light", className = "" }: LogoProps) {
  return (
    <span
      className={`font-bold tracking-tight select-none ${className}`}
      aria-label="Shift"
    >
      <span className={tone === "dark" ? "text-white" : "text-ink"}>shift</span>
      <span className="text-forge">.</span>
    </span>
  );
}
