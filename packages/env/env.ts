import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

// Even though your editor probably tells you that import.meta.env === process.env, it's not the case every time.
const internalEnv = typeof process !== 'undefined' ? process.env : import.meta.env;

export const env = createEnv({
    clientPrefix: 'VITE_',
    client: {
        VITE_APP_VERSION: z.string().optional().transform(value => value || 'development'),
    },
    server: {
        // https://nodejs.org/en/learn/getting-started/nodejs-the-difference-between-development-and-production
        NODE_ENV: z.enum([ 'development', 'production', 'test' ]).prefault('production'),
    },
    emptyStringAsUndefined: true,
    runtimeEnv: internalEnv,
});
