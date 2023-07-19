import React from "react";
import howManyParks from "./parks/howManyParks";
import  { trees, wildlife, elevation }  from "./parks/RockyMountain"
import MesaVerde from "./parks/MesaVerde";

function ColoradoStateParks() {
  howManyParks();
  elevation();
  wildlife();
  console.log(trees)
  MesaVerde()

  return <h1>Colorado State Parks!</h1>;
}

export default ColoradoStateParks