import IPlatform from "../platforms/IPlatform";
import ITransmission from "./ITransmission";

export default class Live implements ITransmission{

    constructor(private platform: IPlatform){}

    broadcasting(): void {
        console.log("Iniciando a Transmissão!");
    }
    result(): void {
        console.log("***************** No Ar ******************");
    }

}