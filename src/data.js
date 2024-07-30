export const API_KEY = "AIzaSyA52brud2J2iHnJ8yAUvf6c1kPBDwr4-V0";

export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
