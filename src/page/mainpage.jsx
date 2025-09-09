import ujsx from 'ujsx';
import Router from '../util/router';
import g from '../util/globalSingleton';

import MainHome from './main.home';
import AboutMeHome from './aboutme.home';
import ProjectsHome from './projects.home';
import BiographyHome from './biography.home';
import ContactHome from './contact.home';

import Container from '../comps/container';
import RowContainer from '../comps/rowcontainer';
import NavRoute from '../comps/navroute';

const nav = new ujsx.StyleRule( {
    borderBottom: "1px solid #242424"
} );

const nav_container = new ujsx.StyleRule( {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: ujsx.Pixel( 40 ),
    gap: ujsx.Pixel( 20 )
} );

const nav_links = new ujsx.StyleRule( {
    display: "flex",
    flexDirection: "row",
    gap: ujsx.Pixel( 10 ),
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap"
} );

const container = new ujsx.StyleRule( {
    padding: ujsx.Pixel( 24 )
} );

const logo = new ujsx.StyleRule( {
    height: ujsx.Pixel( 28 )
} );

export default function MainPage () {
    return <>
        <nav styleRule={ nav }>
            <Container styleRule={ nav_container }>
                <img styleRule={ logo } src={ g.assetManager.get( 'img/logo.png' ) } />
                <div styleRule={ nav_links }>
                    <NavRoute to="/" assetName="icon/home.svg">Home</NavRoute>
                    <NavRoute to="/about-me" assetName="icon/aboutme.svg">About Me</NavRoute>
                    <NavRoute to="/biography" assetName="icon/autobiography.svg">Biography</NavRoute>
                    <NavRoute to="/projects" assetName="icon/projects.svg">Projects</NavRoute>
                    <NavRoute to="/contact" assetName="icon/contact.svg">Contact</NavRoute>
                </div>
            </Container>
        </nav>
        <Container styleRule={ container }>
            <Router base="/" routes={ [
                { route: "", element: <MainHome /> },
                { route: "about-me", element: <AboutMeHome /> },
                { route: "biography", element: <BiographyHome /> },
                { route: "projects", element: <ProjectsHome /> },
                { route: "contact", element: <ContactHome /> }
            ] } />
        </Container>
    </>
}