import ujsx from 'ujsx';
import g from "../util/globalSingleton";
import Section from '../comps/section';

const image = new ujsx.StyleRule( {
    width: ujsx.Pixel( 100 ),
    borderRadius: ujsx.Pixel( 12 ),
    boxShadow: "0px 0px 13px 0px rgba( 0,0,0,0.6 )"
} );

export default function MainHome () {
    return (
        <Section>
            <img styleRule={ image } src={ g.assetManager.get( 'img/neologo.png' ) } alt="Neo Logo" />
        </Section>
    )
}