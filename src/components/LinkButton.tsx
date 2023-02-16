import { ReactElement } from "react";

interface LinkButtonProps {
  name: string;
  url: string;
  tooltip: string;
  icon: ReactElement;
  variant?: boolean;
}

export function LinkButton({
  name,
  url,
  tooltip,
  icon,
  variant,
}: LinkButtonProps) {
  return (
    <a
      href={url}
      target="_blank"
      title={tooltip}
      className={`${
        variant
          ? "border-2 border-white hover:bg-white hover:text-gray-600 transition-all hover:ring-4 hover:ring-white/60"
          : "bg-gray-700 hover:brightness-90 transition-all hover:ring-4 hover:ring-gray-600/60"
      } flex items-center gap-2  px-4 py-3 rounded-full `}
    >
      {icon}
      {name}
    </a>
  );
}
