const fflate = require( "../lib/fflate" );
const fs = require( "fs" );
const path = require( "path" );

// Config
const INPUT_PATH = "assets/";
const OUTPUT_PATH = "build/appdata.love"

// Gather input files
const CWD = process.cwd();
const inputFileList = Object.fromEntries(
    fs.readdirSync(
        INPUT_PATH, {
            recursive: true,
            withFileTypes: true
        }
    ).filter( e => e.isFile() ).map( e => {
        const pth = path.join( e.path || e.parentPath, e.name );
        return [ pth.replace( INPUT_PATH, '' ), fs.readFileSync( path.join( CWD, pth ) ) ]
    } )
);

const compPackage = fflate.zlibSync(
    fflate.zipSync( inputFileList, { level: 0 } ),
    { level: 9 }
);

fs.writeFileSync( OUTPUT_PATH, compPackage );