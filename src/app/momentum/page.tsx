import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "MOMENTUM",
  description:
    "7-dnevni mini intensive challenge za žene preduzetnice. Kreiraj momentum, postavi visoke standarde, napravi masivnu akciju. Startuje 12. jula.",
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: `${SITE_URL}/momentum`,
    title: "MOMENTUM",
    description:
      "7-dnevni mini intensive challenge. Kreiraj momentum. Startuje 12. jula.",
    images: [{ url: "/images/momentum-hero.jpg" }],
  },
};

// Stripe payment link (MOMENTUM 77 EUR + bonus Ekspanzija).
const CHECKOUT_URL = "https://buy.stripe.com/3cI7sLcUC60k4zQ3O21Jm0y";

const RESULTS = [
  "Moj profil je skalirao. Preko 3000 novih ljudi je došlo na profil. Naučila sam kako kreirati sadržaj i prodavati, i do mene je došlo na desetine idealnih klijenata koji su krenuli sa mnom na putovanje.",
  "Lansirala sam još 3 programa, 1na1 popunjen, klijenti su ulazili masivno i kreirali vrhunske rezultate. Ovog meseca idu još dva programa. Portal je otvoren.",
  "Uložila sam 6k+ u svoju glavu i normalizovala visok nivo podrške i okruženje koje utiče povoljno na mene. Nema nazad.",
  "Treniram redovno, kuvam i brinem o sebi kao najdražoj osobi, volim kako izgledam i kako se osećam. Puna energije i seksi. Nema više umorne verzije sa migrenama, to nije moja realnost.",
  "Prodajem i pojavljujem se kao da kupujem mleko u prodavnici. Prirodno je.",
];

const OUTCOMES = [
  "postaviti visoke standarde",
  "počistiti navike u svakodnevnici koje te zatrpavaju i gde je momentum lakše kreirati",
  "početi da završavaš započeto",
  "napraviti konkretne pomake u svom biznisu",
  "aktivirati prodaju, vidljivost i komunikaciju",
  "vratiti osećaj kontrole, energije i uzbuđenja oko svog biznis putovanja",
];

function Diamond() {
  return <span className="mt-2 h-2 w-2 flex-shrink-0 rotate-45 bg-[#B01326]" />;
}

export default function MomentumPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0B0A0A] text-white font-sans selection:bg-[#8B0E1A]/40">
      {/* Mini header */}
      <header className="mx-auto flex max-w-5xl items-center justify-between px-5 py-6 sm:px-8">
        <Link href="/" className="font-heading text-xl text-white/90 tracking-wide">
          Milica Pavić
        </Link>
        <span className="text-xs uppercase tracking-[0.25em] text-white/50">
          Startuje 12. jula
        </span>
      </header>

      {/* BANER slika odmah na početku */}
      <section className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="overflow-hidden rounded-lg border border-white/10">
          <Image
            src="/images/momentum-hero.jpg"
            alt="MOMENTUM"
            width={1080}
            height={738}
            priority
            className="h-auto w-full"
          />
        </div>
        <p className="mt-6 text-center font-heading italic text-lg text-white/70 sm:text-xl">
          7-dnevni mini intensive challenge
        </p>
      </section>

      {/* PRIČA */}
      <section className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="space-y-5 text-lg leading-relaxed text-white/80">
          <p>
            Prošle godine u ovo vreme sam fizički bila na istom mestu, piskarala neke
            objave, objavljujući 2x u mesec dana, nemajući pojma ni ko je moj idealni
            klijent, ni gde želim sa biznisom (iako sam mislila da sve to znam). Samo mi je
            jasna bila želja da nešto veliko kreiram.
          </p>
          <p>
            Tu i tamo sam imala neku konsultaciju, tu su ljudi, ali ne kako sam zamišljala.
            Pažnja mi je bila disperzirana. Svuda po malo a nigde all in. I čudila se što se
            ne dešava neki veliki prasak u mom biznisu.
          </p>
          <p>
            To leto sam organizovala svoj prvi retreat, pokrenula klub 11:11 i usudila se
            spomenuti biznis, kreirajući svoj prvi masterclass „biznis putovanje”. Sve je
            prošlo... pa sjajno. Osetila sam ogromno uzbuđenje tih par dana.
          </p>
          <p>
            Posle toga je ono nestalo i pitala sam se zašto se ne osećam tako dobro kao kad
            sam vodila taj masterclass i pričala o biznisu? Zašto mi je nestalo uzbuđenje?
          </p>
          <p className="text-white/90">
            Hah. Uzbuđenje je nestalo jer sam prestala da ga kreiram. Čekala sam da osećaj
            dođe sam. Baš sam osetila da se puno krčkam u potencijalu a ne preduzimam puno.
            I da ako moj biznis ima 10 nivoa, ja sam na prvom.
          </p>
        </div>

        {/* Odluka */}
        <blockquote className="my-12 border-l-2 border-[#8B0E1A] pl-6">
          <p className="font-heading text-2xl italic leading-snug text-white sm:text-3xl">
            Tog decembra sam glasno izgovorila... Fuk it, zašto ja imam mlohave standarde?
            Zašto imam mlohave rezultate kad mi je potencijal ludilo?
          </p>
        </blockquote>

        <div className="space-y-5 text-lg leading-relaxed text-white/80">
          <p>Dosta mi je vruće hladno, tu sam pa nisam tu. Znam li ja ko sam ja?</p>
          <p className="font-heading text-xl italic text-white">
            Znaš li ti ko si TI? Da, tebe pitam.
          </p>
        </div>
      </section>

      {/* PLOT TWIST + REZULTATI */}
      <section className="bg-[#120A0B] py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-5 sm:px-8">
          <p className="text-center font-heading text-2xl italic text-white/70 sm:text-3xl">
            No... plot twist.
          </p>

          <div className="mt-10 text-lg leading-relaxed text-white/80">
            <p>
              Od decembra do danas? Od te odluke do danas? Prošlo je 7 meseci. Ja sam
              fizički na istom mestu ali ništa nije isto.
            </p>
          </div>

          <ul className="mt-10 space-y-5">
            {RESULTS.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <Diamond />
                <span className="text-lg leading-relaxed text-white/85">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 space-y-5 text-lg leading-relaxed text-white/80">
            <p>
              Dok pišem ovaj landing page, šopingujem, spremam se za putovanje i festival
              ovog leta... I u stomaku mi treperi od uzbuđenja jer pomislim:
            </p>
            <p className="border-l-2 border-[#8B0E1A] pl-6 font-heading text-xl italic text-white">
              „Čekaj... snimaćemo lekcije sa plaže. Biću negde na moru i radiću nešto što
              volim.”
            </p>
            <p>
              I potpuno sam mirna. Jer znam kada radim a kada se ladim. Znam da mogu da
              kreiram biznis koji podržava moj život, a ne život koji se vrti oko biznisa.
            </p>
            <p className="font-heading text-xl italic text-white">
              Ja sam sanjala ovakav život. Ja se osećam živom.
            </p>
          </div>
        </div>
      </section>

      {/* MOMENTUM lekcija */}
      <section className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="space-y-5 text-lg leading-relaxed text-white/80">
          <p>
            Tog decembra sam odlučila kolabirati vreme i nakon te odluke se nisam okrenula.
            Kreirala sam momentum. Ozbiljan momentum. Bila sam posvećena akcijama koje
            kreiraju visok, stabilan, održiv standard, na čijim temeljima su rezultati
            neminovni. U par meseci se desilo ono što se nije desilo u prethodne 3 godine.
          </p>
          <p className="text-white/90">
            Najveća promena ipak nije broj klijenata. Nije novac. Nije rast profila.
          </p>
        </div>

        <p className="my-10 font-heading text-3xl font-bold leading-snug text-white sm:text-4xl">
          Najveća promena je što sam naučila kako da{" "}
          <span className="text-[#B01326]">kreiram momentum.</span>
        </p>

        <p className="text-lg leading-relaxed text-white/80">
          Onaj osećaj kada više ne krećeš ispočetka svakog ponedeljka, kada više ne zavisiš
          od inspiracije, kada znaš šta radiš, kada završavaš ono što započneš, kada
          prodaješ bez grča, kada si ti ponosna na sebe kad završi dan jer znaš da živiš
          svoj potencijal.
        </p>
      </section>

      {/* RECOGNITION */}
      <section className="bg-[#120A0B] py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
          <div className="space-y-4 text-lg leading-relaxed text-white/80">
            <p>I možda upravo zato čitaš ovo.</p>
            <p>Možda i ti osećaš da postoji mnogo više u tebi.</p>
            <p>Da imaš ideje, znanje, želju.</p>
            <p>Ali da nešto nedostaje kako bi sve to konačno počelo da se slaže.</p>
            <p className="text-white/90">
              Gde god da si u biznisu a osećaš da je ovo tek tvoj prvi nivo, na pravom si
              mestu.
            </p>
          </div>
          <p className="mx-auto mt-8 max-w-xl font-heading text-xl italic leading-snug text-white sm:text-2xl">
            Vidim te gde bi mogla biti. Ti koja ovo čitaš imaš taj žar, tu vatru. Ne treba
            da se krčkaš, ne treba narednih 6 meseci da filozofiraš i radiš na mindsetu.
          </p>
          <p className="mt-8 font-heading text-2xl font-bold text-white sm:text-3xl">
            To se završava danas. <span className="text-[#B01326]">Treba ti MOMENTUM.</span>
          </p>
        </div>
      </section>

      {/* PONUDA */}
      <section className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="border border-[#8B0E1A]/40 bg-[#120A0B] p-8 sm:p-10">
          <p className="text-lg leading-relaxed text-white/80">
            Zato sam kreirala jedan mini intensive challenge koji traje 7 dana. Ovo nije još
            jedan program gde ćeš samo slušati informacije. Ovo je iskustvo kroz koje ćeš:
          </p>
          <ul className="mt-8 space-y-4">
            {OUTCOMES.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Diamond />
                <span className="text-white/85">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <h2 className="mt-14 font-heading text-3xl font-bold text-white sm:text-4xl">
          Kako funkcioniše program?
        </h2>
        <div className="mt-6 space-y-5 text-lg leading-relaxed text-white/80">
          <p>
            Svaki dan dolazim da sa tobom podelim šta sam to ja radila, koji su to glavni
            okidači i prekidači koji menjaju situaciju, tvoju svakodnevnicu i pojavljivanje.
            Biće jednostavno i prosto, ali baš te tih stvari svi kiksaju. Nije da je nešto
            unikatno kao saveti Milana Tarota.
          </p>
          <p>
            I svaki dan dolazim sa jednim zadatkom za tebe. Akcija, pokret i kreiranje tog
            osećaja.
          </p>
          <p className="text-white/90">
            Startujemo 12. jula, traje 7 dana, sasvim dovoljno da se resetuješ i nikad više
            ne okreneš. Meni je trebao jedan dan i jedna odluka tog decembra. Tebi jedan dan
            i odluka ovog jula.
          </p>
        </div>
      </section>

      {/* BONUS */}
      <section className="bg-[#120A0B] py-16 sm:py-20">
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
                Sama vrednost Ekspanzije prevazilazi ovo, tako da je ovo nešto najblesavije
                što sam uradila, ali baš želim da kreiraš momentum i da usput prodaješ
                ekspanzivno.
              </p>
              <p>
                Ekspanzija je takođe izazov koji se sastoji od 14 audio aktivacija na temu
                prodaje. Dodatni šut u dupe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CENA + CTA (jedini na kraju stranice) */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,14,26,0.28)_0%,transparent_65%)]" />
        <div className="relative mx-auto max-w-xl px-5 text-center sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B01326]">
            Cena u naredna 48h
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
              <Diamond />
              <span>Pristup Momentumu do kraja godine</span>
            </li>
            <li className="flex items-start gap-3 text-white/80">
              <Diamond />
              <span>Pristup bonus Ekspanziji do kraja jula</span>
            </li>
            <li className="flex items-start gap-3 text-white/80">
              <Diamond />
              <span>Svaki dan audio trening i zadatak u Telegram kanalu</span>
            </li>
          </ul>

          <div className="mt-12 flex flex-col items-center gap-5">
            <Link
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full max-w-md items-center justify-center bg-[#8B0E1A] px-10 py-5 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-[#B01326] shadow-[0_0_50px_rgba(139,14,26,0.4)]"
            >
              Kupi MOMENTUM za 77&euro;
            </Link>
            <p className="font-heading text-lg italic text-white/80">Čekam te unutra.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 text-center">
        <p className="font-heading text-lg italic text-white/70">Milica Pavić</p>
        <p className="mt-2 text-xs text-white/40">MOMENTUM &middot; 7-dnevni challenge</p>
      </footer>
    </div>
  );
}
