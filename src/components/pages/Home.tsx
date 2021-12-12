import { memo, VFC } from "react";
import { Header } from "../header/Header";
import  main from "../../images/bg.jpeg";
import './Home.css';




export const Home: VFC = memo(() => {
  return (
    <div>
        
      
        <video poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/fashion.jpg" playsInline autoPlay muted loop>
<source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/fashion.webm" type="video/webm" />
<source src="http://thenewcode.com/assets/videos/fashion.mp4" type="video/mp4" />
</video>
            <div className="homeContent wrapper">
              <div id="fashion">
                <div className="homeTitle">
                  <ul className="main-home">
                    <li><h1>Péngyou's</h1></li>
                    <li className="secondtitle"><p>私達は埼玉県で活動する大学生のフットサルチームです。</p></li>
                    <li className="secondtitle"><p>2021年11月にチームを結成いたしました。</p></li>
                    <li className="secondtitle"><p>お気軽にご連絡ください。</p></li>
                  </ul>
                  
              </div>
              
            
              
            </div>
            
           <div className="bodyContent">
           <p className="contenttitle">~ Gallery ~</p>
          <ul className="gallery">
           <li><img src={main} /></li>
           <li><img src={main} /></li>
           <li><img src={main} /></li>
           <li><img src={main} /></li>
           <li><img src={main} /></li>
           <li><img src={main} /></li>
           <li><img src={main} /></li>
           <li><img src={main} /></li>
           </ul>
           </div>
          
          </div>
    </div>



 

  );
});