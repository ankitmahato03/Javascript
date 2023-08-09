// The stone paper scissor Game 


let UserInput = prompt(" Enter your choice stone paper scissor ")
let ComputerInput= Math.floor(Math.random()*3);
let Computer = [ "stone" ,"paper" ,"scissor" ][ComputerInput]
const Match=(UserInput,Computer)=>
{
    if(Computer===UserInput){
        return "Draw";
    }
    else if(Computer==="stone" && UserInput==="paper"){
        return "User";
    }
    else if(Computer==="stone" && UserInput==="scissor"){
        return "Computer";
    }
    else if(Computer==="scissor" && UserInput==="paper"){
        return "Computer";
    }
    else if(Computer==="scissor" && UserInput==="stone"){
        return "User";
    }
    else if(Computer==="paper" && UserInput==="scissor"){
        return "User";
    }
    else if(Computer==="paper" && UserInput==="stone"){
        return "Computer";
    }

}

let Winner= Match(Computer,UserInput)
console.log(`Computer: ${Computer} and You: ${UserInput} /n And the Winner is ${Winner.toUpperCase}`)