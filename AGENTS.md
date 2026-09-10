# Codex: biznis-putovanje

Next.js aplikacija koristi npm i `package-lock.json`.
`CLAUDE.md` upućuje na ovaj fajl, pa pravila ostaju na jednom mestu.

- Ulazne stranice su u `src/app/`, komponente u `src/components/`,
  a zajednički sadržaj i vrednosti u `src/lib/content.ts` i `src/lib/constants.ts`.
  Čitaj postojeću komponentu i njen izvor sadržaja pre pravljenja kopije.
- Koristi verzije iz `package.json` i lockfile-a. Iz korena:
  `npm ci`, `npm run lint`, `npx tsc --noEmit` i `npm run build`.
- Nema npm test komande ni GitHub Actions workflow-a u ovom repou.
  Za UI promenu pregledaj stvarni prikaz, mobilnu širinu i pogođene interakcije.
  Uspešan build ne predstavlja automatsku potvrdu tih scenarija.
- Za paralelne izmene koristi zasebna radna stabla i različite dev portove.
  Gašenje jednog dev servera ne sme prekinuti posao drugog razgovora.
