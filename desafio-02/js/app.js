// Escribir funcion que determine si dos objetos son iguales
// Solución usando recursividad
function comparaObjetos(obj1, obj2){
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
        for(let i = 0; i <= obj1.length; i++){
            if (!comparaObjetos(obj1[i], obj2[i])) {
                return false;
            }
        }
        return true;
    }
    if(typeof obj1 === 'object' && typeof obj2 === 'object' ){
        const keys = Object.keys(obj1);
        for(const key of keys){
            if(!comparaObjetos(obj1[key], obj2[key])){
                return false
            }
        }
        return true;
    }

    return obj1 === obj2;
}

console.log(comparaObjetos(2,4));
console.log(comparaObjetos([2,41,51],[1,5,2]));
console.log(comparaObjetos({a:1,b:1,c:1},{a:1,b:1,c:1}));
