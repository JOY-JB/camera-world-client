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
        fetch(`https://damp-plateau-38093.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    if (loading) {
        return <div className=" flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
    }

    return (
        <div className="flex m-8 px-20 justify-between">
            <PurchaseProduct key={product._id} product={product}></PurchaseProduct>
            <PurchaseForm key={id} productId={id}></PurchaseForm>
        </div>
    );
};

export default Purchase;