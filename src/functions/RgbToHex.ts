const RgbToHex=(red:number,green:number,blue:number):string=>{
return (red.toString(16)+green.toString(16)+blue.toString(16)).toUpperCase()
}
export default RgbToHex