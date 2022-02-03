const HexToRgb=(color:string):{red:number,green:number,blue:number}=>{
    if(color.charAt(0)==="#"){
        color=color.substring(1)
    }
    const r=color.slice(0,2)
    const g=color.slice(2,4)
    const b=color.slice(4,6)
return {red:parseInt(r,16),green:parseInt(g,16),blue:parseInt(b,16)}
}
export default HexToRgb;