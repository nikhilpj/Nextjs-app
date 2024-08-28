

const Button = ({width,height,backgroundColor,color,name,border,fontWeight,fontSize,borderRadius,onClick,marginBottom})=>{
    const buttonStyles = {
        width: `${width}px`, 
        height: `${height}px`, 
        backgroundColor: backgroundColor,
        color: color,
        border:border,
        marginRight:'10px',
        borderRadius:`${borderRadius}px`,
        fontWeight:fontWeight,
        fontSize:fontSize,
       marginBottom:marginBottom
         
      };
    return (<button style={buttonStyles} onClick={onClick}>{name}</button>)
}

export default Button