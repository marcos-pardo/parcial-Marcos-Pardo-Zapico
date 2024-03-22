import {FreshContext} from "$fresh/server.ts"
import Cabecera from "../components/cabecera.tsx"

const Layout = async( req: Request, ctx: FreshContext) =>{
    const Component = ctx.Component;
    const route = ctx.route;
    const page = route.split("/").pop();
    const selected = page === ""? "Client": "Server";

    return(
        <div>
            <Cabecera selected={selected}/>
            <Component ></Component>
        </div>
    )
}
export default Layout;
