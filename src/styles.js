import defaultimg from "./images/defaultimg.jpg";
export const setColor = {
  primaryColor: "#af9a7d",
  mainWhite: "#fff",
  mainBlack: "#222",
  mainGrey: "#ececec",
  lightGrey: "#f7f7f7",
};

export const setFont = {
  mainFont: "font-family: 'Open Sans', sans-serif;",
  slanted: " font-family: 'Courgette', cursive;",
};

export const setFlex = ({ x = "center", y = "center" } = {}) => {
  return `display: flex; align-items:${y}; justify-content:${x}`;
};

export const setBackground = ({
  img = defaultimg,
  color = "rgba(0,0,0,0)",
} = {}) => {
  return `
   background: linear-gradient(${color}, ${color}),
    url(${img}) center/cover fixed no-repeat;
  
  
  `;
};
