export const makeLighterColor = (colorChanhge) => {
  if (colorChanhge)
    return {
      background: `${
        colorChanhge === "red"
          ? "tomato"
          : colorChanhge === "blue"
          ? "lavender"
          : colorChanhge === "yellow"
          ? "palegoldenrod"
          : colorChanhge === "green"
          ? "lightgreen"
          : colorChanhge === "purple"
          ? "mediumorchid"
          : colorChanhge === "orange"
          ? "sandybrown"
          : colorChanhge === "lime"
          ? "palegreen"
          : colorChanhge === "sky"
          ? "lightskyblue"
          : colorChanhge
      }`,
      color: "white",
      fontWeight: "bold",
    };
};
