import fflate from '../../lib/fflate';
import reportManager from './reportManager';

export async function UncompileAssets ( asset ) {
    return new Promise( ( res, rej ) => {
        fflate.unzlib( asset, {}, ( err, data ) => {
            if ( err )
                return rej( err );
            fflate.unzip( data, ( err, data ) => {
                if ( err )
                    return rej( err );
                res( data );
            } );
        } );
    } );
}

export async function FetchAssets () {
    const item = document.querySelector( "link[ rel=\"app-data\" ]" );
    if ( !item )
        throw new Error( "No application data found, bailing out." );
    const res = await fetch( item.href );
    const length = res.headers.get( 'Content-Length' );
    let uBuf;
    reportManager.report( "Downloading Application Data..." );
    if ( !length ) {
        uBuf = new Uint8Array( await res.arrayBuffer() );
    } else {
        uBuf = new Uint8Array( length );
        let at = 0;
        const reader = res.body.getReader();
        for ( ;; ) {
            const { done, value } = await reader.read();
            if ( done ) {
                break;
            }
            uBuf.set( value, at );
            at += value.length;
            reportManager.report( `Downloading Application Data... ${ ( at / length * 100 ).toFixed( 2 ) }%`, at / length * 100 );
        }
    }
    reportManager.report( "Uncompiling Application Data..." );
    const assets = await UncompileAssets( uBuf );
    reportManager.report( "Application data is ready..." );
    return assets;
}

export class AssetManager {
    constructor ( assets ) {
        this.assets = assets;
    }

    get ( addr, attr = {} ) {
        return URL.createObjectURL( new Blob( [ this.assets[ addr ] ], attr ) );
    }
}