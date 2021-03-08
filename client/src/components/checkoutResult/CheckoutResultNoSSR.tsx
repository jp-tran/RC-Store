import dynamic from 'next/dynamic';

export default dynamic(() => import('./CheckoutResult'), {
  ssr: false,
});
