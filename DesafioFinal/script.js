
let tab = [3, 7] 
let multi = [1,2,3,4,5,6,7,8,9,10]

for (indexT = 0 ; indexT < tab.length ; indexT++) {
  
  for ( indexM = 0 ; indexM < multi.length ; indexM++) 

    console.log(`${tab[indexT]} x ${multi[indexM]} = ${tab[indexT]*multi[indexM]}`)
}