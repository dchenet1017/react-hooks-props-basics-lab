import React from "react";

function Links(props){
    return(
        <div id="links">
            <h3>links</h3>
            <a href={props.linkedin}>linkedin</a>
            <a href={props.github}>github</a>
            
        </div>




    )
}

export default Links;