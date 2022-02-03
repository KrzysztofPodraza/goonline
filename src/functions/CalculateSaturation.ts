const CalculateSaturation=(red:number,green:number,blue:number)=>{

red=red/255;
green=green/255
blue=blue/255

const max=Math.max(red,green,blue)
const min=Math.min(red,green,blue)

const L=(max+min)/2
let saturation=0;
if (L<100){
saturation=Math.round((max-min)/(1-Math.abs(2*L-1))*100)
}
return saturation
}
export default CalculateSaturation
