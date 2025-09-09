import ujsx from "ujsx";
import { Route } from '../util/router';
import g from "../util/globalSingleton";

const nav_route = new ujsx.StyleRule( {
    padding: "4px 12px",
    border: "1px solid #323232",
    backgroundColor: "#242424",
    borderRadius: "20px",
    textDecoration: "none",
    color: "white",
    fontFamily: "Red Hat Display",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: ujsx.Pixel( 5 )
} );

const nav_img = new ujsx.StyleRule( {
    height: ujsx.Pixel( 21 )
} );

export default function NavRoute ( { attributes, children } ) {
    return (
        <Route styleRule={ nav_route } class={ "nav-link" } to={ attributes.to }>
            <img styleRule={ nav_img } src={ g.assetManager.get( attributes.assetName, { type: 'image/svg+xml' } ) } alt="" />
            <span>{ children }</span>
        </Route>
    )
}