import ujsx from "ujsx";

const container = new ujsx.StyleRule( {
    maxWidth: ujsx.Pixel( 1200 ),
    margin: "auto"
} );

export default function Container ( props ) {
    return (
        <div styleRule={ container }>
            { props.children }
        </div>
    )
}