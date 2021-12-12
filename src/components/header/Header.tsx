import { memo, VFC, useCallback } from "react";
import '../header/Header.css';
import  main from "./images/bg.jpeg";
import logo from "../../images/logo.jpg";
import insta from "../../images/instagram.png";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";


export const Header: VFC = memo(() => {

  const history = useHistory();

const onClickHome = useCallback(() => history.push("/"), [history]);
  const onClickNews = useCallback(
    () => history.push("/news"),
    [history]
  );

  
  return (
    <div>
       <div id="home" className="big-bg">
        <header className="header wrapper">
        <img className="logo" src={logo} />
          <nav>
            <ul className="main-nav">
            
              <li className="headertitle"　style={{marginRight: "170px"}} onClick={onClickHome} >Péngyou's</li>
            
              
              <li onClick={onClickNews}>news</li>
              
              <li>member</li>
              <li><a href="https://www.instagram.com/abcdefghijk8532/"><img src={insta}  style={{width: "30px", height: "30px"}} /></a></li>
              <li>contact</li>
            </ul>
          </nav>
        </header>
        </div>
    </div>
  );
});