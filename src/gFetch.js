//#region dbProductos
const productos = [
    { "id": 1, "nombre": "maestro roshi", "descripcion": "funko dragon ball z master roshi coleccion.", "stock": 5, "precio": 1750, "descuento": 5, "genero": "anime", "tipo": "general", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102328/imgs/haloween/funkos/dbz/roshi2_xs7nzl.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1669161447/imgs/haloween/funkos/dbz/roshi3_rt7ekg.png", "imagenC": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102375/imgs/haloween/funkos/dbz/roshi_kannff.png", "imagenD": "", "clave1": "dragon ball", "clave2": "animacion", "clave3": "serie tv" },
    { "id": 2, "nombre": "pacemaker", "descripcion": "funko coleccion serie pacemaker, pacemarker en boxers.", "stock": 7, "precio": 1500, "descuento": 10, "genero": "tv y serie", "tipo": "general", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667114290/imgs/haloween/funkos/pelis/peacemaker_boxer_sbdcrc.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667114290/imgs/haloween/funkos/pelis/peacemaker_boxer2_csejem.png", "imagenC": "", "imagenD": "", "clave1": "pacemaker", "clave2": "accion", "clave3": "dc comics" },
    { "id": 3, "nombre": "tornado", "descripcion": "funko coleccion one punch man, tornado del infierno.", "stock": 5, "precio": 1200, "descuento": 15, "genero": "anime", "tipo": "general", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1669190215/imgs/haloween/funkos/anime/tornado_sgvolg.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1669190218/imgs/haloween/funkos/anime/tornado2_vj3dh9.png", "imagenC": "", "imagenD": "", "clave1": "one punch man", "clave2": "anime", "clave3": "serie tv" },
    { "id": 4, "nombre": "saitama", "descripcion": "funko coleccion one punch man, saitama casual, camiseta oppai.", "stock": 5, "precio": 1200, "descuento": 15, "genero": "anime", "tipo": "banner", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1669190210/imgs/haloween/funkos/anime/saitama1_axklzx.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1669190214/imgs/haloween/funkos/anime/saitama4_mgp8ej.png", "imagenC": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1669190216/imgs/haloween/funkos/anime/saitama2_shyez1.png", "imagenD": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1669190211/imgs/haloween/funkos/anime/saitama3_xwkuf6.png", "clave1": "one punch man", "clave2": "anime", "clave3": "serie tv" },
    { "id": 5, "nombre": "yamcha y puar", "descripcion": "funko dragon ball z yamcha y puar coleccion.", "stock": 6, "precio": 1530, "descuento": 10, "genero": "anime", "tipo": "categoria", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102390/imgs/haloween/funkos/dbz/yamcha2_ghsnru.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102427/imgs/haloween/funkos/dbz/yamcha3_i8rjfz.png", "imagenC": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102425/imgs/haloween/funkos/dbz/yamcha_asu5lu.png", "imagenD": "", "clave1": "dragon ball", "clave2": "animacion", "clave3": "serie tv" },
    { "id": 6, "nombre": "john wick", "descripcion": "funko coleccionable, john wick + perro.", "stock": 10, "precio": 1010, "descuento": 0, "genero": "movies", "tipo": "categoria", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102369/imgs/haloween/funkos/pelis/jon_week3_axwmnn.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102405/imgs/haloween/funkos/pelis/jon_week_n4kpmi.png", "imagenC": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102398/imgs/haloween/funkos/pelis/jon_week2_fdi085.png", "imagenD": "", "clave1": "John Wick", "clave2": "accion", "clave3": "cine" },
    { "id": 7, "nombre": "t-8000", "descripcion": "funko de la pelicula terminator, terminator abuelo t-8000", "stock": 6, "precio": 1150, "descuento": 20, "genero": "movies", "tipo": "destacados", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102363/imgs/haloween/funkos/pelis/terminator1_uwdmzk.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102385/imgs/haloween/funkos/pelis/terminator4_t8viae.png", "imagenC": "", "imagenD": "", "clave1": "terminator", "clave2": "accion", "clave3": "cine" },
    { "id": 8, "nombre": "charizard", "descripcion": "funko coleccion pokemon, pokemon inicial. serie rojo.", "stock": 5, "precio": 1200, "descuento": 15, "genero": "anime", "tipo": "destacados", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102375/imgs/haloween/funkos/pokemon/charizard_wodreh.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1668456314/imgs/haloween/funkos/pokemon/charizard0_n5svia.png", "imagenC": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102410/imgs/haloween/funkos/pokemon/charizard2_mxjcgr.png", "imagenD": "", "clave1": "pokemon", "clave2": "animacion", "clave3": "serie tv" },
    { "id": 9, "nombre": "daemon targaryen", "descripcion": "funko coleccion house of dragons, game of throne.", "stock": 7, "precio": 1500, "descuento": 10, "genero": "tv y serie", "tipo": "destacados", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667112418/imgs/haloween/funkos/houseOfDragons/daemon_targaryen2_ynzag1.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102376/imgs/haloween/funkos/houseOfDragons/daemon_targaryen_ktydpy.png", "imagenC": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667112419/imgs/haloween/funkos/houseOfDragons/daemon_targaryen3_lmzalo.png", "imagenD": "", "clave1": "house of the dragon", "clave2": "fantasia", "clave3": "serie tv" },
    { "id": 10, "nombre": "otto", "descripcion": "funko de la coleccion simpsons, otto escuchandomusica", "stock": 8, "precio": 1300, "descuento": 5, "genero": "tv y series", "tipo": "destacados", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667107307/imgs/haloween/funkos/futurama/otto_sixm1m.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667107309/imgs/haloween/funkos/futurama/otto3_qs2obj.png", "imagenC": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667107309/imgs/haloween/funkos/futurama/otto2_ii1k0u.png", "imagenD": "", "clave1": "los simpsons", "clave2": "animacion", "clave3": "serie tv" },
    { "id": 11, "nombre": "duffman", "descripcion": "funko de la coleccion simpsons, hombre duff, barry.", "stock": 9, "precio": 1300, "descuento": 0, "genero": "tv y serie", "tipo": "destacados", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667110729/imgs/haloween/funkos/futurama/duffman3_u7e3i5.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1668456636/imgs/haloween/funkos/futurama/duffman0_ghsthp.png", "imagenC": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667110730/imgs/haloween/funkos/futurama/duffman_j4rand.png", "imagenD": "", "clave1": "los simpsons", "clave2": "animacion", "clave3": "serie tv" }
]
//#endregion

//retorna una promes, resolve trae el carrito, reject msj de error
export const getProds = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 3000);

        if (productos.length === 0) {
            reject(new Error('cargando datos ...'))
        }
    })
}

export const getProducto = ({idSearch}) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos.filter((el)=> el.id == idSearch))
        }, 3000);

        if (productos.length === 0) {
            reject(new Error('cargando datos ...'))
        }
    })
}
