const styles = {
  wedding: {
    0: {
      boxStyle: {
        width: "1000px",
        height: "auto",
        border: "1px solid #e2e2e2",
        position: "relative",
        overflow: "hidden",
      },
      bgStyle: {
        width: "1000px",
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
          isKeyboardRequired: true,
          style: {
            top: "105px",
            left: "360px",
            color: "#83173f",
            fontSize: "85px",
            fontFamily: "cv-maya",
          },
        },
        {
          name: ["cho"],
          identifier: "groomName",
          isKeyboardRequired: true,
          style: {
            top: "192px",
            left: "315px",
            color: "#83173f",
            fontSize: "85px",
            fontFamily: "cv-maya",
          },
        },
        {
          name: ["चि.सौ.का."],
          identifier: "brideTag",
          style: {
            top: "117px",
            left: "419px",
            color: "#83173f",
            fontSize: "15px",
            fontFamily: "baloo",
          },
        },
        {
          name: ["चिरंजीव"],
          identifier: "groomTag",
          style: {
            top: "206px",
            left: "427px",
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
            top: "129px",
            left: "493px",
            color: "#83173f",
            fontSize: "15px",
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
            top: "221px",
            left: "492px",
            color: "#83173f",
            fontSize: "15px",
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
            top: "446px",
            left: "393px",
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
            top: "580px",
            left: "404px",
            color: "#ffff8f",
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
            top: "614px",
            left: "421px",
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
            top: "743px",
            left: "258px",
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
            top: "741px",
            left: "379px",
            color: "#ffff8f",
            fontSize: "35px",
            fontFamily: "hind",
            textAlign: "center",
          },
        },
      ],
    },
  },
};

export default styles;
