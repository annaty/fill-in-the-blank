import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>cloze</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <h1 class={"text-4xl"}>Small cloze app</h1>
        <Component />
      </body>
    </html>
  );
}