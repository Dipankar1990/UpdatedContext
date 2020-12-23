import React, { useContext } from 'react';
import { UserContext, ProductContext } from "../App";
const CompC = () => {
    const UserDetails = useContext(UserContext)
    const ProductDetails = useContext(ProductContext)

    return ( 
    <>
        <h1>{UserDetails.name}</h1>
        <h1>{UserDetails.email}</h1>
        <h1>{ProductDetails.productName}</h1>
        <h1>{ProductDetails.cost}</h1>
    </> 
    );
}
 
export default CompC;