import React, { useState } from "react";
import algorithm from "./algorithm";

const Board = () => {
  // calculating the probability of 8*8 matrix to form a chess board
  let num = [];
  for (let i = 0; i < 8; i++) {
    for (let a = 0; a < 8; a++) {
      num += a % 2 === i % 2 ? `${i}${(i, a)} ` : `${i}${(i, a)} `;
    }
    num += "";
  }

  //   For color inversion
  let colorFlip = true;
  let count = 0;

  const clan = (el) => {
    colorFlip = !colorFlip;
    if (count === 8) {
      colorFlip = !colorFlip;
      count = 0;
    }
    count++;
    // generating classnames and points
    if (colorFlip) {
      return `white item ${el}`;
    } else {
      return `black item ${el}`;
    }
  };

  // Marking and disabling inactive state
  const inactive = (el) => {
    if (
      el === "20" ||
      el === "71" ||
      el === "43" ||
      el === "67" ||
      el === "26" ||
      el === "07" ||
      el === "03"
    ) {
      return (
        <div className="inactive">
          <i className="fas fa-times"></i>
        </div>
      );
    }
  };

  // react hooks states for bishop and knight
  const [state, setState] = useState("32");
  const [state1, setState1] = useState("66");

  // icon positions on board
  const coin = (el) => {
    if (state === state1) {
      return null;
    }
    if (el === state) {
      return (
        <div>
          <i className="fas fa-chess-bishop"></i>
        </div>
      );
    }
    if (el === state1) {
      return (
        <div>
          <i className="fas fa-chess-knight"></i>
        </div>
      );
    }
  };

  const split1 = num.split(" ");
  delete split1[64];

  let load = "";
  let load1 = "";
  let iconPass = [];
  let iconPass1 = [];
  // click and hold on a icon to move
  const clickDown = (e) => {
    e.preventDefault();
    const check = e.target?.classList[2];
    if (check === undefined) {
      iconPass = e.target.childNodes[0].classList[1];
    }
    const check1 = e.target?.classList[2];
    if (check1 === undefined) {
      iconPass1 = e.target.childNodes[0].classList[1];
    }

    if (check === undefined) return;
    else {
      load = check;
    }

    if (check1 === undefined) return;
    else {
      load1 = check1;
    }
  };
  // relase mouse to place on new position
  const clickUp = (e) => {
    const check = e.target?.classList[2];
    e.stopPropagation();
    const validatePos = algorithm(state, null);
    const pass = validatePos?.filter((arr) => arr.includes(check));
    if (load === state && load !== check) {
      // eslint-disable-next-line
      if (check == pass && check !== load) {
        setState(check);
      }
    }
    if (iconPass === "fa-chess-bishop") {
      // eslint-disable-next-line
      if (check == pass && check !== load) {
        setState(check);
      }
    }
    const check1 = e.target?.classList[2];
    const validatePos1 = algorithm(null, state1);
    const pass1 = validatePos1?.filter((arr) => arr.includes(check1));
    if (load1 === state1 && load1 !== check1) {
      // eslint-disable-next-line
      if (check1 == pass1 && check1 !== load1) {
        setState1(check1);
      }
    }
    if (iconPass1 === "fa-chess-knight") {
      // eslint-disable-next-line
      if (check1 == pass1 && check1 !== load1) {
        setState1(check1);
      }
    }
  };

  // if both icon meet calculate return value and return new icon
  const meetPoint = (el) => {
    if (state === state1 && state === el) {
      const ret = state.split("").join(",");
      return (
        <div className="messagebox">
          <i className="far icon fa-check-circle" aria-hidden={false}>
            <div className="message">Retun Value {ret}</div>
          </i>
        </div>
      );
    } else return;
  };

  // generate all box and add events dynamically
  const creatDiv = split1.map((el) => {
    return (
      <div
        key={el}
        onMouseDown={clickDown}
        onMouseUp={clickUp}
        className={clan(el)}
      >
        {coin(el)} {inactive(el)} {meetPoint(el)}
      </div>
    );
  });

  return (
    <React.Fragment>
      <div className="container">{creatDiv}</div>
    </React.Fragment>
  );
};

export default Board;
