class Carro {
    public modelo: string;
    public color: string;
    public placa: string;
    public duenio: string;
    public anio: Number;
    private serial: Number;
    public tipoMotor: string;

    public static electrico: string = "Eléctrico";
    public static gasolina: string = "Gasolina";
    public static diesel: string = "Diésel";
    public static hibrido: string = "Híbrido";
    public static nuclear: string = "Nuclear";

    constructor(modelo: string, color: string, placa: string, duenio: string, anio: Number, serial: Number, tipoMotor: string){
        this.modelo = modelo;
        this.color = color;
        this.placa = placa;
        this.duenio = duenio;
        this.serial = serial;
        this.anio = anio;
        this.tipoMotor = tipoMotor;
    }

    public getSerial(): Number{
        return this.serial;
    }
}

const f = new Carro("Mustang", "negro", "a8va00", "Gilmar", 2025, 12345, Carro.hibrido);

console.log(f);