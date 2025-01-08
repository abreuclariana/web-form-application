import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));
/*
const fullName = {
    fName: 'Buda',
    lName: 'Filósofo'
}

const user = {
    ...fullName,
    id: 1,
    userName: 'Clariana'
}

console.log(user)

/*
const frutasCitricas = ['limão', 'Abacaxi', 'Caju' ];

const frutas = ['Maçã','Banana', 'Laranja', ...frutasCitricas];

*/

// forma antiga de fazer no js
/*
for(let index = 0; index < frutasCitricas.length; index++){
    frutas.push(frutasCitricas[index])
}

console.log(frutas)
*/

//console.log(frutas)