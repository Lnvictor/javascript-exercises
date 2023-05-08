myPrototype = {id: 29}

// creating Object with new
obj = new Object(myPrototype)
console.log(obj.id)


//creating Object with create
obj2 = Object.create(myPrototype)
obj2.name = "objetinho"
console.log(obj2.id)

// Exceptions
var i = {i: 2}
i.k // nao ira falhar, só retorna undefined

var i = undefined
// i.k // TypeError: tentar accesar propriedades em undefined lanca excecao

Object.prototype = {k: 1} // tentar setar propriedades read-only gera falha silenciosa (Nao lança exceção)

// Testando propriedades
console.log(obj2.hasOwnProperty("name")) // true: propriedade propria
console.log(obj2.hasOwnProperty("id")) // false: propriedade herdada dp prototype