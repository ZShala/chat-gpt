import "./MainSection.css";
import { TbBrightnessDown } from "react-icons/tb";
import { RxLightningBolt } from "react-icons/rx";
import { VscWarning } from "react-icons/vsc";
import { TbSend } from "react-icons/tb";

const MainSection = () => {
  return (
    <div className="main-container">
      <h1>ChatGPT</h1>
      <div className="main-columns">
        <div className="col-1">
          <div>
            <TbBrightnessDown className="icon" size={25} />
            Examples
          </div>
          <div>"Explain quantum computing in simple terms?" &rarr;</div>
          <div>
            "Got any creative ideas for a 10 years old birthday?" &rarr;
          </div>
          <div>"How do I make an HTTP request in JavaScript?" &rarr;</div>
        </div>
        <div className="col-2">
          <div>
            <RxLightningBolt className="icon" size={25} />
            Capabilities
          </div>
          <div>Remembers what user said earlier in the conversation</div>
          <div>Allows user to provide follow-up corrections</div>
          <div>Trained to decline inappropriate requests</div>
        </div>
        <div className="col-3">
          <div>
            <VscWarning className="icon" size={25} />
            Limitations
          </div>
          <div>May occasionally generate incorrect information</div>
          <div>
            May occasionally produce harmful instructions or biased content
          </div>
          <div>Limited knowledge of world and events after 2021</div>
        </div>
      </div>
      <div className="input-div">
        <input
          type="text"
          className="chat-input"
          placeholder="Send a message..."
        />
      
        <TbSend className="send-icon" />
        <h6>
          ChatGPT Mar 23 Version. Free Research Preview. ChatGPT may produce
          inaccurate information about people, places, or facts
        </h6>
      </div>
    </div>
  );
};

export default MainSection;
