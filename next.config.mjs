/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Existing redirects
      { source: "/brands/monarch", destination: "/", permanent: true },
      { source: "/brands/step", destination: "/", permanent: true },
      {
        source: "/products/door-locks/door-lock-contact-se11-1a12",
        destination: "/products/door-locks/door-lock-contact-sel1-a1z",
        permanent: true,
      },
      {
        source: "/products/door-drives/dc-door-drive-24v",
        destination: "/products/door-drives-and-motors/dc-door-drive-24v",
        permanent: true,
      },
      {
        source: "/products/door-drives/door-drive-bs-dd0001",
        destination: "/products/door-drives-and-motors/door-drive-bs-dd0001",
        permanent: true,
      },
      {
        source: "/products/door-drives/door-drive-bs-dd0002",
        destination: "/products/door-drives-and-motors/door-drive-bs-dd0002",
        permanent: true,
      },
       {
        source: "/products/door-drives/dc-door-drive-24v",
        destination: "/products/door-drives-and-motors/dc-door-drive-24v",
        permanent: true,
      },
         {
        source: "/products/door-drives/dc-door-drive-dr2009c-200w",
        destination: "/products/door-drives-and-motors/dc-door-drive-dr2009c-200w",
        permanent: true,
      },
          {
        source: "/products/door-drives/door-motor-with-encoder-pm61842",
        destination: "/products/door-drives-and-motors/door-motor-with-encoder-pm61842",
        permanent: true,
      },
  {
        source: "/products/door-drives/km-10s-door-controller-box",
        destination: "/products/door-drives-and-motors/km-10s-door-controller-box",
        permanent: true,
      },
      {
        source: "/products/door-drives/elevator-door-controller-v5",
        destination: "/products/door-drives-and-motors/elevator-door-controller-v5",
        permanent: true,
      },
       {
        source: "/products/door-drives/elevator-door-controller-do3000s",
        destination: "/products/door-drives-and-motors/elevator-door-controller-do3000s",
        permanent: true,
      },
         {
        source: "/products/door-drives/door-drive-nsfc01-02",
        destination: "/products/door-drives-and-motors/door-drive-nsfc01-02",
        permanent: true,
      },
          {
        source: "/products/door-drives/elevator-door-motor-yvp90-6",
        destination: "/products/door-drives-and-motors/elevator-door-motor-yvp90-6",
        permanent: true,
      },
          {
        source: "/products/door-drives/elevator-door-motor-yvp90-6b1",
        destination: "/products/door-drives-and-motors/elevator-door-motor-yvp90-6b1",
        permanent: true,
      },
    {
        source: "/products/door-drives/door-motor-gr63x55-24vdc-dunkermotoren",
        destination: "/products/door-drives-and-motors/door-motor-gr63x55-24vdc-dunkermotoren",
        permanent: true,
      },
       {
        source: "/products/sensors/leveling-sensor-61u-61n-30-77u-77n",
        destination: "/products/sensors/levelling-sensor-61u-61n-30-77u-77n",
        permanent: true,
      },
        {
        source: "/products/sensors/u-type-leveling-sensor",
        destination: "/products/sensors/u-type-levelling-sensor",
        permanent: true,
      },
        {
        source: "/products/sensors/leveling-sensor-zpad01-001",
        destination: "/products/sensors/levelling-sensor-zpad01-001",
        permanent: true,
      },
       {
        source: "/products/sensors/leveling-sensor-yg-28-25-2561-128",
        destination: "/products/sensors/levelling-sensor-yg-28-25-2561-128",
        permanent: true,
      },
         {
        source: "/products/sensors/leveling-sensor-gls126nt2ncno",
        destination: "/products/sensors/levelling-sensor-gls126nt2ncno",
        permanent: true,
      },
        {
        source: "/products/sensors/leveling-sensor-gls-tk",
        destination: "/products/sensors/levelling-sensor-gls-tk",
        permanent: true,
      },
         {
        source: "/products/sensors/leveling-sensor-mkf71asakx",
        destination: "/products/sensors/levelling-sensor-mkf71asakx",
        permanent: true,
      }


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
