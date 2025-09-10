import ujsx from 'ujsx';
import g from "../util/globalSingleton";
import Section from '../comps/section';

const image = new ujsx.StyleRule( {
    width: ujsx.Pixel( 100 ),
    height: ujsx.Pixel( 100 ),
    borderRadius: ujsx.Pixel( 12 ),
    boxShadow: "0px 0px 13px 0px rgba( 0,0,0,0.6 )"
} );

const row = new ujsx.StyleRule( {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: ujsx.Pixel( "24" ),
    fontFamily: "Red Hat Display",
    maxWidth: "max-content!important",
    margin: "auto",
    opacity: ujsx.Percent( 0 ),
    animation: "fade_in_a .3s cubic-bezier(.13,.74,.29,.98) forwards"
} );

new ujsx.StyleRule( {
    animationDelay: ".1s"
}, row.selector + ".a" );

new ujsx.StyleRule( {
    animationDelay: ".2s"
}, row.selector + ".b" );

const column = new ujsx.StyleRule( {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: ujsx.Pixel( "6" ),
    fontSize: ujsx.Pixel( 16 ),
    flexGrow: "1",
    width: ujsx.Percent( 0 )
} );

const text_slight = new ujsx.StyleRule( {
    color: "#a0a0a0"
} );

const wrapper = new ujsx.StyleRule( {
    display: "flex",
    flexDirection: "column",
    gap: ujsx.Pixel( "12" )
} );

const anchor = new ujsx.StyleRule( {
    textDecoration: "none"
} );

const para = new ujsx.StyleRule( {
    fontSize: ujsx.Pixel( 14 )
} );

export default function BiographyHome () {
    return (
        <div styleRule={ wrapper }>
            <a href="https://github.com/neotesk/truct" styleRule={ anchor }>
                <Section styleRule={ row }>
                    <img styleRule={ image } src={ g.assetManager.get( 'img/truct.png' ) } alt="Truct Logo" />
                    <div styleRule={ column }>
                        <h1>Truct</h1>
                        <p styleRule={ para }>Truct is a pretty minimal workflow manager, allowing you to store your tasks inside one single Truct file (generally stored as truct.yaml) which is a YAML file, this way it will be readable for humans! Compared to other systems like Make, Truct aims to be simple and beginner-friendly for small projects.</p>
                    </div>
                </Section>
            </a>
            <a href="https://github.com/neotesk/ujsx" styleRule={ anchor }>
                <Section styleRule={ row } class="a">
                    <img styleRule={ image } src={ g.assetManager.get( 'img/ujsx.png' ) } alt="uJSX Logo" />
                    <div styleRule={ column }>
                        <h1>μJSX</h1>
                        <p styleRule={ para }>μJSX (aka. MicroJSX) is a library providing basic JSX support based on Esbuild. The only difference is being that there is no need for state management and many other features that React and many platforms provide.</p>
                    </div>
                </Section>
            </a>
            <a href="https://github.com/neotesk/nethop" styleRule={ anchor }>
                <Section styleRule={ row } class="b">
                    <img styleRule={ image } src={ g.assetManager.get( 'img/nethop.png' ) } alt="Nethop Logo" />
                    <div styleRule={ column }>
                        <h1>Nethop</h1>
                        <p styleRule={ para }>Nethop is a Minimal Network Hook Library for Web Testing and Mock Data. It allows you to hook onto XMLHttpRequest and Fetch calls inside the browser context.</p>
                    </div>
                </Section>
            </a>
        </div>
    )
}