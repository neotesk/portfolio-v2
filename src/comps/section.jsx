import ujsx from "ujsx";

const section = new ujsx.StyleRule( {
    border: "1px solid #323232",
    backgroundColor: "#242424",
    borderRadius: ujsx.Pixel( 12 ),
    padding: ujsx.Pixel( 20 ),
    width: ujsx.Percent( 100 )
} );

export default function Section ( props ) {
    return (
        <div styleRule={ section }>
            { props.children }
        </div>
    )
}