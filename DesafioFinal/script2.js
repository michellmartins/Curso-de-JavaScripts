NumSort = [ 32 ,11, 54, 95 ,44, 22]

NumJog = [ 11, 54, 95, 44 , 22, 33, ]

NumAcer = []

for (indexS = 0 ; indexS < NumSort.length ; indexS ++ ) 
    for(indexJ = 0 ; indexJ < NumJog.length ; indexJ++) {

        if (NumSort[indexS] === NumJog[indexJ]) {

            console.log(NumSort[indexS])
        }
}   
    
