import { useEditor } from "@craftjs/core";
import { Code } from "phosphor-react";
import { useGenerate } from "../hooks/useGenerate";

export function GenerateJSONButton() {
  const { setJsonText, setOpenJSONText } = useGenerate();

  const { query } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  function handleGenerateJSONForm() {
    setJsonText(JSON.stringify(query.serialize()));
    setOpenJSONText(true);
  }

  return (
    <button
      title="Clique para abrir o modal de edição de propriedades"
      type="button"
      className="bg-orange-600 px-4 py-2 flex items-center gap-2 rounded-full text-sm font-light hover:brightness-90 transition-all"
      onClick={handleGenerateJSONForm}
    >
      <Code size={18} />
      Gerar JSON do formulário
    </button>
  );
}
