import React, { useEffect, useRef, useState } from 'react';
import { loadPaymentWidget, ANONYMOUS } from '@tosspayments/payment-widget-sdk';
import styled from 'styled-components';

type PaymentWidget = {
  renderPaymentMethods: (selector: string, options: any, config: any) => any;
  renderAgreement: (selector: string, options: any) => any;
  requestPayment: (paymentInfo: PaymentInfo) => void;
};

type PaymentInfo = {
  orderId: string;
  orderName: string;
  coin:number,
  amount: number;
  successUrl: string;
  failUrl: string;
};


function Checkout() {
  const clientKey = process.env.REACT_APP_TOSS_PAYMENTS_CLIENT_KEY as string;
  const paymentWidgetRef = useRef<PaymentWidget | null>(null);
  const paymentMethodsWidgetRef = useRef<any>(null);
  const agreementWidgetRef = useRef<any>(null);
  const [price, setPrice] = useState<number>(500);
  const [coin, setCoin] = useState<number>(500)
  //   const clientKey = 'test_ck_vZnjEJeQVxK4P0RDgevd3PmOoBN0';
  const customerKey = '4a394e47-64a1-44de-91c2-6bcd30d72c57'; // 내 상점에서 고객을 구분하기 위해 발급한 고객의 고유 ID
  const generateRandomString = (): string => {
    return Math.random().toString(36).substr(2, 10);
  };

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
    <>
      <PaymentsWrapper className="payment-method">
        <PaymentsWrapper className="agreement"></PaymentsWrapper>
      </PaymentsWrapper>
      <PaymentBtn
        onClick={async () => {
          const paymentWidget = paymentWidgetRef.current;
          try {
            await paymentWidget?.requestPayment({
              orderId: generateRandomString(),
              orderName: `코인 ${coin}개`,
              amount: price,
              coin,
              successUrl: `${window.location.origin}/success`,
              failUrl: `${window.location.origin}/fail`,
            });
          } catch (error) {
            // TODO: 에러 처리
          }
        }}
      >
        결제하기
      </PaymentBtn>
    </>
  );
}

export default Checkout;

const PaymentsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PaymentBtn = styled.button`
  width: 70%;
  height: 40px;
  color: white;
  margin: 10px;
  background: #0075ff;
  border-radius: 5px;
  border: 0;
  max-width: 500px;
  margin-top: 100px;
`;
