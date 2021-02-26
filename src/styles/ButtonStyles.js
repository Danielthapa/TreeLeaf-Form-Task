export default {
    button: {
        position: "absolute",
        top: props => props.top || "399px",
        left: props => props.left || "152px",
        width: props => props.width || "272px",
        height: props => props.height || "53px",
        background: props => props.background || "transparent linear-gradient(100deg, rgba(23, 145, 255, 1) 0%, rgba(241, 22, 255, 1) 100%) 0% 0% no-repeat padding-box",
        boxShadow: props => props.boxShadow || "0px 15px 30px rgba(21, 101, 192, 0.19)",
        borderRadius: props => props.borderRadius || "24px",
        opacity: 1,
        cursor: "pointer",
        "& p": {
            position: "absolute",
            top: props => props.textTop || "3px",
            left: props => props.textLeft || "118px",
            width: props => props.textWidth || "100px",
            height: props => props.textHeight || "30px",
            fontSize: "25px",
            textAlign: "center",
            letterSpacing: props => props.letterSpacing || "0px",
            color: props => props.textColor || "rgba(253, 253, 253, 1)",
            opacity: props => props.textOpacity || 1
        },
        

    },

   

    buttonIcon: {
        position: "absolute",
        top: props => props.iconTop || "20px",
        left: props => props.iconLeft || "93.14px",
        width: props => props.iconWidth || "14px",
        height: props => props.iconHeight || "14px",
    }

}