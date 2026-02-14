import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    base: '/RED/',
    build: {
        rollupOptions: {
            input: {
                main: resolve('index.html'),
                modelos: resolve('modelos.html'),
                seleccionando: resolve('seleccionando.html'),
                recursos: resolve('recursos.html'),
                rediseno: resolve('rediseno.html'),
                aplicacion: resolve('aplicacion.html'),
                referencias: resolve('referencias.html'),
            },
        },
    },
});
