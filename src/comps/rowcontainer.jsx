import ujsx from "ujsx";

const container = new ujsx.StyleRule( {
    maxWidth: ujsx.Pixel( 1200 ),
    margin: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
} );

export default function RowContainer ( props ) {
    return (
        <div styleRule={ container }>
            { props.children }
        </div>
    )
}