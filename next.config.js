/** @type {import('next').NextConfig}  */

module.exports = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '127.0.0.1',
                port: '8000',
                pathname: '**'
            }
        ]
    }
    // experimental:{
    //     appDir:true
    // }
}