import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import { toPng } from "html-to-image";
import EditorModal from "../components/EditorModal";
import styles from "../utils/editor-data";
import Alert from "../components/Alert";
import { useLocation, useNavigate } from "react-router";

function Editor() {
  const captureRef = useRef(null);
  const nodeRefs = useRef([]);
  const location = useLocation();
  const navigate = useNavigate();

  const [modalData, setModalData] = useState(null);
  const [style, setStyle] = useState(null);

  const handleDownload = async () => {
    await document.fonts.ready; // make sure fonts are loaded

    toPng(captureRef.current, {
      cacheBust: true,
      pixelRatio: 2, // higher quality output
    })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "download.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error("Export failed:", err);
      });
  };

  const openModal = (texts, position) => {
    if (!texts || !String(position)) return;

    setModalData({
      style: style,
      setStyle: setStyle,
      texts: texts,
      position: position,
    });
    document.getElementById("editorModal").showModal();
  };

  const getStyle = () => {
    const { search } = location;
    let query = new URLSearchParams(search);
    let type = query.get("type");
    let temp = query.get("temp");

    if (!type || !temp) {
      return navigate("/");
    }

    let currentStyle = styles[type][temp];

    if (!currentStyle) {
      return navigate("/");
    }

    setStyle(styles[type][temp]);
  };

  useEffect(() => {
    getStyle();
  }, []);

  return (
    <>
      <div className="p-10 flex flex-col items-center gap-4">
        <Alert
          title={"How to edit"}
          description={"Drag to change position and double tap to edit text"}
        />
        <div ref={captureRef} style={style?.boxStyle}>
          <img src={style?.bgPath || null} alt="bg" />
          {style?.texts.map((txt, i) => {
            if (!nodeRefs.current[i]) {
              nodeRefs.current[i] = React.createRef();
            }

            return (
              <Draggable
                key={txt.identifier}
                bounds="parent"
                nodeRef={nodeRefs.current[i]}
                onStop={(e, d) => console.log(d)}
              >
                <div
                  onDoubleClick={() => openModal(txt.name, i)}
                  ref={nodeRefs.current[i]}
                  style={txt.style}
                  className="draggable-element"
                >
                  {txt.name.map((data, index) => (
                    <div key={index}>{data}</div>
                  ))}
                </div>
              </Draggable>
            );
          })}
        </div>
        <button
          onClick={handleDownload}
          className="text-white bg-green-500 border-0 py-1 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
        >
          Download
        </button>
      </div>
      <EditorModal data={modalData} />
    </>
  );
}

export default Editor;
