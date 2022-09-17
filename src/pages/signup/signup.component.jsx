import React from "react";
import "./signup.style.scss";

const Signup = (props) => {
  return (
    <div className="my-container">
      <div className="left">
        <h3>FootGame</h3>
        <div className="images">
          <img src="https://s3-alpha-sig.figma.com/img/6764/bd52/772561ac276115352ce65aa6e3b57bba?Expires=1664150400&Signature=gpG-lNp7BS1wJmTrtJpBJfmMybsatF1IbRhEaDv1iH40ON2cczX4gdrz5tWPuUvxd6f~1khPFYCklrrwcoSJqqmnKPlHJdO6b0zFFvimD73sFuty8ZWpq7Nx7JaYLp349-Yz9ri71o0XqM8SE-aZycF9VoKx06DrRALAxVNaAy~UAFhANsoX6LfZYVCdbdwUQT8AfmbIBTIDZ2sYK3RKikX2SBnVA2rqaOP4FysXxCmsxej0fl2AN4tQoJuGsemOSwKrszyb0jDfeGiRqCQ4UKqJUE~3TEXQe3Aocx29oMfmTX1KQLfUPLiCNB8ikVGzXdC61ZX6dgCaiIxizL6qEA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
        </div>

        <div className="balls">
          <img src="https://s3-alpha-sig.figma.com/img/7411/3099/297f063c6b51003e7923d683b57308d6?Expires=1664150400&Signature=f~uYTN0VPNawvAS8x0XflC9I38ByJrzfE3YInfJB2Na9c5tBv~bEhxSxbNa~ahq2JoYDkJWwiDlRgTRzpQKKVYLn9gI7oOWtH0y~phd0zv-B7xWacXkfYnO0eSJCtG1cClo-wgiJ8hd8NctVYI-xuTJUM7xc6YYJu9o2n2Dh8k2nf0Y~UG7sLqsBc5~bnvIUWVcqfZlgAzIjQBA6xg5IklaLMFs~vC7WjUhmwnNnVJHSYfRjks-ZtthKR2zywkWicyHExfldFYAFN8c-u3vtzwZCgoUYtAyC7Amx6wnO3Wg5Bj6YpVqU2gs1vEfa8n~vTNUDYqdgklkbghpICtBoHQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
        </div>
        {/* <div className="esclipe"></div> */}
      </div>
      <div className="right">
        <div className="header">
          <div className="item">
            {" "}
            <h3>News</h3>
          </div>
          <div className="item">
            <h3>Booking</h3>
          </div>
          <div className="item">
            {" "}
            <h3>About us</h3>
          </div>
          
        </div>
        <div className="title">
            <h2>Life is like soccer, we need GOALS</h2>
          </div>
      </div>
    </div>
  );
};

export default Signup;
