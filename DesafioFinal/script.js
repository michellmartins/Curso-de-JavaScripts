let tabuada  =  [3, 7]
let mult = [1,2,3,4,5,6,7,8,9,10]


for (indexT = 0 ; indexT < tabuada.length; indexT++) {
  console.log('************************************')
  for (indexM = 0 ; indexM < mult.length ; indexM++) {

  console.log(`${tabuada[indexT]} x ${mult[indexM]} = ${tabuada[indexT] * mult[indexM]}`)
}

}