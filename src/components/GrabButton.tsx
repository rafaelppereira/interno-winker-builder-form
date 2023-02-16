import { useEditor } from "@craftjs/core";
import { ReactElement } from "react";
import { Button } from "./user/Button";

interface GrabButtonProps {
  name: string;
  icon: ReactElement;
  elementCreate: ReactElement;
}

export function GrabButton({ name, icon, elementCreate }: GrabButtonProps) {
  const { connectors }: any = useEditor();

  return (
    <button
      title={name}
      className="flex items-center pl-4 text-md gap-2 bg-gray-400 text-white py-2 rounded-md cursor-grab hover:brightness-90 transition-all"
      type="button"
      ref={(ref) => connectors.create(ref, elementCreate)}
    >
      {icon}
      {name}
    </button>
  );
}
