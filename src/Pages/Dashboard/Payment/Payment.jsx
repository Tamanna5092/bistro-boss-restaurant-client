import React from 'react';
import {loadStripe} from '@stripe/stripe-js'
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { Elements } from '@stripe/react-stripe-js';
import { meta } from '@eslint/js';
import CheckoutFrom from './CheckoutFrom';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
const Payment = () => {
    return (
        <div>
            <SectionTitle
            subHeading={'Please pay to eat'}
            heading={'payment'}
            ></SectionTitle>
            <div>
             <Elements stripe={stripePromise}>
                <CheckoutFrom></CheckoutFrom>
             </Elements>
            </div>
        </div>
    );
};

export default Payment;