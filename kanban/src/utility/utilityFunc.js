export const makeLighterColor = (colorChange) => {
  if (colorChange)
    return {
      background: `${
        (colorChange === "red" && "tomato") ||
        (colorChange === "blue" && "lavender") ||
        (colorChange === "yellow" && "palegoldenrod") ||
        (colorChange === "green" && "lightgreen") ||
        (colorChange === "purple" && "mediumorchid") ||
        (colorChange === "orange" && "sandybrown") ||
        (colorChange === "lime" && "palegreen") ||
        (colorChange === "sky" && "lightskyblue") ||
        (colorChange === "black" && "#3b444b") ||
        (colorChange === "pink" && "hotpink")
      }`,
      fontWeight: "bold",
    };
};

export const colorCheckobox = [
  "red",
  "blue",
  "yellow",
  "green",
  "purple",
  "orange",
  "lime",
  "sky",
  "black",
  "pink",
];
