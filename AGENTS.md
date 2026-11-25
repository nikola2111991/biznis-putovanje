# Rad u biznis-putovanje

Ovo je Next.js sajt. Počni od korena repoa, sveže osnove i pregleda lokalnih
izmena. Koristi npm i postojeći `package-lock.json`.

- Javni sadržaj je u `src/app/page.tsx` i `src/app/momentum/page.tsx`,
  a materijali su u `public/`. Za cenu, ponudu i naplatu proveri zatečeni
  sadržaj i važeći izvor. Njihova promena traži dogovoren obim.
- `npm ci` priprema okruženje, `npm run dev` pokreće lokalni sajt.
  Za promenu aplikacije pokreni `npm run lint` i `npm run build`.
  Za tekst proveri konkretnu putanju i sadržaj koji posetilac vidi.
- Pre udaljenog push-a proveri Vercel okidače. Push koji pokreće objavu
  traži odobrenje za tu objavu.
