import ujsx from 'ujsx';

window.history.pushState = new Proxy( window.history.pushState, {
    apply: ( target, thisArg, argArray ) => {
        const ev = new Event( "pushstate" );
        ev.arguments = [ ...argArray ];
        window.dispatchEvent( ev );
        return target.apply( thisArg, argArray );
    }
} );

export function Forward ( to ) {
    return window.history.pushState( Math.random(), "", to );
}

export function Route ( { attributes, children } ) {
    const output = <a href={ attributes.to }>{ children }</a>;
    output.addEventListener( "click", e => {
        e.preventDefault();
        window.history.pushState( Math.random(), "", attributes.to );
    } );
    return output;
}

export default function Router ( { attributes } ) {
    const base = attributes.base || "/";
    const output = <div></div>;
    const shadow = <div id="__router_garbage"></div>;
    let current = null;

    function onFire ( e ) {
        let newLink = window.location.pathname;
        if ( e.type === 'pushstate' ) {
            let j = e.arguments.pop();
            if ( !j.startsWith( base ) && !j.startsWith( "/" ) )
                j = base + j;
            newLink = j;
        }
        if ( current !== null )
            shadow.appendChild( current );
        for ( const child of attributes.routes ) {
            if ( base + child.route !== newLink )
                continue;
            current = child.element;
            output.appendChild( current );
            break;
        }
    }

    window.addEventListener( "pushstate", onFire );
    window.addEventListener( "popstate", onFire );

    return ( onFire( { type: null } ), output );
}