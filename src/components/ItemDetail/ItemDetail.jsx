import ItemCount from "../ItemCount/ItemCount";
import CategoriaDetalle from "./CategoriaDetalle/CategoriaDetalle";
import ImgDetalle from "./ImgDetalle/ImgDetalle";
import { useCartContext } from "../../context/CartContext";

const ItemDetail = ({ objeto }) => {
    const { agregaAlCarrito, cartList ,notify, errToast} = useCartContext()

    if (cartList.some(elem => elem.id === objeto.id && elem.nombre === objeto.nombre)) {
        //este id se repite 
        const objeto2 = cartList.find(elem => elem.id === objeto.id)
        objeto = objeto2
    }


    const onAdd = (objeto, cant, precioTotal) => {

        if (objeto.stock <= objeto.comprado) {
            errToast('😡😡 no hay stock')
        } else {
            agregaAlCarrito(
                {
                    ...objeto,
                    comprado: cant,
                    precioTotal: precioTotal * cant
                })
            notify(`🥰🥰 compraste ${cant} ${objeto.nombre}`);
        }

        // agregarCarrito( {...objeto, cantidad:cant} );

    }

    console.log("Render : ItemDetail")
    return (
        <>
            <section className="itemDetailContain">
                <ImgDetalle objeto={objeto} describe={objeto.descripcion} />

                <section className="detalle">
                    <h2 className="nombre"># {objeto.nombre}</h2>
                    <p className="descripcion">{objeto.descripcion}</p>
                    <h2 className="precio">${objeto.precio}</h2>
                    <h3 className="precioTotal">{objeto.precioTotal}</h3>
                    <p className="categoria"><strong>Disponibles: </strong>{objeto.comprado ? (objeto.stock - objeto.comprado) : objeto.stock}</p>
                    <p className="categoria"><strong>Categorias:</strong></p>

                    <CategoriaDetalle objeto={objeto} />
                    <ItemCount producto={objeto} inicial={1} stock={objeto.comprado ? (objeto.stock - objeto.comprado) : objeto.stock} onAdd={onAdd} />


                </section>

            </section>
        </>
    )
}
export default ItemDetail