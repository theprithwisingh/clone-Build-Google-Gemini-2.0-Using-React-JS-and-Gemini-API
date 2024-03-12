import "./Main.css"
import {assets} from '../../assets/assets';

const Main = () => {
  return (
    <div className="main">
     <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user-icon"/>
     </div>
     <div className="main-container">
       <div className="greet">
         <p><span>Hello, Prithwi</span></p>
         <p>How can I help you today ?</p>
       </div>

       <div className="cards">
         <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip.</p>
            <img src={assets.compass_icon} alt="" />
         </div>
         
         <div className="card">
            <p>Help me finish my gaming podcast tagline: play, win, and ....</p>
            <img src={assets.bulb_icon} alt="" />
         </div>

         <div className="card">
            <p>Generate an image of an intergalactic event</p>
            <img src={assets.message_icon} alt="" />
         </div>

         <div className="card">
            <p>Teach me the concept of game theory in simple terms.</p>
            <img src={assets.code_icon} alt="" />

         </div>
       </div>
         
         <div className="main-bottom">
            <div className="search-box">
                <input type="text" placeholder="Enter a prompt here" />
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img src={assets.send_icon} alt="" />
                </div>
            </div>

            <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps
            </p>
         </div>
     </div>
    </div>
  )
}

export default Main;
