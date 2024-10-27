'use client';
import dynamic from 'next/dynamic';
import 'swagger-ui-react/swagger-ui.css';

type Props = {
  // Ensure strict typing, adjust as per your needs
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  spec: Record<string, any>;
};

// Dynamically import only the default export (SwaggerUI component) from swagger-ui-react
const SwaggerUI = dynamic(() => import('swagger-ui-react').then((mod) => mod.default), { ssr: false });

function ReactSwagger({ spec }: Props) {
  return <SwaggerUI spec={spec} />;
}

export default ReactSwagger;
