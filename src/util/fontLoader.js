import ujsx from 'ujsx'

export default function AddFont ( ...fonts ) {
    for ( const font of fonts ) {
        const rule = new ujsx.CSSOM.CSSFontFaceRule();
        rule.style.fontFamily = font.familyName;
        rule.style.src = `url("${ font.url }")`;
        ujsx.AddDefinition( rule );
    }
}