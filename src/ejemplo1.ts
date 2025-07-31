abstract class Vehiculo {
  constructor(public marca: string, public modelo: string){
  }
  abstract encender(): void;
  
}


class Automovil extends Vehiculo {
  encender(): void {
    const contenedorMoto = document.createElement("p");
    contenedorMoto.textContent = `${this.marca} - ${this.modelo} está arrancando como un auto`;
    document.body.appendChild(contenedorMoto);
    //console.log(`${this.marca} - ${this.modelo} está arrancando como un auto`);
  }
}

class Motocicleta extends Vehiculo {
  encender(): void {
    const contenedorAuto = document.createElement("p");
    contenedorAuto.textContent = `${this.marca} - ${this.modelo} está arrancando como una motocicleta`;
    document.body.appendChild(contenedorAuto);
    //console.log(`${this.marca} - ${this.modelo} está arrancando como una motocicleta`);
  }
}


const vehiculos: Vehiculo[] = [
  new Automovil("Honda", "CRV"),
  new Motocicleta("Suzuki", "FX50"),
  new Automovil("Tesla", "T3"),
  new Automovil("Suzuki", "Jimmy"),
];


// asi usamos las clases
window.addEventListener("DOMContentLoaded", () => {
  vehiculos.forEach(v => v.encender());
});
