export const isObjetoVacio=(objeto) =>{
    return Object.keys(objeto).length===0 && objeto.constructor===Object;
}
