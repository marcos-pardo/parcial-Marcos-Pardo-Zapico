import { FunctionComponent } from "preact";

type CebeceraProps ={
    selected : "Client"| "Server";

};

const Cabecera : FunctionComponent<CebeceraProps> = ({selected}) =>{

    return (
        <div class = "menu">
            <div class = "botones">     
            <a href="/cliente" class={selected === "Client"? "selected":""}>Client Side</a>
            <a href="/server" class={selected === "Server"? "selected":""}>Server Side</a>
            </div>

            <h1 class= "texto"> My Dictionary </h1>

        </div>
    )
}

export default Cabecera;