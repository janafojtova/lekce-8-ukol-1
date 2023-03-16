/*
Catering
zapni hlavu
Mějme tři cateringové společnosti dodávající občerstvení na různé akce.
 Jsou to

Just Food: Dodává levné jídlo vyrobené z nepříliš kvalitních surovin.

Your Mama: Dodává středně drahé jídlo vyrobené z lepších surovin.

Flavour Haven: Dodává drahé jídlo z kvalitních surovin.

Napište pro každou z těcho společností funkci s jedním parametrem, který udává, 
pro kolik lidí se catering objednává. Funkce pak vrátí řetězec obsahující zprávu o 
tom že catering byl dodán a za jakou cenu. Například

catering od Flavour Haven pro 100 lidí za 300000 Kč
Vyzkoušjte si vaše funkce v konzoli. Poté napište funkci createEvent, která 
představuje vytvoření nějaké události s cateringem. Funkce na vstupu obdrží název
 události, počet lidí a funkci, pomocí které se má provést catering. Funkce 
 createEvent pak vrátí zprávu ve smyslu

 
Událost Inaugurace prezidenta s catering od Flavour Haven pro 100 lidí za 300000 Kč
*/
const justFood = (pocetLidi) => {
	return " catering od Just Food pro "+ pocetLidi+ " lidí za "+(pocetLidi * 100)
    }

const yourMama = (pocetLidi) => {
	return " catering od Your Mama pro "+ pocetLidi+ " lidí za "+(pocetLidi * 200)
}
const flavourHaven = (pocetLidi) => {
	return " catering od Flavour Haven pro "+ pocetLidi+ " lidí za "+(pocetLidi * 300)
}

const createEvent=(nazevUdalosti, pocetLidi, funkceProCatering)=>{
    return nazevUdalosti + funkceProCatering(pocetLidi)
}
console.log(createEvent("Inaugurace prezidenta",100, flavourHaven))