import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { isColorLight } from "./utils";
import "./Styles/ColorBox.css";

export const ColorBox = ({
  background,
  name,
  paletteId,
  id,
  showLink,
  singleColorClassName,
}) => {
  const [copied, isCopied] = useState(false);

  const changeCopied = () => {
    isCopied(true);
    setTimeout(() => {
      isCopied(false);
    }, 1500);
  };

  const isLight = isColorLight(background);

  return (
    <CopyToClipboard text={background} onCopy={changeCopied}>
      <div
        style={{ background }}
        className={`ColorBox ${singleColorClassName}`}
      >
        <div
          style={{ background }}
          className={`${copied && "show"} ColorBox__CopyOverlay`}
        />
        <div className={`${copied && "show"} ColorBox__CopyMsg`}>
          <h1>copied!</h1>
          <p className={isLight ? "ColorBox--DarkText" : undefined}>
            {background}
          </p>
        </div>
        <div className="copy-container">
          <div className="ColorBox__BoxContent">
            <span className={!isLight ? "ColorBox--LightText" : undefined}>
              {name}
            </span>
          </div>
          <button
            className={`ColorBox__CopyButton ${
              isLight && "ColorBox--DarkText"
            }`}
          >
            Copy
          </button>
        </div>
        {showLink && (
          <Link
            to={`/palette/${paletteId}/${id}`}
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className={`ColorBox__SeeMore ${isLight && "ColorBox--DarkText"}`}
            >
              More
            </span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
};
