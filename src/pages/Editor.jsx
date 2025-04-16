import React, { useRef } from "react";
import Draggable from "react-draggable";
import { toPng } from "html-to-image";

function Editor() {
  const captureRef = useRef(null);
  const nodeRefs = useRef([]);

  const style = {
    boxStyle: {
      width: "80vw",
      height: "auto",
      border: "1px solid #e2e2e2",
      position: "relative",
      overflow: "hidden",
    },
    bgStyle: {
      width: "80vw",
      height: "auto",
      objectFit: "cover",
      position: "absolute",
      top: "0",
      left: "0",
    },
    bgPath: "/src/assets/bg/01.png",
    texts: [
      {
        name: ["g]xF"],
        identifier: "brideName",
        style: {
          top: "105px",
          left: "390px",
          color: "#83173f",
          fontSize: "90px",
          fontFamily: "cv-maya",
        },
      },
      {
        name: ["cho"],
        identifier: "groomName",
        style: {
          top: "201px",
          left: "344px",
          color: "#83173f",
          fontSize: "90px",
          fontFamily: "cv-maya",
        },
      },
      {
        name: ["चि.सौ.का."],
        identifier: "brideTag",
        style: {
          top: "118px",
          left: "455px",
          color: "#83173f",
          fontSize: "15px",
          fontFamily: "baloo",
        },
      },
      {
        name: ["चिरंजीव"],
        identifier: "groomTag",
        style: {
          top: "215px",
          left: "465px",
          color: "#83173f",
          fontSize: "15px",
          fontFamily: "baloo",
        },
      },
      {
        name: [
          "श्री.दिलीप पोपट खामकर",
          "यांची जेष्ठ कन्या",
          "मु.पो.वांगणी ता.वेल्हा जि.पुणे",
        ],
        identifier: "brideParent",
        style: {
          top: "133px",
          left: "528px",
          color: "#83173f",
          fontSize: "18px",
          fontFamily: "baloo",
        },
      },
      {
        name: [
          "श्री.विठ्ठल नामदेव चोरघे",
          "यांचे द्वितीय पुत्र",
          "मु.पो.वांगणी ता.वेल्हा जि.पुणे",
        ],
        identifier: "groomParent",
        style: {
          top: "231px",
          left: "528px",
          color: "#83173f",
          fontSize: "18px",
          fontFamily: "baloo",
        },
      },
      {
        name: [
          "मंगळवार दि. १४/०५/२०२४ रोजी",
          "दुपारी 4 वा. ३७ मि.",
          "या शुभमुहूर्तावर करण्याचे योजिले आहे",
        ],
        identifier: "weddingDateTime",
        style: {
          top: "494px",
          left: "441px",
          color: "#83173f",
          fontSize: "18px",
          fontFamily: "baloo",
          textAlign: "center",
        },
      },
      {
        name: ["पार्वती मंगल कार्यालय"],
        identifier: "weddingHall",
        style: {
          top: "637px",
          left: "449px",
          color: "#fff",
          fontSize: "25px",
          fontFamily: "baloo",
          textAlign: "center",
          fontStyle: "bold",
        },
      },
      {
        name: [
          "पुणे - बँगलोर रोड, इंदोली फाटा,",
          "पेरले, ता. कराड, जि. सातारा",
        ],
        identifier: "weddingAdd",
        style: {
          top: "672px",
          left: "468px",
          color: "#fff",
          fontSize: "15px",
          fontFamily: "baloo",
          textAlign: "center",
          fontStyle: "itallic",
        },
      },
      {
        name: ["निमंत्रक : "],
        identifier: "invitorTag",
        style: {
          top: "813px",
          left: "278px",
          color: "#fff",
          fontSize: "30px",
          fontFamily: "hind",
          textAlign: "center",
        },
      },
      {
        name: ["समस्त खामकर परिवार"],
        identifier: "invitor",
        style: {
          top: "812px",
          left: "408px",
          color: "#ffff8f",
          fontSize: "35px",
          fontFamily: "hind",
          textAlign: "center",
        },
      },
    ],
  };

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

  return (
    <div className="flex flex-col items-center my-10">
      <div ref={captureRef} style={style.boxStyle}>
        <img src={style.bgPath || null} alt="bg" />
        {style.texts.map((txt, i) => {
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
      <button onClick={handleDownload}>Download</button>
    </div>
  );
}

export default Editor;
