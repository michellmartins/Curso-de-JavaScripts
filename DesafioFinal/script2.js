let tab = [3 , 7] 

let valores = []

for ( indexTab = 0 ; indexTab < tab.length ; indexTab++) {

    for (indexMult = 0 ; indexMult <= 10 ; indexMult++) {

        valores = tab[indexTab] * indexMult
        console.log(`${tab[indexTab]} x ${indexMult} = ${valores}`)
        
}
}
