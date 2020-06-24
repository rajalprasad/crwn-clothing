import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51GqlLsFQ0MeBv3NDpclB9WFmAAuvqlCZWDnE4PsOjGigVOBLSmgUfOojV2LRdWaS7IUoaTa8rTqNUU16JGKyNxfG00C3FAmajf';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment successful')
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert(
                'There was an issue with your payment. Please make sure you use the provided credit card.'
            );
        })
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='Crwn Clothing LLC.'
            billlingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;