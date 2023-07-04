import IPlatform from "./IPlatform";

export default class YouTube implements IPlatform{

    constructor(){
        console.log("YouTube: Configurando Plataforma!");
        this.configureRMTP();
    }
    configureRMTP(): void {
        this.authToken();
        console.log("Youtube: Configurando o Broadcasting!");
    }
    authToken(): void {
        console.log("YouTube: Autorizando a Plataforma!");
    }

}