import React from "react";

import "./Main.css";

import logo from "../assets/logo.svg";
import like from "../assets/like.svg";
import dislike from "../assets/dislike.svg";

export default function Main({ match }) {
  return (
    <div className="main-container">
      <img src={logo} alt="Tindev" />
      <ul>
        <li>
          <img
            src="https://avatars1.githubusercontent.com/u/19579831?v=4"
            alt=""
          />
          <footer>
            <strong>João Vitor Paul</strong>
            <p>nice guy</p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="" />
            </button>
            <button type="button">
              <img src={like} alt="" />
            </button>
          </div>
        </li>
        <li>
          <img
            src="https://avatars1.githubusercontent.com/u/19579831?v=4"
            alt=""
          />
          <footer>
            <strong>João Vitor Paul</strong>
            <p>nice guy</p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="" />
            </button>
            <button type="button">
              <img src={like} alt="" />
            </button>
          </div>
        </li>
        <li>
          <img
            src="https://avatars1.githubusercontent.com/u/19579831?v=4"
            alt=""
          />
          <footer>
            <strong>João Vitor Paul</strong>
            <p>nice guy</p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="" />
            </button>
            <button type="button">
              <img src={like} alt="" />
            </button>
          </div>
        </li>
        <li>
          <img
            src="https://avatars1.githubusercontent.com/u/19579831?v=4"
            alt=""
          />
          <footer>
            <strong>João Vitor Paul</strong>
            <p>nice guy</p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="" />
            </button>
            <button type="button">
              <img src={like} alt="" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
