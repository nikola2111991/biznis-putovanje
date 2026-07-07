import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "MOMENTUM · 7-dnevni challenge",
  description:
    "7-dnevni mini intensive challenge za zene preduzetnice. Vrati momentum, kreiraj standarde, napravi masivnu akciju. Startuje 11.7.",
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: `${SITE_URL}/momentum`,
    title: "MOMENTUM · 7-dnevni challenge",
    description:
      "Vrati momentum, kreiraj standarde, napravi masivnu akciju. 7 dana. Startuje 11.7.",
    images: [{ url: "/images/momentum-banner.jpg" }],
  },
};

// TODO (Milica/Nikola): zameni pravim StanStore / checkout linkom za prijavu.
const CHECKOUT_URL = "#prijava";

const OUTCOMES = [
  "postaviti visoke standarde",
  "pociscati navike u svakodnevnici koje te zatrpavaju i tako lakse kreirati momentum",
  "poceti da zavrsavas zapoceto",
  "napraviti konkretne pomake u svom biznisu",
  "aktivirati prodaju, vidljivost i komunikaciju",
  "vratiti osecaj kontrole, energije i uzbudjenja oko svog biznis putovanja",
];

const ANSWERS = [
  ["Kazes nemas jasnocu?", "Momentum kreira jasnocu."],
  ["Kazes nema prodaje?", "Momentum kreira prodaju."],
  ["Kazes nema novih ljudi na profilu?", "Momentumom se privlace novi ljudi."],
  ["Kazes nisi bas okej sa sobom?", "Momentumom se kreira vrhunski standard i dobar osecaj."],
];

function Cta({ children }: { children: React.ReactNode }) {
  return (
    <Link
      href={CHECKOUT_URL}
      className="inline-flex items-center justify-center bg-[#8B0E1A] px-10 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-[#B01326] shadow-[0_0_40px_rgba(139,14,26,0.35)]"
    >
      {children}
    </Link>
  );
}

export default function MomentumPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0B0A0A] text-white font-sans selection:bg-[#8B0E1A]/40">
      {/* Mini header */}
      <header className="mx-auto flex max-w-5xl items-center justify-between px-5 py-6 sm:px-8">
        <Link href="/" className="font-heading text-xl text-white/90 tracking-wide">
          Milica Pavic
        </Link>
        <span className="text-xs uppercase tracking-[0.25em] text-white/50">
          Startuje 11.7.
        </span>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,14,26,0.22)_0%,transparent_60%)]" />
        <div className="relative mx-auto max-w-5xl px-5 pt-8 pb-16 text-center sm:px-8 sm:pt-12 sm:pb-24">
          <p className="font-heading italic text-lg text-white/70 sm:text-xl">
            7-dnevni mini intensive challenge
          </p>

          <div className="mx-auto mt-8 w-full max-w-3xl overflow-hidden rounded-lg border border-white/10">
            <Image
              src="/images/momentum-banner.jpg"
              alt="MOMENTUM"
              width={1290}
              height={409}
              priority
              className="h-auto w-full"
            />
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-white/80">
            Ostatak godine je rezervisan za masivnu akciju. Vrati momentum, kreiraj
            standarde koji nisu mlohavi i iznenadi samu sebe sta mozes postici u kratkom
            roku.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <Cta>Udji u MOMENTUM za 77&euro;</Cta>
            <p className="text-sm text-white/50">
              Sledecih 48h: Momentum + BONUS Ekspanzija za 77&euro;
            </p>
          </div>
        </div>
      </section>

      {/* HOOK - narativ */}
      <section className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-24">
        <blockquote className="border-l-2 border-[#8B0E1A] pl-6">
          <p className="font-heading text-2xl italic leading-snug text-white sm:text-3xl">
            &bdquo;Ovo je moja godina.&rdquo;
          </p>
        </blockquote>

        <div className="mt-8 space-y-5 text-lg leading-relaxed text-white/75">
          <p>
            Pocetkom godine si rekla: ove godine cu konacno napraviti ozbiljniju pricu.
            Zaradjivacu vise nego ikad. Bicu dosledna, pojavljivacu se, privuci cu nove
            klijentkinje.
          </p>
          <p>
            Nema vise igranja, nema vise na pola snage. Idem all in. Svet nije spreman za
            ono sto imam u rukavu.
          </p>
          <p className="text-white/90">
            I nekoliko meseci kasnije... Preciznije, proslo je 6 meseci. Jul vec odmice.
          </p>
        </div>
      </section>

      {/* STA SE DESILO */}
      <section className="bg-[#120A0B] py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-5 sm:px-8">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Sta se desilo?
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-white/75">
            <p>
              Svet nije video sta sve imas u rukavu. Negde duboko u sebi znas da nisi tamo
              gde si mislila da ces biti. Znas da nije u pitanju trziste, nije ni algoritam,
              nije ni do informacija, jer imas mnogo vise znanja nego ikada pre.
            </p>
            <p>Pa sta je onda? Mmm, ja znam.</p>
          </div>

          <p className="my-10 text-center font-title text-[10vw] uppercase tracking-tight text-[#B01326] sm:text-7xl">
            Momentum.
          </p>

          <div className="space-y-5 text-lg leading-relaxed text-white/75">
            <p className="text-white/90">Izgubila si ga.</p>
            <p>
              Krenula si pa odleprsala mentalno i energetski. Dobila inspiraciju, otvorio
              ti se portal, napisala 15 ideja, ispricala drugarici, partneru, i onda ih
              nisi realizovala.
            </p>
            <p>
              Upisala jos jedan kurs jer si pomislila da ti fali jos znanja i onda u pola
              shvatila da ne mozes ni to da ispratis, da uporno radis na mindsetu a da
              nemas problem sa tim uopste.
            </p>
            <p>
              Objavila nekoliko Reelsa i izgubila se negde u analiziranju istih. Dosao
              jedan klijent i onda si naredne dve nedelje bila toliko fokusirana na tog
              jednog klijenta da si potpuno prestala da gradis svoj biznis i da ga skaliras.
            </p>
            <p>
              I sve se svodi na onih par momenata kada ti naidje toliko jak nalet
              inspiracije da malo mrdnes, osetis uzbudjenje i onda flipnes.
            </p>
          </div>
        </div>
      </section>

      {/* MOMENTUM JE ODGOVOR */}
      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="mx-auto mb-10 max-w-xl text-center text-lg italic text-white/70">
          &bdquo;Ali za momentum mi treba jasnoca, feedback, podrska, jos ljudi, bolji
          osecaj u telu...&rdquo;
        </p>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {ANSWERS.map(([q, a]) => (
            <div key={q} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-4">
              <p className="text-white/60 sm:w-1/2">{q}</p>
              <p className="font-heading text-lg text-white sm:w-1/2">{a}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center font-heading text-2xl font-bold leading-snug text-white sm:text-3xl">
          Sta god da mi kazes, <span className="text-[#B01326]">momentum je odgovor.</span>
        </p>
      </section>

      {/* PITCH */}
      <section className="bg-[#120A0B] py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-5 sm:px-8">
          <div className="space-y-5 text-lg leading-relaxed text-white/75">
            <p>
              Ne zelim da narednih 6 meseci radis na mindsetu i puno filozofiras. Zelim da
              se zaletis i iznenadis samu sebe sta mozes postici u kratkom roku. Jer ti jesi
              ta. Ispred nosa je.
            </p>
            <p>
              Portal je otvoren, samo je potrebno da kreiras standard i energetske temelje
              gde neces flipnuti svaki peti dan. Jednom kada kreiras dokaz, boostovaces se
              endorfinima i svim hormonima i neces stati.
            </p>
          </div>

          <div className="mt-12 border border-[#8B0E1A]/40 bg-[#0B0A0A] p-8 sm:p-10">
            <p className="font-heading text-2xl font-bold text-white sm:text-3xl">
              Zato sam kreirala <span className="text-[#B01326]">MOMENTUM.</span>
            </p>
            <p className="mt-4 text-lg leading-relaxed text-white/75">
              Mini intensive challenge koji traje 7 dana. Ovo nije jos jedan program gde ces
              samo slusati informacije. Svaki dan te ceka zadatak. Ovo je iskustvo kroz koje
              ces:
            </p>

            <ul className="mt-8 space-y-4">
              {OUTCOMES.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rotate-45 bg-[#B01326]" />
                  <span className="text-white/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* KAKO FUNKCIONISE */}
      <section className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-24">
        <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
          Kako funkcionise?
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-white/75">
          Traje 7 dana. U Telegram kanalu dolazim svaki dan sa jednim audio treningom,
          nekim svojim iskustvom, dobices uvid kako ja sebe vodim i jednim zadatkom za tebe,
          kako da ti uradis to za sebe.
        </p>
        <p className="mt-6 font-heading text-xl italic text-white/85">
          Ovim momentumom kreiraces standarde koji nisu mlohavi.
        </p>
        <p className="mt-6 text-lg leading-relaxed text-white/75">
          Ovo je za tebe koja od ovog trenutka ne prihvata vise mlohave standarde i ne zeli
          da ima rezultate u biznisu koji su ispod njenog potencijala.
        </p>
      </section>

      {/* BONUS */}
      <section className="bg-[#120A0B] py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-5 sm:px-8">
          <div className="border border-[#B01326]/50 bg-gradient-to-b from-[#8B0E1A]/15 to-transparent p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B01326]">
              Bonus u naredna 48h
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">
              Program Ekspanzija
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-white/80">
              <p>
                Sama vrednost Ekspanzije prevazilazi ovo, tako da je ovo nesto najblesavije
                sto sam uradila, ali bas zelim da kreiras momentum i da usput prodajes
                ekspanzivno.
              </p>
              <p>
                Ekspanzija je takodje izazov koji se sastoji od 14 audio aktivacija na temu
                prodaje. Dodatni sut u dupe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CENA / CTA */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,14,26,0.28)_0%,transparent_65%)]" />
        <div className="relative mx-auto max-w-xl px-5 text-center sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B01326]">
            Ponuda traje 48h
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">
            Momentum + bonus Ekspanzija
          </h2>

          <div className="mt-8 flex items-baseline justify-center gap-2">
            <span className="font-title text-7xl text-white sm:text-8xl">77</span>
            <span className="font-heading text-2xl text-white/70">&euro;</span>
          </div>

          <ul className="mx-auto mt-8 max-w-sm space-y-3 text-left">
            <li className="flex items-start gap-3 text-white/80">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rotate-45 bg-[#B01326]" />
              <span>Pristup Momentumu do kraja godine</span>
            </li>
            <li className="flex items-start gap-3 text-white/80">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rotate-45 bg-[#B01326]" />
              <span>Pristup bonus Ekspanziji do kraja jula</span>
            </li>
            <li className="flex items-start gap-3 text-white/80">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rotate-45 bg-[#B01326]" />
              <span>Svaki dan audio trening i zadatak u Telegram kanalu</span>
            </li>
          </ul>

          <div className="mt-10 flex flex-col items-center gap-4">
            <Cta>Rezervisi svoje mesto</Cta>
            <p className="font-heading text-lg italic text-white/80">
              Cekam te unutra. Startujemo 11.7.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 text-center">
        <p className="font-heading text-lg italic text-white/70">Milica Pavic</p>
        <p className="mt-2 text-xs text-white/40">MOMENTUM &middot; 7-dnevni challenge</p>
      </footer>
    </div>
  );
}
