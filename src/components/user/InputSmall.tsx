import { useNode } from "@craftjs/core";
import { useEffect, useState } from "react";

interface InputSmall {
  label: string;
  placeholder: string;
  fontSize?: number;
}

export function InputSmall({
  label,
  fontSize,
  placeholder,
  ...props
}: InputSmall) {
  const {
    connectors: { connect, drag },
    selected,
    actions: { setProp },
  }: any = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged,
  }));

  const [editable, setEditable] = useState(false);

  useEffect(() => {
    if (selected) {
      return;
    }

    setEditable(false);
  }, [selected]);

  return (
    <div
      {...props}
      ref={(ref) => connect(drag(ref))}
      onClick={() => selected && setEditable(true)}
    >
      <label className="text-sm">
        {label}
        <input
          className="w-full mt-1 h-12 px-4 rounded-lg border-2 border-gray-300 outline-none focus:ring-2 focus:ring-pink-500 transition-all placeholder:text-sm"
          type="text"
          placeholder={placeholder}
          onChange={(e) =>
            setProp(
              (props: any) =>
                (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, "")),
              500
            )
          }
          style={{ fontSize: `${fontSize}px` }}
        />
      </label>
    </div>
  );
}

const InputMallSettings = () => {
  const {
    actions: { setProp },
    fontSize,
  }: any = useNode((node) => ({
    fontSize: node.data.props.fontSize,
  }));

  return (
    <div>
      <label>
        Tamanho da fonte
        <input
          type="range"
          value={fontSize || 7}
          step={7}
          min={12}
          max={30}
          onChange={(e) =>
            setProp((props: any) => (props.fontSize = e.target.value))
          }
          className="w-full mt-2"
        />
      </label>
    </div>
  );
};

export const InputMallDefaultProps = {
  fontSize: 16,
};

InputSmall.craft = {
  props: InputMallDefaultProps,
  related: {
    settings: InputMallSettings,
  },
};
