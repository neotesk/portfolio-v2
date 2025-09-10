import ujsx from 'ujsx';
import Section from '../comps/section';

const section = new ujsx.StyleRule( {
    fontFamily: "Red Hat Display",
} );

const text_slight = new ujsx.StyleRule( {
    color: "#a0a0a0"
} );

const wrapper = new ujsx.StyleRule( {
    display: "flex",
    flexDirection: "column",
    gap: ujsx.Pixel( "12" )
} );

export default function BiographyHome () {
    return (
        <div styleRule={ wrapper }>
            <Section styleRule={ section }>
                <h1>About me</h1>
                I am <b>Ali</b> <i styleRule={ text_slight }>(preferably Eli or Neo)</i> and I am professionalized in web development, specifically on Javascript (Node.js, React.js and SolidJS). I also create various designs and design trends based on my mood or however the current market is going to love it. I mostly prefer Brutalist designs, Neumorphistic designs and Extremely Minimalist design trends.
            </Section>
            <Section styleRule={ section }>
                <h1>Journey</h1>
                I'm <b>21 years old</b> <i styleRule={ text_slight }>(yes I'm old I get it...)</i> My coding & development journey started when I was 10 years old. I used to play games, watch videos and all of a sudden, that day I wondered how people made applications, so I started with C#. With the power of C#, I made <a target="_blank" href="https://www.google.com/search?q=useless+websites+and+applications">#useless</a> things yet it was my main source of motivation. Most of my projects were useless and the useful ones got abandoned. The reason behind it is that I got interested in web design. Those mesmerizing and futuristic designs, one of the design scheme got me really interested and as you can see, it's <a target="_blank" href="https://brutalistwebsites.com/">Brutalism</a>! Brutalism and brutalist arts always have mesmerized me. Apart from design principles, I'm professionalized in <a href="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)">C#</a>, <a href="https://en.wikipedia.org/wiki/JavaScript">Javascript</a>, PHP and Go, which are still the languages I use to develop applications today.
            </Section>
            <Section styleRule={ section }>
                <h1>My Capabilities</h1>
                I can develop <b>Web applications</b>, <b>CLI Tools</b> <i>and probably more</i> and I sometimes <b>make music</b> and <b>SFX</b>. I mostly use Go and Javascript for my coding projects and as a DAW I can use FL Studio and Bitwig Studio
            </Section>
        </div>
    )
}