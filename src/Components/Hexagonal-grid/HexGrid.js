import Hexagonal from "../Hexagonal/Hexagonal";
import "./HexGrid.css";
import CoreTeanImg1 from "../../assets/coreteam/core1.svg";
import CoreTeamImg2 from "../../assets/coreteam/core2.png";
import CoreTeamImg3 from "../../assets/coreteam/core3.png";
import CoreTeamImg4 from "../../assets/coreteam/core4.svg";
import CoreTeamImg5 from "../../assets/coreteam/Core5.svg";
const HexGrid=()=>{
    return (
        <div className="hex-container">
            <div className="hex-grid-row">
                    <Hexagonal image={CoreTeamImg3}/>
                    <Hexagonal image={CoreTeanImg1}/>
                    <Hexagonal image={CoreTeamImg5}/>
                    <Hexagonal  image={CoreTeamImg3}/>
                    <Hexagonal  image={CoreTeamImg2}/>
                    <Hexagonal image={CoreTeamImg4}/>
                    <Hexagonal image={CoreTeamImg4}/>
                    <Hexagonal image={CoreTeamImg2}/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/> 
            </div>
            <div className="hex-grid-row">
            <Hexagonal image={CoreTeamImg3}/>
                    <Hexagonal image={CoreTeanImg1}/>
                    <Hexagonal image={CoreTeamImg2}/>
                    <Hexagonal  image={CoreTeamImg3}/>
                    <Hexagonal  image={CoreTeamImg2}/>
                    <Hexagonal image={CoreTeamImg4}/>
                    <Hexagonal image={CoreTeamImg5}/>
                    <Hexagonal image={CoreTeamImg2}/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/> 
                    
                    
            </div>
            <div className="hex-grid-row">
                        <Hexagonal  image={CoreTeamImg3}/>
                    <Hexagonal  image={CoreTeamImg2}/>
                    
                    <Hexagonal differ={true} differText="Core Team"/>
                    <Hexagonal differ={true} differText="Seniors"/>
                    <Hexagonal image={CoreTeamImg3}/>
                    <Hexagonal image={CoreTeanImg1}/>
                    <Hexagonal image={CoreTeamImg2}/>
                    <Hexagonal image={CoreTeamImg4}/>
                    <Hexagonal image={CoreTeamImg4}/>
                    <Hexagonal image={CoreTeamImg2}/>
                    
                    
                    
            </div>
            <div className="hex-grid-row">
                    <Hexagonal image={CoreTeamImg5}/>
                    <Hexagonal differ={true} differText="Developers"/>
                    <Hexagonal differ={true} differText="IT-STUDIO"/>
                    <Hexagonal differ={true} differText="Interns"/>
                    <Hexagonal image={CoreTeamImg5}/>
                    <Hexagonal image={CoreTeamImg2}/>
                    <Hexagonal image={CoreTeamImg2}/>
                    <Hexagonal image={CoreTeamImg5}/>
                    <Hexagonal image={CoreTeamImg2}/>
                    
                    
            </div>
            <div className="hex-grid-row">
            <Hexagonal image={CoreTeamImg3}/>
                    <Hexagonal image={CoreTeanImg1}/>
               
                  
                    <Hexagonal differ={true} differText="Management"/>
                    <Hexagonal differ={true} differText="Director"/>
                    <Hexagonal image={CoreTeamImg3}/>
                    <Hexagonal image={CoreTeanImg1}/>
                    <Hexagonal image={CoreTeamImg3}/>
                    <Hexagonal image={CoreTeanImg1}/>
                    <Hexagonal image={CoreTeamImg3}/>
                    <Hexagonal image={CoreTeanImg1}/>
                    
                    
            </div>
            <div className="hex-grid-row">
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    
                    
            </div>
            <div className="hex-grid-row">
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    
                    
            </div>
            <div className="hex-grid-row">
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    
                    
            </div>
            <div className="hex-grid-row">
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    
                    
            </div>
            <div className="hex-grid-row">
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    
                    
            </div>
            <div className="hex-grid-row">
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    
                    
            </div>
            <div className="hex-grid-row">
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    <Hexagonal/>
                    
                    
            </div>

        </div>
    )
}
export default HexGrid;