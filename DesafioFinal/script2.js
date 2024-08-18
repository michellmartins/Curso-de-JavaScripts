let mult = [ 3 , 7]
let vezes = [ 1,2,3,4,5,6,7,8,9,10]


for (indexM = 0 ; indexM < mult.length ; indexM++) {
     
    for (indexV = 0 ; indexV < vezes.length ; indexV++) {

    console.log(`${mult[indexM]} x ${vezes[indexV]} = ${mult[indexM] * vezes[indexV]} ` )
    
}

}