import React from "react";
import * as C from "../constants";

export const withTheme = (Component, name) => {
  return (props) => {
    if (name === C.PLAN) return <Component title="ПЛАНЫ" {...props} />;
    else if (name === C.MOVIE)
      return <Component title="ФИЛЬМЫ" {...props} />;
    else if (name === C.BOOK)
      return <Component title="КНИГИ" {...props} />;
    return <Component {...props} />;
  };
};
