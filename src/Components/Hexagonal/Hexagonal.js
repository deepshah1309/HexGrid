import "./Hexagonal.css";
const Hexagonal=({differ,differText,image})=>{
    return (
        <div className={differ!==null && differ===true?"hexagonaldifferent":"hexagonal"} style={{backgroundImage:`url(${image})`,height:"200px",width:"200px",opacity:1}}>
                {differ!==null && differ===true?(
                <div className="titlehex">{
                    differText
                    }
                </div>
                
                ):""}
                
        </div>
    )
}
export default Hexagonal;