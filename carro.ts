// class Carro {
//     public modelo: string;
//     public color: string;
//     public placa: string;
//     public duenio: string;
//     public anio: Number;
//     private serial: Number;
//     public tipoMotor: string;

//     public static electrico: string = "Eléctrico";
//     public static gasolina: string = "Gasolina";
//     public static diesel: string = "Diésel";
//     public static hibrido: string = "Híbrido";
//     public static nuclear: string = "Nuclear";

//     constructor(modelo: string, color: string, placa: string, duenio: string, anio: Number, serial: Number, tipoMotor: string){
//         this.modelo = modelo;
//         this.color = color;
//         this.placa = placa;
//         this.duenio = duenio;
//         this.serial = serial;
//         this.anio = anio;
//         this.tipoMotor = tipoMotor;
//     }

//     public getSerial(): Number{
//         return this.serial;
//     }
// }

// const f = new Carro("Mustang", "negro", "a8va00", "Gilmar", 2025, 12345, Carro.hibrido);

// console.log(f);


/*
    Crear una clase llamada Perro:
    props:
        patas
        color
        tieneCola
        raza
        tituloGenetico
        ---
    Acciones:
        ladra
        muerde
        juega
        tipoDeJuego
        come
    
*/

class Perro {
    public cantidadDePatas : number ;
    public colorDePelaje : string[] ;
    public tieneCola : boolean  ;
    public raza : string ; 
    public pedigree : boolean ; 
    public tamanio : string;
    public static alturaDePerro : string[] = ["grande","mediano", "pequenio"];
    public static ladridoFuerte : string = "GUAU GUAU GUAU GUAU";
    public static ladridoDebil : string = "guau guau"
    public static tipoDeRaza : string[] = ["pitbull", "husky", "doberman", "poodle", "pincher", "chihuahua", "cacri"]


    constructor (cantidadDePatas : number , colorDePelaje : string[], tieneCola : boolean, raza : string, pedigree : boolean, tamanio : string) {
        this.cantidadDePatas = cantidadDePatas ;
        this.colorDePelaje = colorDePelaje ; 
        this.tieneCola = tieneCola ; 
        this.raza = raza;
        this.pedigree = pedigree;
        this.tamanio = tamanio;

    }

    public emitirLadrido() {
        for(let i=0;i<Perro.tipoDeRaza.length; i++) {
            if (Perro.tipoDeRaza[i] == this.raza)  {

                if (Perro.alturaDePerro[0] ==  this.tamanio) {
                    return Perro.ladridoFuerte  }
                // } else if (Perro.alturaDePerro[1] == this.tamanio) {
                //     return Perro.ladridoFuerte 

                // }else if (Perro.alturaDePerro[2] == this.tamanio) {
                //     return Perro.ladridoDebil
            }
        } 
        return "Perro no identificado, amiguito" 
    }

}

let dog = new Perro (4,["marron","blanco"],true,"poodle",false, Perro.alturaDePerro[0])
//console.log("cantidad de patas: "+ dog.cantidadDePatas)
console.log(dog.emitirLadrido() )