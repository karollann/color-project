import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ColorBox.css";

export const ColorBox = ({ background, name }) => {
  const [copied, isCopied] = useState(false);

  const changeCopied = () => {
    isCopied(true);
    setTimeout(() => {
      isCopied(false);
    }, 1500);
  };

  return (
    <CopyToClipboard text={background} onCopy={changeCopied}>
      <div style={{ background }} className="ColorBox">
        <div
          style={{ background }}
          className={`${copied && "show"} copy-overlay`}
        />
        <div className={`${copied && "show"} copy-msg`}>
          <h1>copied!</h1>
          <p>{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        <span className="see-more">More</span>
      </div>
    </CopyToClipboard>
  );
};