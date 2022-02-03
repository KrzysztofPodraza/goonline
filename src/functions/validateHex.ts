const validateHex=(color:string)=>{
    color=color.toUpperCase()
    const format = /[!@$%^&*()_+\-=\[\]{};':"\\|,.<>\/?QWRTYUIOPSGHJKLZXVNM]+/
if(color.length!==0){
    if( format.test(color)){
        return false
    }
    for(let x=1;x<color.length;x++){
        if (color.charAt(x)==="#" || color.charAt(x)===" "){
            return false
        }
    }
    if(!/#/.test(color) && color.length===7){
        return false
    }
}
    return true
}
export default validateHex;
