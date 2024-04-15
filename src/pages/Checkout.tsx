import React, { useEffect, useRef, useState } from 'react';
import { loadPaymentWidget, ANONYMOUS } from '@tosspayments/payment-widget-sdk';
import styled from 'styled-components';

type PaymentWidget = {
  renderPaymentMethods: (selector: string, options: any, config: any) => any;
  renderAgreement: (selector: string, options: any) => any;
};

function Checkout() {
  const cliuent = process.env.REACT_APP_TOSS_PAYMENTS_CLIENT_KEY;
  const paymentWidgetRef = useRef<PaymentWidget | null>(null);
  const paymentMethodsWidgetRef = useRef<any>(null);
  const agreementWidgetRef = useRef<any>(null);
  const [price, setPrice] = useState<number>(1000);
  const clientKey = 'test_ck_vZnjEJeQVxK4P0RDgevd3PmOoBN0';
  const customerKey = '4a394e47-64a1-44de-91c2-6bcd30d72c57'; // 내 상점에서 고객을 구분하기 위해 발급한 고객의 고유 ID

  useEffect(() => {
    (async () => {
      const paymentWidget = await loadPaymentWidget(clientKey, customerKey);

      if (paymentWidgetRef.current == null) {
        paymentWidgetRef.current = paymentWidget;
      }
      const paymentMethodsWidget =
        paymentWidgetRef.current?.renderPaymentMethods(
          '.payment-method',
          { value: price },
          { variantKey: 'DEFAULT' },
        );

      agreementWidgetRef.current = paymentWidgetRef.current?.renderAgreement(
        '.agreement',
        {
          variantKey: 'DEFAULTxz',
        },
      );

      paymentMethodsWidgetRef.current = paymentMethodsWidget;
    })();
  }, []);

  return (
    <PaymentsWrapper className="payment-method">
      <PaymentsWrapper className="agreement"></PaymentsWrapper>
    </PaymentsWrapper>
  );
}

export default Checkout;

const PaymentsWrapper = styled.div`
    &.payment-method {
        width: 100%;
    }
    &.agreement {
        width: 100%;
    }
`;
