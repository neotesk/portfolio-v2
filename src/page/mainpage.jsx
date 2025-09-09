import ujsx from 'ujsx';
import Router, { Route } from '../util/router';
import g from '../util/globalSingleton';

import MainHome from './main.home';
import AboutMeHome from './aboutme.home';
import Container from '../comps/container';
import RowContainer from '../comps/rowcontainer';
import NavRoute from '../comps/navroute';

const nav = new ujsx.StyleRule( {
    borderBottom: "1px solid #242424"
} );

const nav_container = new ujsx.StyleRule( {
    justifyContent: "space-between",
    padding: ujsx.Pixel( 20 )
} );

const nav_links = new ujsx.StyleRule( {
    display: "flex",
    flexDirection: "row",
    gap: ujsx.Pixel( 10 ),
    alignItems: "center"
} );

const container = new ujsx.StyleRule( {
    border: "1px solid #242424",
    borderTop: "0",
    padding: ujsx.Pixel( 24 )
} );

const logo = new ujsx.StyleRule( {
    height: ujsx.Pixel( 28 )
} );

export default function MainPage () {
    return <>
        <nav styleRule={ nav }>
            <RowContainer styleRule={ nav_container }>
                <img styleRule={ logo } src={ g.assetManager.get( 'img/logo.png' ) } />
                <div styleRule={ nav_links }>
                    <NavRoute to="/" assetName="icon/home.svg">Home</NavRoute>
                    <NavRoute to="/about-me" assetName="icon/aboutme.svg">About Me</NavRoute>
                </div>
            </RowContainer>
        </nav>
        <Container styleRule={ container }>
            <Router base="/" routes={ [
                { route: "", element: <MainHome /> },
                { route: "about-me", element: <AboutMeHome /> }
            ] } />
        </Container>
    </>
}