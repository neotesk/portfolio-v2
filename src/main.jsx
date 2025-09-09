import ujsx from 'ujsx';
import { FetchAssets, AssetManager } from "./util/assetUncompile";
import { Sleep } from './util/utils';
import reportManager from "./util/reportManager";
import g from './util/globalSingleton';
import AddFont from './util/fontLoader';

async function main () {
    const reportText = document.getElementById( "preloader-text" );
    let preloader = document.getElementById( "preloader" );
    const reportMarquee = preloader.querySelector( ".marquee" ),
        reportProgress = preloader.querySelector( ".progress" );

    reportManager.addReportHandler( ( data, percent ) => {
        if ( !preloader )
            return;
        reportMarquee.classList[ !percent ? 'remove' : 'add' ]( 'd-none' );
        reportProgress.classList[ percent ? 'remove' : 'add' ]( 'd-none' );
        percent = percent ?? 0;
        reportProgress.setAttribute( 'style', `--p: ${ percent }%` );
        reportText.innerText = data;
    } );

    // Fetch assets
    const assets = await FetchAssets();
    g.assetManager = new AssetManager( assets );

    // Add fonts
    AddFont(
        { familyName: "Red Hat Display", url: g.assetManager.get( "font/Red_Hat_Display/rhdisplay.ttf" ) }
    )

    // Animate the preloader
    preloader.classList.add( "d-fade" );
    await Sleep( 600 );
    preloader = ( preloader.remove(), null );

    // After animating, render the page
    const MainPage = require( './page/mainpage' ).default;
    const output = (
        <div class="app">
            <MainPage />
        </div>
    );

    // Compile styles
    ujsx.StyleRule.compileGlobals();

    document.body.appendChild( output );
}

main();