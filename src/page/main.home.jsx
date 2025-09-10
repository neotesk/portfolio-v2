import ujsx from 'ujsx';
import g from "../util/globalSingleton";
import Section from '../comps/section';

const image = new ujsx.StyleRule( {
    width: ujsx.Pixel( 100 ),
    borderRadius: ujsx.Pixel( 12 ),
    boxShadow: "0px 0px 13px 0px rgba( 0,0,0,0.6 )"
} );

const row = new ujsx.StyleRule( {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: ujsx.Pixel( "24" ),
    fontFamily: "Red Hat Display",
    opacity: ujsx.Percent( 0 ),
    animation: "fade_in_a .3s cubic-bezier(.13,.74,.29,.98) forwards"
} );

const text_slight = new ujsx.StyleRule( {
    color: "#a0a0a0"
} );

const column = new ujsx.StyleRule( {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: ujsx.Pixel( "6" ),
    fontSize: ujsx.Pixel( 16 )
} );

const wrapper = new ujsx.StyleRule( {
    display: "flex",
    flexDirection: "column",
    gap: ujsx.Pixel( "12" )
} );

const section = new ujsx.StyleRule( {
    fontFamily: "Red Hat Display",
    opacity: ujsx.Percent( 0 ),
    animation: "fade_in_a .3s cubic-bezier(.13,.74,.29,.98) forwards",
    animationDelay: ".1s"
} );

export default function MainHome () {
    return (
        <div styleRule={ wrapper }>
            <Section styleRule={ row }>
                <img styleRule={ image } src={ g.assetManager.get( 'img/neologo.png' ) } alt="Neo Logo" />
                <div styleRule={ column }>
                    <span>Name: <b>Ali</b> <i styleRule={ text_slight }>(preferably Eli or Neo)</i></span>
                    <span>Location: <b>Izmir</b></span>
                    <span>Pronouns: <b>he/him</b></span>
                    <span>Fuel: <b>Cola</b> <i styleRule={ text_slight }>(sometimes coffee)</i></span>
                </div>
                <div styleRule={ column }>
                    <span>E-Mail: <b>ntsk@airmail.cc</b></span>
                    <span>Matrix: <b>@neotesk:catgirl.cloud</b></span>
                    <span>Fediverse: <b>@neo@plasmatrap.com</b></span>
                    <span>Discord: <b>neotesk</b></span>
                </div>
            </Section>
            <Section styleRule={ section } class="a">
                <h1>About me</h1>
                I am <b>Ali</b> <i styleRule={ text_slight }>(preferably Eli or Neo)</i> and I am professionalized in web development, specifically on Javascript (Node.js, React.js and SolidJS). I also create various designs and design trends based on my mood or however the current market is going to love it. I mostly prefer Brutalist designs, Neumorphistic designs and Extremely Minimalist design trends.
            </Section>
        </div>
    )
}