import { Editor, Element, Frame } from "@craftjs/core";
import { X } from "phosphor-react";
import { useState } from "react";
import { useGenerate } from "../hooks/useGenerate";
import { Container } from "./user/Container";
import { InputSmall } from "./user/InputSmall";

interface ModalProps {
  onToggleModal: () => void;
}

export function Modal({ onToggleModal }: ModalProps) {
  const { jsonTextBackup } = useGenerate();

  return (
    <div className="w-full h-screen fixed left-0 top-0 backdrop-blur-sm z-50 bg-gray-800/40 p-10 flex items-center justify-center">
      <div className="bg-white relative w-full max-w-[800px] h-full rounded-lg text-gray-500 flex items-center p-10">
        <button
          type="button"
          onClick={onToggleModal}
          title="Clique para fechar o modal"
          className="w-9 h-9 bg-pink-500 absolute right-4 top-4 flex items-center justify-center text-white rounded-full hover:brightness-90 transition-all"
        >
          <X size={19} />
        </button>

        <div className="flex-1 ">
          <div className="text-center">
            <h1 className="text-2xl mb-10">Formulário gerado</h1>
          </div>

          <Editor resolver={{ Container, InputSmall }}>
            <Frame json={jsonTextBackup}>
              <Element
                canvas
                is={Container}
                padding={20}
                background="#eeeeee"
                data-cy="root-container"
              ></Element>
            </Frame>
          </Editor>
        </div>
      </div>
    </div>
  );
}
