/** @type {import('next').NextConfig} */
/* const path = require('path') */
import path from 'path';


const nextConfig = {
    sassOptions: {
        /* includePaths: [path.join(__dirname, 'styles')], */
        includePaths: [path.join(new URL('.', import.meta.url).pathname, 'styles')],

    },
};

export default nextConfig;
