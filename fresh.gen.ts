// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $api_dictionary from "./routes/api/dictionary.ts";
import * as $api_joke from "./routes/api/joke.ts";
import * as $cliente from "./routes/cliente.tsx";
import * as $greet_name_ from "./routes/greet/[name].tsx";
import * as $index from "./routes/index.tsx";
import * as $inicio from "./routes/inicio.tsx";
import * as $server from "./routes/server.tsx";
import * as $Counter from "./islands/Counter.tsx";
import * as $busquedaCSR from "./islands/busquedaCSR.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/api/dictionary.ts": $api_dictionary,
    "./routes/api/joke.ts": $api_joke,
    "./routes/cliente.tsx": $cliente,
    "./routes/greet/[name].tsx": $greet_name_,
    "./routes/index.tsx": $index,
    "./routes/inicio.tsx": $inicio,
    "./routes/server.tsx": $server,
  },
  islands: {
    "./islands/Counter.tsx": $Counter,
    "./islands/busquedaCSR.tsx": $busquedaCSR,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
