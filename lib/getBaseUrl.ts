import { cache } from "react";

export const getBaseUrl = cache(() =>
  process.env.NODE_ENV
    ? `https://www.tugraz.at/sites/rdm/home`
    : `http://localhost:${process.env.PORT ?? 3000}`,
);
