import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <h1>LIVERPOOL FC</h1>
    <div className="row">
      <p>
        Liverpool FC stands out as a highly accomplished and celebrated football
        club on a global scale, with an extensive history and fervent following
        that extends worldwide. I hold a special affinity for this team due to
        its storied Winning Tradition, legendary Iconic Players, thrilling Style
        of Play, and dedicated and enthusiastic Fan Base.
      </p>
    </div>
    <div>
      <div className="row">
        <img
          className="js"
          src="https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/default/0002/09/thumb_108209_default_news_size_5.jpeg"
          alt=""
        />
        <hr />
        <h3>PREMIER LEAGUE GLORY</h3>
        <p>
          Liverpool have won a phenomenal 19 top-flight league titles, with
          Jürgen Klopp leading the Reds to their most recent in the Premier
          League in 2019-20.
        </p>
      </div>
      <div className="row">
        <img
          className="react"
          src="https://images.beinsports.com/Q5D7PhaD9abCmhPT-xxs3qWb0iU=/full-fit-in/1000x0/klopp-cropped_1wmw7f4m5ibmo1sg0xbx9v66z8.jpg"
          alt=""
        />
        <hr />
        <h3>CHAMPIONS LEAGUE GLORY</h3>
        <p>
          Since 1964, they have won fourteen European and Worldwide trophies,
          more than any other British club.
        </p>
      </div>
    </div>
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
