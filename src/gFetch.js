//#region dbProductos
const productos = [
    { "id": 1, "nombre": "maestro roshi", "descripcion": "Funko dragon ball z master roshi coleccion.", "stock": 5, "precio": 1000, "descuento": 5, "genero": "anime", "tipo": "funkopop", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102328/imgs/haloween/funkos/dbz/roshi2_xs7nzl.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1669161447/imgs/haloween/funkos/dbz/roshi3_rt7ekg.png", "imagenC": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102375/imgs/haloween/funkos/dbz/roshi_kannff.png", "imagenD": "", "clave1": "dragon ball", "clave2": "animacion", "clave3": "serie tv" },
    { "id": 2, "nombre": "pacemaker", "descripcion": "Funko coleccion serie pacemaker, pacemarker en boxers.", "stock": 7, "precio": 1500, "descuento": 10, "genero": "tv y serie", "tipo": "funkopop", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667114290/imgs/haloween/funkos/pelis/peacemaker_boxer_sbdcrc.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667114290/imgs/haloween/funkos/pelis/peacemaker_boxer2_csejem.png", "imagenC": "", "imagenD": "", "clave1": "pacemaker", "clave2": "accion", "clave3": "dc comics" },
    { "id": 3, "nombre": "tornado", "descripcion": "Funko coleccion one punch man, tornado del infierno.", "stock": 5, "precio": 1200, "descuento": 15, "genero": "anime", "tipo": "funkopop", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1669190215/imgs/haloween/funkos/anime/tornado_sgvolg.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1669190218/imgs/haloween/funkos/anime/tornado2_vj3dh9.png", "imagenC": "", "imagenD": "", "clave1": "one punch man", "clave2": "anime", "clave3": "serie tv" },
    { "id": 4, "nombre": "saitama", "descripcion": "Funko coleccion one punch man, saitama casual, camiseta oppai.", "stock": 5, "precio": 1200, "descuento": 15, "genero": "anime", "tipo": "funkopop", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1669190210/imgs/haloween/funkos/anime/saitama1_axklzx.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1669190214/imgs/haloween/funkos/anime/saitama4_mgp8ej.png", "imagenC": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1669190216/imgs/haloween/funkos/anime/saitama2_shyez1.png", "imagenD": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1669190211/imgs/haloween/funkos/anime/saitama3_xwkuf6.png", "clave1": "one punch man", "clave2": "anime", "clave3": "serie tv" },
    { "id": 5, "nombre": "yamcha y puar", "descripcion": "Funko dragon ball z yamcha y puar coleccion.", "stock": 6, "precio": 1530, "descuento": 10, "genero": "anime", "tipo": "funkopop", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102390/imgs/haloween/funkos/dbz/yamcha2_ghsnru.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102427/imgs/haloween/funkos/dbz/yamcha3_i8rjfz.png", "imagenC": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102425/imgs/haloween/funkos/dbz/yamcha_asu5lu.png", "imagenD": "", "clave1": "dragon ball", "clave2": "animacion", "clave3": "serie tv" },
    { "id": 6, "nombre": "john wick", "descripcion": "Funko coleccionable, john wick + perro.", "stock": 10, "precio": 1010, "descuento": 0, "genero": "movies", "tipo": "funkopop", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102369/imgs/haloween/funkos/pelis/jon_week3_axwmnn.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102405/imgs/haloween/funkos/pelis/jon_week_n4kpmi.png", "imagenC": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102398/imgs/haloween/funkos/pelis/jon_week2_fdi085.png", "imagenD": "", "clave1": "John Wick", "clave2": "accion", "clave3": "cine" },
    { "id": 7, "nombre": "t-8000", "descripcion": "Funko de la pelicula terminator, terminator abuelo t-8000", "stock": 6, "precio": 1150, "descuento": 20, "genero": "movies", "tipo": "funkopop", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102363/imgs/haloween/funkos/pelis/terminator1_uwdmzk.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102385/imgs/haloween/funkos/pelis/terminator4_t8viae.png", "imagenC": "", "imagenD": "", "clave1": "terminator", "clave2": "accion", "clave3": "cine" },
    { "id": 8, "nombre": "charizard", "descripcion": "Funko coleccion pokemon, pokemon inicial. serie rojo.", "stock": 5, "precio": 1200, "descuento": 15, "genero": "anime", "tipo": "funkopop", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102375/imgs/haloween/funkos/pokemon/charizard_wodreh.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1668456314/imgs/haloween/funkos/pokemon/charizard0_n5svia.png", "imagenC": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102410/imgs/haloween/funkos/pokemon/charizard2_mxjcgr.png", "imagenD": "", "clave1": "pokemon", "clave2": "animacion", "clave3": "serie tv" },
    { "id": 9, "nombre": "daemon targaryen", "descripcion": "funko coleccion house of dragons, game of throne.", "stock": 7, "precio": 1500, "descuento": 10, "genero": "tv y serie", "tipo": "funkopop", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667112418/imgs/haloween/funkos/houseOfDragons/daemon_targaryen2_ynzag1.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102376/imgs/haloween/funkos/houseOfDragons/daemon_targaryen_ktydpy.png", "imagenC": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667112419/imgs/haloween/funkos/houseOfDragons/daemon_targaryen3_lmzalo.png", "imagenD": "", "clave1": "house of the dragon", "clave2": "fantasia", "clave3": "serie tv" },
    { "id": 10, "nombre": "otto", "descripcion": "funko de la coleccion simpsons, otto escuchandomusica", "stock": 8, "precio": 1300, "descuento": 5, "genero": "tv y series", "tipo": "funkopop", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667107307/imgs/haloween/funkos/futurama/otto_sixm1m.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667107309/imgs/haloween/funkos/futurama/otto3_qs2obj.png", "imagenC": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667107309/imgs/haloween/funkos/futurama/otto2_ii1k0u.png", "imagenD": "", "clave1": "los simpsons", "clave2": "animacion", "clave3": "serie tv" },
    { "id": 11, "nombre": "duffman", "descripcion": "funko de la coleccion simpsons, hombre duff, barry.", "stock": 9, "precio": 1300, "descuento": 0, "genero": "tv y serie", "tipo": "funkopop", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667110729/imgs/haloween/funkos/futurama/duffman3_u7e3i5.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1668456636/imgs/haloween/funkos/futurama/duffman0_ghsthp.png", "imagenC": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667110730/imgs/haloween/funkos/futurama/duffman_j4rand.png", "imagenD": "", "clave1": "los simpsons", "clave2": "animacion", "clave3": "serie tv" },

    { "id": 12, "nombre": "principe vegueta", "descripcion": "funko dragon ball z vegueta principe coleccion.", "stock": 10, "precio": 1750, "descuento": 10, "genero": "anime", "tipo": "funkopop", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102366/imgs/haloween/funkos/dbz/principe_vegueta2_u1teuy.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102413/imgs/haloween/funkos/dbz/principe_vegueta3_xruv8f.png", "imagenC": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102325/imgs/haloween/funkos/dbz/principe_vegueta_xypxkc.png", "imagenD": "", "clave1": "dragon ball", "clave2": "animacion", "clave3": "serie tv" },
    { "id": 13, "nombre": "magin vegueta", "descripcion": "funko dragon ball z vegueta maginbo coleccion.", "stock": 5, "precio": 1750, "descuento": 5, "genero": "anime", "tipo": "funkopop", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102383/imgs/haloween/funkos/dbz/vegueta_maginbu_fxxtsl.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102366/imgs/haloween/funkos/dbz/vegueta_maginbu3_q6dcj7.png", "imagenC": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102296/imgs/haloween/funkos/dbz/vegueta_maginbu2_u8upds.png", "imagenD": "", "clave1": "dragon ball", "clave2": "animacion", "clave3": "serie tv" },
    { "id": 14, "nombre": "whis", "descripcion": "funko dragon ball z wish coleccion.", "stock": 5, "precio": 1750, "descuento": 5, "genero": "anime", "tipo": "funkopop", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102329/imgs/haloween/funkos/dbz/wiss_gipo2o.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102366/imgs/haloween/funkos/dbz/wiss3_mm5ob9.png", "imagenC": "", "imagenD": "", "clave1": "dragon ball", "clave2": "animacion", "clave3": "serie tv" },
    { "id": 15, "nombre": "kami", "descripcion": "funko dragon ball z kami coleccion.", "stock": 5, "precio": 1750, "descuento": 5, "genero": "anime", "tipo": "funkopop", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102391/imgs/haloween/funkos/dbz/kamisama_esryrm.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102321/imgs/haloween/funkos/dbz/kamisama2_qkqa7n.png", "imagenC": "", "imagenD": "", "clave1": "dragon ball", "clave2": "animacion", "clave3": "serie tv" },
    { "id": 16, "nombre": "goku ssj", "descripcion": "funko dragon ball goku super sayan coleccion.", "stock": 5, "precio": 1750, "descuento": 5, "genero": "anime", "tipo": "funkopop", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102395/imgs/haloween/funkos/dbz/goku_ssj1_1_b0a9qp.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102313/imgs/haloween/funkos/dbz/goku_ssj1_4_dkk9sx.png", "imagenC": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102325/imgs/haloween/funkos/dbz/goku_ssj1_3_mj7rjw.png", "imagenD": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102294/imgs/haloween/funkos/dbz/goku_ssj1_2_v7tqnq.png", "clave1": "dragon ball", "clave2": "animacion", "clave3": "serie tv" },
    { "id": 17, "nombre": "goku angel", "descripcion": "funko dragon ball z goku angel ramen coleccion.", "stock": 5, "precio": 1750, "descuento": 5, "genero": "anime", "tipo": "funkopop", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102391/imgs/haloween/funkos/dbz/goku_angel_arw4o9.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102306/imgs/haloween/funkos/dbz/goku_angel3_fgoxkj.png", "imagenC": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102309/imgs/haloween/funkos/dbz/goku_angel2_sf6eo6.png", "imagenD": "", "clave1": "dragon ball", "clave2": "animacion", "clave3": "serie tv" },
    { "id": 18, "nombre": "goku black", "descripcion": "funko dragon ball z goku black ramen coleccion.", "stock": 5, "precio": 1750, "descuento": 5, "genero": "anime", "tipo": "funkopop", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102281/imgs/haloween/funkos/dbz/black_goku_splp8u.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102310/imgs/haloween/funkos/dbz/black_goku3_ajhhst.png", "imagenC": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102312/imgs/haloween/funkos/dbz/black_goku2_stwrwr.png", "imagenD": "", "clave1": "dragon ball", "clave2": "animacion", "clave3": "serie tv" },
    { "id": 19, "nombre": "zoidberg", "descripcion": "funko de la coleccion futurama, doctor zoidberg.", "stock": 9, "precio": 1300, "descuento": 0, "genero": "tv y serie", "tipo": "funkopop", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102280/imgs/haloween/funkos/futurama/soisber1_odpaet.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102353/imgs/haloween/funkos/futurama/soisber2_orizg4.png", "imagenC": "", "imagenD": "", "clave1": "futurama", "clave2": "animacion", "clave3": "serie tv" },
    { "id": 20, "nombre": "roberto devil", "descripcion": "funko de la coleccion futurama, roberto robot devil.", "stock": 9, "precio": 1300, "descuento": 0, "genero": "tv y serie", "tipo": "funkopop", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102375/imgs/haloween/funkos/futurama/roberto1_osc7ei.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102279/imgs/haloween/funkos/futurama/roberto2_mf93ow.png", "imagenC": "", "imagenD": "", "clave1": "futurama", "clave2": "animacion", "clave3": "serie tv" },
    { "id": 21, "nombre": "profesor farnsworth", "descripcion": "funko de la coleccion futurama, profesor farnsworth sobrinito.", "stock": 9, "precio": 1300, "descuento": 0, "genero": "tv y serie", "tipo": "funkopop", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102280/imgs/haloween/funkos/futurama/profesor2_ybznx1.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102280/imgs/haloween/funkos/futurama/profesor1_i3sx82.png", "imagenC": "", "imagenD": "", "clave1": "futurama", "clave2": "animacion", "clave3": "serie tv" },
    { "id": 22, "nombre": "mr.burns feliz", "descripcion": "funko de la coleccion los simpsons glowing mr.burns.", "stock": 9, "precio": 1300, "descuento": 0, "genero": "tv y serie", "tipo": "funkopop", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667107303/imgs/haloween/funkos/futurama/mr_berns_feliz_yszwkk.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667107307/imgs/haloween/funkos/futurama/mr_berns_feliz5_y0yafx.png", "imagenC": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667107307/imgs/haloween/funkos/futurama/mr_berns_feliz4_bmzcq7.png", "imagenD": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667107307/imgs/haloween/funkos/futurama/mr_berns_feliz3_bqzxpj.png", "clave1": "los simpsons", "clave2": "animacion", "clave3": "serie tv" },
    { "id": 23, "nombre": "homer in edges", "descripcion": "funko de la coleccion los simpsons, homer in edges.", "stock": 9, "precio": 1300, "descuento": 0, "genero": "tv y serie", "tipo": "funkopop", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667107302/imgs/haloween/funkos/futurama/homero_escondido_ojhn98.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667107306/imgs/haloween/funkos/futurama/homero_escondido2_ic4gqs.png", "imagenC": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667107307/imgs/haloween/funkos/futurama/homero_escondido3_x6lbfl.png", "imagenD": "", "clave1": "los simpsons", "clave2": "animacion", "clave3": "serie tv" },
    { "id": 24, "nombre": "fry", "descripcion": "funko de la coleccion futurama, fry.", "stock": 9, "precio": 1300, "descuento": 0, "genero": "tv y serie", "tipo": "general", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102359/imgs/haloween/funkos/futurama/frai1_ngdkhj.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102365/imgs/haloween/funkos/futurama/frai2_jwabzn.png", "imagenC": "", "imagenD": "", "clave1": "futurama", "clave2": "animacion", "clave3": "serie tv" },
    { "id": 25, "nombre": "bender", "descripcion": "funko de la coleccion futurama, Bender rofriguez oro..", "stock": 9, "precio": 1300, "descuento": 0, "genero": "tv y serie", "tipo": "funkopop", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102371/imgs/haloween/funkos/futurama/bender2_wkdcc6.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102282/imgs/haloween/funkos/futurama/bender1_kkcpni.png", "imagenC": "", "imagenD": "", "clave1": "futurama", "clave2": "animacion", "clave3": "serie tv" },
    { "id": 26, "nombre": "pacemaker", "descripcion": "funko coleccion serie pacemaker, pacemarker.", "stock": 7, "precio": 1500, "descuento": 10, "genero": "tv y serie", "tipo": "general", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667114290/imgs/haloween/funkos/pelis/peacemaker_qgcb6n.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667114290/imgs/haloween/funkos/pelis/peacemaker2_i5qphc.png", "imagenC": "", "imagenD": "", "clave1": "pacemaker", "clave2": "accion", "clave3": "dc comics" },
    { "id": 27, "nombre": "vigilante", "descripcion": "funko coleccion serie pacemaker.", "stock": 7, "precio": 1500, "descuento": 10, "genero": "tv y serie", "tipo": "funkopop", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667114290/imgs/haloween/funkos/pelis/vigilante_hehwr4.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667114290/imgs/haloween/funkos/pelis/vigilante2_drcip7.png", "imagenC": "", "imagenD": "", "clave1": "pacemaker", "clave2": "accion", "clave3": "dc comics" },
    { "id": 28, "nombre": "mando", "descripcion": "funko coleccion serie mandalorian, mando, jetpack.", "stock": 7, "precio": 1500, "descuento": 10, "genero": "tv y serie", "tipo": "general", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667104983/imgs/haloween/funkos/pelis/mandalorian_loxs0n.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667104982/imgs/haloween/funkos/pelis/mandalorian_smlwmc.jpg", "imagenC": "", "imagenD": "", "clave1": "mandalorian", "clave2": "accion", "clave3": "star wars" },
    { "id": 29, "nombre": "rhaenyra targaryen", "descripcion": "funko coleccion house of dragons, game of throne.", "stock": 7, "precio": 1500, "descuento": 10, "genero": "tv y serie", "tipo": "funkopop", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667112420/imgs/haloween/funkos/houseOfDragons/rhaenyra_targaryen2_nyp6k5.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667112421/imgs/haloween/funkos/houseOfDragons/rhaenyra_targaryen3_ofl7jk.png", "imagenC": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102375/imgs/haloween/funkos/houseOfDragons/rhaenyra_targaryen_azckwi.png", "imagenD": "", "clave1": "house of the dragon", "clave2": "fantasia", "clave3": "serie tv" },
    { "id": 30, "nombre": "alicent hightower", "descripcion": "funko coleccion house of dragons, game of throne.", "stock": 7, "precio": 1500, "descuento": 10, "genero": "tv y serie", "tipo": "general", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667112418/imgs/haloween/funkos/houseOfDragons/alicent_Hightower3_goqhsa.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102377/imgs/haloween/funkos/houseOfDragons/alicent_Hightower_vqpknd.png", "imagenC": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667112421/imgs/haloween/funkos/houseOfDragons/alicent_Hightower2_bg0uvq.png", "imagenD": "", "clave1": "house of the dragon", "clave2": "fantasia", "clave3": "serie tv" },
    { "id": 31, "nombre": "viserys targaryen", "descripcion": "funko coleccion house of dragons, game of throne.", "stock": 7, "precio": 1500, "descuento": 10, "genero": "tv y serie", "tipo": "funkopop", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667112418/imgs/haloween/funkos/houseOfDragons/rey_viserys_targaryen2_bnruhf.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102377/imgs/haloween/funkos/houseOfDragons/rey_viserys_targaryen_w8pe7z.png", "imagenC": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667112420/imgs/haloween/funkos/houseOfDragons/rey_viserys_targaryen3_ffdcnl.png", "imagenD": "", "clave1": "house of the dragon", "clave2": "fantasia", "clave3": "serie tv" },
    { "id": 32, "nombre": "corlys velaryon", "descripcion": "funko coleccion house of dragons, game of throne.", "stock": 7, "precio": 1500, "descuento": 10, "genero": "tv y serie", "tipo": "funkopop", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667112421/imgs/haloween/funkos/houseOfDragons/serpiente_marina2_y5lfhu.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102377/imgs/haloween/funkos/houseOfDragons/serpiente_marina_fozw6t.png", "imagenC": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667112422/imgs/haloween/funkos/houseOfDragons/serpiente_marina3_ixoqav.png", "imagenD": "", "clave1": "house of the dragon", "clave2": "fantasia", "clave3": "serie tv" },
    { "id": 33, "nombre": "syrax", "descripcion": "funko coleccion house of dragons, game of throne.", "stock": 7, "precio": 1500, "descuento": 10, "genero": "tv y serie", "tipo": "funkopop", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667111487/imgs/haloween/funkos/houseOfDragons/ViserionFigure2_h4xxjb.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102394/imgs/haloween/funkos/houseOfDragons/ViserionFigure_b6okoe.png", "imagenC": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667112422/imgs/haloween/funkos/houseOfDragons/ViserionFigure3_a8lvs6.png", "imagenD": "", "clave1": "house of the dragon", "clave2": "fantasia", "clave3": "serie tv" },
    { "id": 34, "nombre": "squirtle", "descripcion": "funko coleccion pokemon, pokemon inicial. serie rojo.", "stock": 5, "precio": 1200, "descuento": 15, "genero": "anime", "tipo": "funkopop", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102368/imgs/haloween/funkos/pokemon/squartle_tzsyp7.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102402/imgs/haloween/funkos/pokemon/squartle2_rbi8kn.png", "imagenC": "", "imagenD": "", "clave1": "pokemon", "clave2": "animacion", "clave3": "serie tv" },
    { "id": 35, "nombre": "psyduck", "descripcion": "funko coleccion pokemon, pokemon inicial. serie rojo.", "stock": 5, "precio": 1200, "descuento": 15, "genero": "anime", "tipo": "funkopop", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102356/imgs/haloween/funkos/pokemon/saidok_zabh0u.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102388/imgs/haloween/funkos/pokemon/saidok2_gsmqxh.png", "imagenC": "", "imagenD": "", "clave1": "pokemon", "clave2": "animacion", "clave3": "serie tv" },
    { "id": 36, "nombre": "mewtwo", "descripcion": "funko coleccion pokemon, pokemon inicial. serie rojo.", "stock": 5, "precio": 1200, "descuento": 15, "genero": "anime", "tipo": "funkopop", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102334/imgs/haloween/funkos/pokemon/mew_two2_r0gjql.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102282/imgs/haloween/funkos/pokemon/mew_two_x0fzzq.png", "imagenC": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102383/imgs/haloween/funkos/pokemon/mew_two3_o3n1mh.png", "imagenD": "", "clave1": "pokemon", "clave2": "animacion", "clave3": "serie tv" },
    { "id": 37, "nombre": "mew", "descripcion": "funko coleccion pokemon, pokemon inicial. serie rojo.", "stock": 5, "precio": 1200, "descuento": 15, "genero": "anime", "tipo": "funkopop", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102367/imgs/haloween/funkos/pokemon/mew_grdc5l.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102401/imgs/haloween/funkos/pokemon/mew2_rmuuux.png", "imagenC": "", "imagenD": "", "clave1": "pokemon", "clave2": "animacion", "clave3": "serie tv" },
    { "id": 38, "nombre": "jolteon", "descripcion": "funko coleccion pokemon, pokemon inicial. serie rojo.", "stock": 5, "precio": 1200, "descuento": 15, "genero": "anime", "tipo": "funkopop", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102364/imgs/haloween/funkos/pokemon/jolteon_ivma8x.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102417/imgs/haloween/funkos/pokemon/jolteon2_des5nl.png", "imagenC": "", "imagenD": "", "clave1": "pokemon", "clave2": "animacion", "clave3": "serie tv" },
    { "id": 39, "nombre": "flareon", "descripcion": "funko coleccion pokemon, pokemon inicial. serie rojo.", "stock": 5, "precio": 1200, "descuento": 15, "genero": "anime", "tipo": "funkopop", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102366/imgs/haloween/funkos/pokemon/flareon_xly9ir.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102407/imgs/haloween/funkos/pokemon/flareon2_sc0c5r.png", "imagenC": "", "imagenD": "", "clave1": "pokemon", "clave2": "animacion", "clave3": "serie tv" },
    { "id": 40, "nombre": "eevee", "descripcion": "funko coleccion pokemon, pokemon inicial. serie rojo.", "stock": 5, "precio": 1200, "descuento": 15, "genero": "anime", "tipo": "funkopop", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102359/imgs/haloween/funkos/pokemon/eve_toymxi.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102410/imgs/haloween/funkos/pokemon/eve3_i6gcm4.png", "imagenC": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102383/imgs/haloween/funkos/pokemon/eve2_t0i9bc.png", "imagenD": "", "clave1": "pokemon", "clave2": "animacion", "clave3": "serie tv" },
    { "id": 41, "nombre": "charmander", "descripcion": "funko coleccion pokemon, pokemon inicial. serie rojo.", "stock": 5, "precio": 1200, "descuento": 15, "genero": "anime", "tipo": "funkopop", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102360/imgs/haloween/funkos/pokemon/charmander3_qggiax.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102286/imgs/haloween/funkos/pokemon/charmander2_wcfjnp.png", "imagenC": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102402/imgs/haloween/funkos/pokemon/charmander_li1qs7.png", "imagenD": "", "clave1": "pokemon", "clave2": "animacion", "clave3": "serie tv" },
    { "id": 42, "nombre": "bulbasaur", "descripcion": "funko coleccion pokemon, pokemon inicial. serie rojo.", "stock": 5, "precio": 1200, "descuento": 15, "genero": "anime", "tipo": "general", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102371/imgs/haloween/funkos/pokemon/bolbazor_xo0yja.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102370/imgs/haloween/funkos/pokemon/bolbasor2_jqfcud.png", "imagenC": "", "imagenD": "", "clave1": "pokemon", "clave2": "animacion", "clave3": "serie tv" },
    { "id": 43, "nombre": "saitama", "descripcion": "funko coleccion one punch man, saitama con traje de super heroe.", "stock": 5, "precio": 1200, "descuento": 15, "genero": "anime", "tipo": "funkopop", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1669190213/imgs/haloween/funkos/anime/saitama_super_eoluul.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1669190219/imgs/haloween/funkos/anime/saitama_super3_dqnmua.png", "imagenC": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1669190217/imgs/haloween/funkos/anime/saitama_super2_cy8dwh.png", "imagenD": "", "clave1": "one punch man", "clave2": "anime", "clave3": "serie tv" },
    { "id": 44, "nombre": "pickle rick 2", "descripcion": "funko coleccion rick and morty pickle rick (wite laser).", "stock": 5, "precio": 1200, "descuento": 15, "genero": "anime", "tipo": "funkopop", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1669190209/imgs/haloween/funkos/anime/rick_radio1_mzvt80.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1669190214/imgs/haloween/funkos/anime/rick_radio3_fkh3x1.png", "imagenC": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1669190210/imgs/haloween/funkos/anime/rick_radio2_rsiham.png", "imagenD": "", "clave1": "rick and morty", "clave2": "anime", "clave3": "serie tv" },
    { "id": 45, "nombre": "tornado", "descripcion": "funko coleccion rick and morty, pickle rick.", "stock": 5, "precio": 1200, "descuento": 15, "genero": "anime", "tipo": "funkopop", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1669190208/imgs/haloween/funkos/anime/rick1_dyobtl.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1669190207/imgs/haloween/funkos/anime/rick2_jdsgc5.png", "imagenC": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1669190207/imgs/haloween/funkos/anime/rick3_enljhm.png", "imagenD": "", "clave1": "rick and morty", "clave2": "anime", "clave3": "serie tv" },
    { "id": 46, "nombre": "thresh", "descripcion": "figura de accion articulada de la coleccion league of legends, campeones league of legends", "stock": 5, "precio": 1550, "descuento": 5, "genero": "games", "tipo": "figura", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102344/imgs/haloween/funkos/league/tresh1_lmbstr.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102367/imgs/haloween/funkos/league/tresh2_sqcvu7.png", "imagenC": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102414/imgs/haloween/funkos/league/tresh3_v4etom.png", "imagenD": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102356/imgs/haloween/funkos/league/tresh4_w9oh33.png", "clave1": "league of legends", "clave2": "riot games", "clave3": "video juego" },
    { "id": 47, "nombre": "yasuo", "descripcion": "figura de accion articulada de la coleccion league of legends, campeones league of legends", "stock": 2, "precio": 1550, "descuento": 5, "genero": "games", "tipo": "figura", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102334/imgs/haloween/funkos/league/yasuo1_wwewgv.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102363/imgs/haloween/funkos/league/yasuo2_ko8dma.png", "imagenC": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102296/imgs/haloween/funkos/league/yasuo4_u3vcht.png", "imagenD": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102281/imgs/haloween/funkos/league/yasuo3_vrgved.png", "clave1": "league of legends", "clave2": "riot games", "clave3": "video juego" },
    { "id": 48, "nombre": "zed", "descripcion": "figura de accion articulada de la coleccion league of legends, campeones league of legends", "stock": 0, "precio": 1500, "descuento": 5, "genero": "games", "tipo": "figura", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102322/imgs/haloween/funkos/league/zed1_tnzdjt.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102362/imgs/haloween/funkos/league/zed2_sbz4ly.png", "imagenC": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102395/imgs/haloween/funkos/league/zed3_zitil9.png", "imagenD": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102421/imgs/haloween/funkos/league/zed4_zjdptl.png", "clave1": "league of legends", "clave2": "riot games", "clave3": "video juego" },
    { "id": 49, "nombre": "ashe", "descripcion": "figura de accion articulada de la coleccion league of legends, campeones league of legends", "stock": 0, "precio": 1550, "descuento": 5, "genero": "games", "tipo": "figura", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102339/imgs/haloween/funkos/league/ashe1_muh6cy.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102357/imgs/haloween/funkos/league/ashe2_alshkk.png", "imagenC": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102421/imgs/haloween/funkos/league/ashe3_brqc2n.png", "imagenD": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102328/imgs/haloween/funkos/league/ashe4_lyejo3.png", "clave1": "league of legends", "clave2": "riot games", "clave3": "video juego" },
    { "id": 50, "nombre": "wukong", "descripcion": "figura de accion articulada de la coleccion league of legends, campeones league of legends", "stock": 4, "precio": 1400, "descuento": 5, "genero": "games", "tipo": "figura", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102290/imgs/haloween/funkos/league/wukong1_wq0zmd.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102351/imgs/haloween/funkos/league/wukong2_gaknnf.png", "imagenC": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102282/imgs/haloween/funkos/league/wukong3_uyeiac.png", "imagenD": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102319/imgs/haloween/funkos/league/wukong4_j7ikic.png", "clave1": "league of legends", "clave2": "riot games", "clave3": "video juego" },
    { "id": 51, "nombre": "darius", "descripcion": "figura de accion articulada de la coleccion league of legends, campeones league of legends", "stock": 4, "precio": 1500, "descuento": 5, "genero": "games", "tipo": "figura", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102413/imgs/haloween/funkos/league/darius1_f7unlq.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102329/imgs/haloween/funkos/league/darius2_btafqi.png", "imagenC": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102389/imgs/haloween/funkos/league/darius3_ljlyte.png", "imagenD": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102292/imgs/haloween/funkos/league/darius4_vnyazz.png", "clave1": "league of legends", "clave2": "riot games", "clave3": "video juego" },
    { "id": 52, "nombre": "jinx", "descripcion": "figura de accion articulada de la coleccion league of legends, campeones league of legends", "stock": 4, "precio": 1500, "descuento": 5, "genero": "games", "tipo": "figura", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102418/imgs/haloween/funkos/league/jinx1_yqmuzg.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102331/imgs/haloween/funkos/league/jinx2_xddwvd.png", "imagenC": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102380/imgs/haloween/funkos/league/jinx3_pkgifj.png", "imagenD": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102405/imgs/haloween/funkos/league/jinx4_xvlzmr.png", "clave1": "league of legends", "clave2": "riot games", "clave3": "video juego" },
    { "id": 53, "nombre": "piltober coleccion", "descripcion": "figura de accion articulada de la coleccion league of legends, campeones league of legends", "stock": 7, "precio": 7000, "descuento": 25, "genero": "games", "tipo": "figura", "imagenA": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102363/imgs/haloween/funkos/league/pack_league_sdy03e.png", "imagenB": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1667102372/imgs/haloween/funkos/league/pack_league1_zr380s.png", "imagenC": "", "imagenD": "", "clave1": "league of legends", "clave2": "riot games", "clave3": "video juego" },

]
//#endregion

//retorna una promes, resolve trae el carrito, reject msj de error
export const getProds = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 1000);

        if (productos.length === 0) {
            reject(new Error('cargando datos ...'))
        }
    })
}

export const getProducto = (ident) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos.find((el)=> el.id === ident))
        }, 1000);

        if (productos.length === 0) {
            reject(new Error('cargando datos ...'))
        }
    })
}


