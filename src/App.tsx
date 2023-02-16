import { Editor, Element, Frame } from "@craftjs/core";
import { Copy, Gear, GithubLogo, TextIndent } from "phosphor-react";

import { GrabButton } from "./components/GrabButton";
import { LinkButton } from "./components/LinkButton";
import { Container } from "./components/user/Container";
import { InputSmall } from "./components/user/InputSmall";
import { SidebarSettings } from "./components/SidebarSettings";

import { useState } from "react";
import { GenerateJSONButton } from "./components/GenerateJSONButton";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-hot-toast";
import { useGenerate } from "./hooks/useGenerate";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const { openJSONText, jsonTextBackup } = useGenerate();

  function handleToggleModel() {
    setOpenModal(!openModal);
  }

  function handleCopyJSONText() {
    toast.success("Texto copiado com sucesso!");
  }

  return (
    <main className="w-full min-h-screen py-20 bg-pink-600 text-white flex flex-col items-center justify-center">
      <section className="flex flex-col items-center">
        <div className="bg-white rounded-full w-[250px]">
          <figure>
            <img className="w-full" src="/logo.png" alt="Logo da Winker" />
          </figure>
        </div>
        <h1 className="text-3xl mt-10">Builder de formulário</h1>
        <p className="max-w-md mt-2 text-center text-white/80 font-light">
          Essa aplicação foi criada com o objetivo de mostrar um exemplo de como
          funciona a biblioteca{" "}
          <a
            className="text-orange-300 font-semibold underline underline-offset-4 hover:opacity-70 transition-opacity"
            href="https://craft.js.org/docs/overview"
            target="_blank"
            title="Clique para abrir a página da biblioteca"
          >
            CraftJS
          </a>
        </p>
        <div className="flex items-center gap-4 mt-8">
          <LinkButton
            name="Repositório no Github"
            url="https://github.com/rafaelppereira/winker-builder-form"
            tooltip="Clique aqui para ir ao repositório do projeto"
            icon={<GithubLogo size={20} />}
          />
        </div>
      </section>
      <Editor resolver={{ InputSmall, Container }}>
        <section className="mt-14 flex items-start  w-full max-w-5xl bg-white overflow-hidden rounded-lg">
          <aside className="w-full max-w-[300px] bg-gray-100 text-gray-600 p-5 rounded-br-lg">
            <div>
              <h1 className="text-lg">Tipos de campos</h1>
              <p className="text-sm opacity-80 font-light mt-1">
                Clique ou arraste os campos para construir o seu formulário
              </p>
            </div>

            <div className="flex flex-col gap-2 mt-10">
              <GrabButton
                name="Container"
                icon={<TextIndent size={18} />}
                elementCreate={<Element canvas is={Container} padding={40} />}
              />

              <GrabButton
                name="Texto curto"
                icon={<TextIndent size={18} />}
                elementCreate={
                  <InputSmall
                    label="Texto curto"
                    placeholder="Digite um texto curto"
                  />
                }
              />
            </div>
          </aside>
          <div className="flex-1 py-7 px-10">
            <Frame>
              <Element
                canvas
                is={Container}
                padding={20}
                background="#eeeeee"
                data-cy="root-container"
              >
                <Element canvas is={Container} data-cy="root-container">
                  <InputSmall
                    label="Texto da label"
                    placeholder="Digite seu texto"
                  />
                </Element>
              </Element>
            </Frame>
          </div>
        </section>
        <div className="flex justify-end gap-2 w-full max-w-5xl mt-4">
          <GenerateJSONButton />

          <button
            title="Clique para abrir o modal de edição de propriedades"
            type="button"
            className="bg-gray-700 px-4 py-2 flex items-center gap-2 rounded-full text-sm font-light hover:brightness-90 transition-all"
            onClick={handleToggleModel}
          >
            <Gear size={18} />
            Configurar propriedades
          </button>
        </div>
        {openModal && <SidebarSettings onToggleModal={handleToggleModel} />}
      </Editor>

      {openJSONText && (
        <section className="mt-10 w-full max-w-5xl">
          <div className="w-full relative p-5 rounded-lg bg-white">
            <CopyToClipboard text={jsonTextBackup}>
              <button
                className="absolute right-2 top-2 text-white bg-orange-500 w-8 h-8 rounded-md flex items-center justify-center hover:brightness-90 transition-all"
                type="button"
                title="Clique para copiar o JSON"
                onClick={handleCopyJSONText}
              >
                <Copy size={20} />
              </button>
            </CopyToClipboard>

            <p className="text-gray-500 text-sm font-light select-none">
              {jsonTextBackup}
            </p>
          </div>
        </section>
      )}
    </main>
  );
}

export default App;
