import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import useAuth from '../../../../../Hooks/useAuth';
import PurchaseForm from './PurchaseForm/PurchaseForm';
import PurchaseProduct from './PurchaseProduct/PurchaseProduct';

const Purchase = () => {
    const { loading } = useAuth();
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    if (loading) {
        return <div class=" flex justify-center items-center">
            <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
    }

    return (
        <div className="flex m-8 px-20 justify-between">
            <PurchaseProduct product={product}></PurchaseProduct>
            <PurchaseForm productId={id}></PurchaseForm>
        </div>
    );
};

export default Purchase;