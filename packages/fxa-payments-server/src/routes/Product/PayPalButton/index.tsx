import React from 'react';
import ReactDOM from 'react-dom';

import { useCallback } from 'react';

declare var paypal: {
  Buttons: {
    driver: Function;
  };
};

interface PayPalButtonProps {
  onCreateOrder: Function;
}

const PaypalButtonBase = paypal.Buttons.driver('react', {
  React,
  ReactDOM,
});

export const PaypalButton = ({ onCreateOrder }: PayPalButtonProps) => {
  const createOrder = useCallback(async () => {
    return onCreateOrder();
  }, []);

  return (
    <PaypalButtonBase data-testid="paypal-button" createOrder={createOrder} />
  );
};

export default PaypalButton;
