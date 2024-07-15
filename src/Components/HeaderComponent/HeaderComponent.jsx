import logo from "../../assets/navalt.png";
import logo2 from "../../assets/boat.png";
import "./HeaderComponent.css";

const HeaderComponent = () => {
  return (
    <div className="header">
      <img
        style={{
          width: "130px",
          float: "left",
          padding: "5px",
          marginLeft: "22px",
        }}
        src={logo}
      ></img>
      <marquee direction="right">
        <img src={logo2}></img>
      </marquee>
    </div>
  );
};

export default HeaderComponent;
