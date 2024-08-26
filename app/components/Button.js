

const Button = ({width,height,backgroundColor,color,name,border,fontWeight,fontSize})=>{
    const buttonStyles = {
        width: `${width}px`, 
        height: `${height}px`, 
        backgroundColor: backgroundColor,
        color: color,
        border:border,
        marginRight:'10px',
        borderRadius:'4px',
        fontWeight:fontWeight,
        fontSize:fontSize
         
      };
    return (<button style={buttonStyles}>{name}</button>)
}

export default Button