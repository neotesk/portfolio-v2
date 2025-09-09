import ujsx from 'ujsx';
import Router, { Route } from '../util/router';
import g from '../util/globalSingleton';

export default function MainPage () {
    return <>
        <nav>
            <img src={ g.assetManager.get( 'img/logo.png' ) } />
            <div>
                <Route class={ "nav-link" } to="/">
                    <img src={ g.assetManager.get( 'icon/home.svg', { type: 'image/svg+xml' } ) } alt="" />
                    <span>Home</span>
                </Route>
                <Route class={ "nav-link" } to="/about-me">
                    <img src={ g.assetManager.get( 'icon/aboutme.svg', { type: 'image/svg+xml' } ) } alt="" />
                    <span>About Me</span>
                </Route>
            </div>
        </nav>
        <Router base="/" routes={ [] } />
    </>
}