/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Existing redirects
      { source: "/brands/monarch", destination: "/", permanent: true },
      { source: "/brands/step", destination: "/", permanent: true },

      // ✅ Force non-www → www (SEO fix)
      // {
      //   source: "/:path*",
      //   has: [
      //     {
      //       type: "host",
      //       value: "bestechparts.ae",
      //     },
      //   ],
      //   destination: "https://www.bestechparts.ae/:path*",
      //   permanent: true, // 308 Permanent Redirect
      // },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval'
                https://www.googletagmanager.com
                https://www.google-analytics.com
                https://googleads.g.doubleclick.net
                https://www.googleadservices.com
                https://www.google.com
                https://www.gstatic.com
                https://stats.g.doubleclick.net;
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
              img-src 'self' data: blob:
                https://www.google.com
                https://www.googleadservices.com
                https://googleads.g.doubleclick.net
                https://www.google-analytics.com
                https://stats.g.doubleclick.net
                https://www.googletagmanager.com
                https:;
              font-src 'self' https://fonts.gstatic.com;
              connect-src 'self'
                https://www.google-analytics.com
                https://www.googletagmanager.com
                https://www.google.com
                https://www.google.co.in
                https://www.googleadservices.com
                https://googleads.g.doubleclick.net
                https://stats.g.doubleclick.net
                https://api.example.com;
              frame-src 'self'
                https://www.google.com
                https://www.googletagmanager.com
                https://maps.google.com
                https://www.youtube.com
                https://player.vimeo.com;
              object-src 'none';
              base-uri 'self';
              form-action 'self';
            `.replace(/\s{2,}/g, " "),
          },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "geolocation=(), microphone=(), camera=()",
          },
        ],
      },
      {
        source: "/:all*(jpg|jpeg|png|gif|webp|svg)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:all*(css|js)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
