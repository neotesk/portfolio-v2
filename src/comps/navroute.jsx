import ujsx from "ujsx";
import { Route } from '../util/router';
import g from "../util/globalSingleton";

const nav_route = new ujsx.StyleRule( {
    padding: "4px 12px",
    border: "1px solid #484848",
    backgroundColor: "#242424",
    borderRadius: "20px",
    textDecoration: "none",
    color: "white",
    fontFamily: "Red Hat Display",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: ujsx.Pixel( 5 ),
    boxShadow: "0px 0px 13px 0px rgba( 0,0,0,0.3 )",
    transition: "all .5s cubic-bezier(.2,1.86,.25,.99)"
} );

new ujsx.StyleRule( {
    transform: "scale(1.05)",
    boxShadow: "0px 0px 9px 0px rgba( 0,0,0,0.6 )"
}, nav_route.selector + ":hover" );

new ujsx.StyleRule( {
    transform: "scale(0.95)",
    boxShadow: "0px 0px 12px 0px rgba( 0,0,0,0.4 )"
}, nav_route.selector + ":active" );

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