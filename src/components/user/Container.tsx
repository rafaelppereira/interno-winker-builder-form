import { useNode } from "@craftjs/core";
import { ReactNode } from "react";

interface ContainerProps {
  background?: string;
  padding?: number;
  children?: ReactNode;
}

export function Container({
  background,
  padding,
  children,
  ...props
}: ContainerProps) {
  const {
    connectors: { connect, drag },
  }: any = useNode();

  return (
    <div
      {...props}
      ref={(ref) => connect(drag(ref))}
      className="bg-gray-100 rounded-lg p-2 text-gray-500 flex flex-col gap-4"
      style={{ margin: "5px 0", background, padding: `${padding}px` }}
    >
      {children}
    </div>
  );
}

export const ContainerSettings = () => {
  const {
    background,
    padding,
    actions: { setProp },
  } = useNode((node) => ({
    background: node.data.props.background,
    padding: node.data.props.padding,
  }));

  return (
    <div>
      <h1>Ajustes de propriedades do container</h1>
    </div>
  );
};

export const ContainerDefaultProps = {
  background: "#ffffff",
  padding: 40,
};

Container.craft = {
  props: ContainerDefaultProps,
  related: {
    settings: ContainerSettings,
  },
};
