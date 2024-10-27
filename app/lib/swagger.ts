import { createSwaggerSpec } from 'next-swagger-doc';

import 'server-only';

export const getApiDocs = async () => {
  const spec = createSwaggerSpec({
    apiFolder: 'app/api',
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Innov8tech API',
        version: '1.0',
        description: "API and Integration for Innov8Tech",
        contact: {
          name: "Innov8Tech Support",
          email: "dev@innov8Tech.co"
        }
      },
      components: {
        securitySchemes: {
          BearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
      security: []
    },
  });
  return spec;
};