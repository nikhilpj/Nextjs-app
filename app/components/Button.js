

const Button = ({width,height,backgroundColor,color,name,border,fontWeight,fontSize,borderRadius})=>{
    const buttonStyles = {
        width: `${width}px`, 
        height: `${height}px`, 
        backgroundColor: backgroundColor,
        color: color,
        border:border,
        marginRight:'10px',
        borderRadius:`${borderRadius}px`,
        fontWeight:fontWeight,
        fontSize:fontSize
         
      };
    return (<button style={buttonStyles}>{name}</button>)
}

export default Button