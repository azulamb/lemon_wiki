import { type PageProps } from '$fresh/server.ts';
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Lemon wiki</title>
        <link rel='stylesheet' href='/styles.css' />
        <script src='/common.js'></script>
      </head>
      <body>
        <Component />
        <side-menu>
          <a href='/' class='logo'>
            <img src='/logo.svg' alt='logo' />
          </a>
          <h3>menu</h3>
          <div style={{ height: '120vh' }}></div>
        </side-menu>
      </body>
    </html>
  );
}
