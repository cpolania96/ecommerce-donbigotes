import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFetch } from '../../Main/data/mockProducts';
import ContainerDetail from '../ContainerDetail';

function ItemDetailContainer() {
    const [producto, setProducto] = useState({})
    const { detalleId } = useParams()
    useEffect(() => {
        getFetch
            .then(resp => setProducto(resp.find(prod => prod.id === detalleId)))
    }, [detalleId])
    return (
        <ContainerDetail prod={producto} />
    )
}

export default ItemDetailContainer;