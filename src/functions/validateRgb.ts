

const validateRgb=(color:{red:number,green:number,blue:number}):boolean=>{
    if(color.red>=255 || color.red<0){
    return false;
}
if(color.green>=255 || color.green<0){
    return false;
}
if(color.blue>=255 || color.blue<0){
    return false;
}
return true
}
export default validateRgb;