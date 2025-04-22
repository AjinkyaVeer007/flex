import React, { useEffect, useRef, useState } from "react";
import { keyboard } from "../utils/keyboard";

function EditorModal({ data }) {
  const inputRefs = useRef([]);

  const [inputStates, setInputStates] = useState([]);
  const [color, setColor] = useState("");
  const [fontSize, setFontSize] = useState("");

  const handleType = (letter, inputFieldPosition) => {
    const inputEl = inputRefs.current[inputFieldPosition];
    if (!inputEl) return;

    const start = inputEl.selectionStart;
    const end = inputEl.selectionEnd;
    const prevValue = inputStates[inputFieldPosition] || "";

    const newValue = prevValue.slice(0, start) + letter + prevValue.slice(end);

    // Update the state
    let copiedStates = structuredClone(inputStates);

    copiedStates[inputFieldPosition] = newValue;

    setInputStates(copiedStates);

    // Set caret to new position after DOM update
    setTimeout(() => {
      inputEl.focus();
      inputEl.setSelectionRange(start + 1, start + 1);
    }, 0);
  };

  const handleDefaultValues = () => {
    setInputStates(data?.texts);
    data?.style?.texts[data?.position].style?.color &&
      setColor(data?.style?.texts[data?.position].style?.color);
    setFontSize(
      data?.style?.texts[data?.position].style?.fontSize.split("px")[0]
    );
  };

  const handleChange = (e, i) => {
    let copiedStates = structuredClone(inputStates);

    copiedStates[i] = e.target.value;

    setInputStates(copiedStates);
  };

  const handleUpdate = () => {
    let copiedStyle = structuredClone(data.style);

    copiedStyle.texts[data.position].name = inputStates;
    copiedStyle.texts[data.position].style.color = color;
    copiedStyle.texts[data.position].style.fontSize = fontSize + "px";
    data?.setStyle(copiedStyle);
  };

  useEffect(() => {
    data && handleDefaultValues();
  }, [data]);

  return (
    <dialog id="editorModal" className="m-auto p-6 rounded w-6/12">
      <div>
        {data?.texts.map((txt, i) => (
          <div
            className="p-2 w-full border rounded mb-2 border-gray-200"
            key={i}
          >
            <div className="relative">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Update text
              </label>
              <input
                key={i}
                ref={(el) => (inputRefs.current[i] = el)}
                value={inputStates[i] || ""}
                onChange={(e) => handleChange(e, i)}
                id="message"
                name="message"
                className={`w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-xl outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                  data?.style?.texts[data?.position]?.style?.fontFamily
                }`}
              />
            </div>
            {data?.style?.texts[data?.position]?.isKeyboardRequired && (
              <div className="p-1 flex items-center flex-wrap">
                {keyboard.map((letter, keyIndex) => (
                  <div
                    key={keyIndex}
                    onClick={() => handleType(letter, i)}
                    className="w-[40px] h-[40px] border border-gray-200 flex justify-center items-center cursor-pointer"
                  >
                    <div
                      className={`text-[25px] font-medium ${
                        data?.style?.texts[data?.position]?.style?.fontFamily
                      }`}
                    >
                      {letter}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="flex gap-4">
          {color && (
            <div>
              <div className="leading-7 text-sm text-gray-600">
                Change color
              </div>
              <input
                type="color"
                defaultValue={color}
                onBlur={(e) => setColor(e.target.value)}
              />
            </div>
          )}
          <div>
            <div className="leading-7 text-sm text-gray-600">
              Change font size
            </div>
            <input
              type="text"
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
              className="w-1/2 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-xl outline-none text-gray-800 py-1 px-3 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div>
          <form method="dialog" className="flex justify-end">
            <button
              onClick={handleUpdate}
              className="mx-2 text-white bg-green-500 border-0 py-1 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Update
            </button>
            <button className="mx-2 text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Cancel
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export default EditorModal;
