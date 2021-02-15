/**
 * Lazy load the CartSummary component.
 * Styles will only be created after the client-side is loaded.
 * This prevents a bug in which some children elements are mistakenly generated
 * with the same class name when the client returns from a cancelled order.
 */

import dynamic from 'next/dynamic';

export default dynamic(() => import('./CartSummary'), {
  ssr: false,
});
