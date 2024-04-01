import React, { useContext } from 'react';
import TestPage from '../components/TestPage/TestPage';
import { OrderContextManager } from '../root';


export default function Test(){
    const [getServiceTypeId, setServiceTypeId] = useContext(OrderContextManager);

    return (
        <div>
            <h1 className='text-3xl text-red-500'>Testing page</h1>
            <h3 className='bg-red-500 text-white font-bold p-2'>check contextManager : {getServiceTypeId}</h3>
            {process.env.SHOPIFY_APP_URL}
            <TestPage/>
        </div>
    );
};
