import { loadEnvConfig } from '@next/env'
 
const projectDir = process.cwd();
const dev = process.env.NODE_ENV !== 'production'; // Checks if it's in development mode
loadEnvConfig(projectDir, dev);
