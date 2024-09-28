"use client";
import React, { useRef } from "react";
import classes from "./image-picker.module.css";
const ImagePicker = ({ label, name }) => {
  const imageInputRef = useRef();
  function handlePickClick() {
    imageInputRef.current.click();
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          type="file"
          id="image"
          accept="image/png , image/jpg , image/jpeg"
          name={name}
          ref={imageInputRef}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
