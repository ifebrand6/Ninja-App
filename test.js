const fgArray = ['red','green','blue','green','purple','black']
output = fgArray.slice();

let r = fgArray[0];
let g = fgArray[1];
let b = fgArray[2];
let gl = fgArray[3]
let p = fgArray[4];
let bl = fgArray[5];
const replaceGreen = () => {
    output.forEach((element, i) => {
        if (element === !g && !gl){
            return output[i]
        } else if (element === g && gl){
            output[i] = bl;
        }
    });
};

console.log(fgArray);
replaceGreen();
console.log(output);

