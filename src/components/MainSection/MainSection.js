import "./MainSection.css";
import { TbBrightnessDown } from "react-icons/tb";
import { RxLightningBolt } from "react-icons/rx";
import { VscWarning } from "react-icons/vsc";

const MainSection = () => {
  return (
    <div className="main-container">
      <h1>ChatGPT</h1>
      <div className="main-columns">
        <div className="col-1">
          <div>
            <TbBrightnessDown className="icon"  size={40}  />
            Examples
          </div>
          <div>"Explain quantum computing in simple terms" &rarr;</div>
          <div></div>
          <div></div>
        </div>
        <div className="col-2">
          <div>
            <RxLightningBolt className="icon" size={40} />
            Capabilities
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="col-3">
          <div>
            <VscWarning className="icon"  size={40} />
            Limitations
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
