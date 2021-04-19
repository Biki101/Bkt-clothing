import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IhrD7SFQrKjI8DRtRhD0swHRgs6u1XU5ktte8XpcstkQNbGxMiiaKbPEKE0I2Q3gjvf5OsM2HmvQdVcuJPmQ5IZ00hNMBMmj2';

    const onToken = token => {
        console.log(token);
        alert('Payment Sucessfull');
    };

    return (<StripeCheckout
        label="Pay Now"
        name="BKT Clothing Ltd."
        billingAddress
        shippingAddress
        image='http://svgshare.com/i/CUz.svg'
        description={`Your total price is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}

    />);
};

export default StripeCheckoutButton;