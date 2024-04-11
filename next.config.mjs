/** @type {import('next').NextConfig} */
/* const path = require('path') */
import { hostname } from 'os';
import path from 'path';


const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                port: "",
                hostname: "**"
            }
        ]
    },
    sassOptions: {
        /* includePaths: [path.join(__dirname, 'styles')], */
        includePaths: [path.join(new URL('.', import.meta.url).pathname, 'styles')],

    },
};

export default nextConfig;
