import React, { useState} from "react";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

function handleKeyword (event){
    setKeyword(event.target.value)
}
function search(event) {
    event.preventDefault();
        alert (`searching for ${keyword}`);
    }
    
  return (<div className= "dictionary">
    

    
    < form onSubmit ={ search}>
    
       <input   type ="search" placeholder = "Enter your wold"  onChange={handleKeyword} />
     
 
      <input type="submit" value="Search" className="btn btn-primary" />
     
      
      </form>
      </div>)

}
