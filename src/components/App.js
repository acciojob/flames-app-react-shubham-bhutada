import React, {useState} from "react";
import '../styles/App.css';
// import { set } from "cypress/types/lodash";

let arr= ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy" ]

const App = ()=> {
    const [name1, setName1] = useState(""); //Soumya
    const [name2, setName2] = useState(""); //ansh
    const [relationship, setRelationship] = useState(""); 
    const [btnClicked, setBtnClicked] = useState(false);

    console.log(name1, name2)


    function calculateRelationship(e){
        e.preventDefault();

        if(name1.trim() === "" || name2.trim() === ""){
            setBtnClicked(false);
            setRelationship("Please Enter valid names");
            return
        }
         
        let str1 = name1 
        let str2 = name2
        for(let t of str1){ // Soumya // ansh
             if(str2.includes(t)){
               str1 =  str1.replace(t,"");
               str2 = str2.replace(t,"");
             }
        }
        setName1(str1);
        setName2(str2);
        setBtnClicked(true);
        setRelationship(arr[(str1.length + str2.length)%6]);
        
    }


        return(
            <div id="main">

                <form>
                     <input type="text" data-testid="input1" placeholder="Enter First Name" name="name1"
                        onChange={(e)=>setName1(e.target.value)} 
                        value={name1}
                        
                     />
                     <input type="text" data-testid="input2" placeholder="Enter Second Name"  name="name2"
                        onChange={(e)=>setName2(e.target.value)} 
                        value={name2}
                        
                     />
                     <button data-testid="calculate_relationship" type="submit" 
                      onClick={calculateRelationship}
                     >Calculate Relationship Future</button>

                     
                     <button data-testid="clear" type="reset" 
                        onClick={()=>{
                            setName1("");
                            setName2("");
                            setBtnClicked(false);
                            setRelationship("");
                        }}
                     >Clear</button>
                </form>

                <h3 data-testid="answer">
                     {/* {
                            btnClicked && arr[(name1.length + name2.length)%6]  
                     } */}
                        {
                          relationship
                        }
                </h3>
               
            </div>
        )
    
}


export default App;