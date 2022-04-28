import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import styles from "./styles.module.scss";

const mySketch = (p5) => {
  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight - 300);
    p5.background(0);
  }
  p5.draw = () => {
    let rand1 = p5.random(700);
    p5.stroke(p5.random(255), p5.random(255), p5.random(255));
    p5.line(p5.mouseX, p5.mouseY, p5.mouseX, 700);
    p5.stroke(p5.random(255), p5.random(255), p5.random(255));
    p5.line(p5.mouseX, p5.mouseY, 700, p5.mouseY);
    // ****************************************************************
    for (let i = 0; i < 21; ++i) {
      p5.line(p5.mouseX + rand1, p5.mouseY, p5.mouseX + rand1, 700);
    }
  }
}

const Sketch = () => {
  return (
    <div className={styles.createCanvas}>
      <ReactP5Wrapper sketch={mySketch} />
    </div>
  )
}

export default Sketch;

