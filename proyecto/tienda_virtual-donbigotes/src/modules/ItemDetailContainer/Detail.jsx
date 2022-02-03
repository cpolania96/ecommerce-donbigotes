import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/cartContext'
import ItemCount from '../ItemCount/ItemCount'
import IconStar from '../ProyectModules/svg/IconStar'

function Detail({ Pdetail }) {
    const prod = Pdetail

    const { agregarAlCarrito } = useContext(CartContext)

    const onAdd = (cant) => {
        agregarAlCarrito(prod, cant)
    }
    return (
        <div className="detail">
            <div className='photo'></div>
            <div className='info'>
                <div className="rows r1">{prod.name}</div>
                <div className="rows r2">
                    <h6>Marca: Don Bigotes</h6>
                    <h6>Referencia: 258488247 </h6>
                </div>
                <div className="rows r3">
                    <div className='container-star'>
                        <IconStar width="27" />
                        <IconStar width="27" />
                        <IconStar width="27" />
                        <IconStar width="27" />
                        <IconStar width="27" />
                    </div>
                    <div className='rate'>
                        4.8/5
                    </div>
                </div>
                <div className="rows r4">
                    <h6 className='price'>${prod.price}</h6>
                    <h6 className='label'>IVA incluido*</h6>
                </div>
                <div className="rows r5">
                    <h5>Selecciona la referencia que deseas: </h5>
                    <div className='container-button'>
                        <button>
                            500ml
                        </button>
                    </div>
                    <h6>
                        Stock: Disponible
                    </h6>
                </div>
                <div className="rows r6">
                    <div className='label'>Con esta compra sumas 35 bigopuntos </div>
                    <button>
                        más info
                    </button>
                </div>
                <div className="rows r7">
                    <ItemCount stock={prod.stock} onAdd={onAdd} buttonLabel="Agregar al carrito" />
                </div>
            </div>
        </div>
    )
}

export default Detail
