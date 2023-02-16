import { useEditor } from "@craftjs/core";
import { Code } from "phosphor-react";
import { useGenerate } from "../hooks/useGenerate";

import lz from "lzutf8";

export function GenerateJSONButton() {
  const { setJsonText, setOpenJSONText, setJsonTextBackup } = useGenerate();

  const { query } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  function handleGenerateJSONForm() {
    const json = lz.encodeBase64(lz.compress(query.serialize()));

    setJsonText(json);
    setJsonTextBackup(lz.decompress(lz.decodeBase64(json)));
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
