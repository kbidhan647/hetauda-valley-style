import { createFileRoute } from "@tanstack/react-router";
import heroModel from "@/assets/hero-model.jpg";
import model2 from "@/assets/model-2.jpg";
import model3 from "@/assets/model-3.jpg";
import model4 from "@/assets/model-4.jpg";
import designer1 from "@/assets/designer-1.jpg";
import designer2 from "@/assets/designer-2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Apsara Models — Premier Modelling Agency in Hetauda, Nepal" },
      {
        name: "description",
        content:
          "Apsara Models is Hetauda's premier modelling agency, representing Nepal's top supermodels and showcasing designer fashion from the heart of the Mahabharat hills.",
      },
      { property: "og:title", content: "Apsara Models — Premier Modelling Agency in Hetauda" },
      {
        property: "og:description",
        content:
          "Representing Nepal's top supermodels and designer fashion from Hetauda. Editorial shoots, runway, and casting.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const models = [
  { name: "Aashma Rana", img: model4, tag: "Editorial", height: "5'9\"", city: "Hetauda" },
  { name: "Rohan Shrestha", img: model2, tag: "Runway", height: "6'1\"", city: "Hetauda" },
  { name: "Prerana Magar", img: model3, tag: "Couture", height: "5'8\"", city: "Kathmandu" },
];

const designers = [
  {
    name: "Dhaka Reimagined",
    house: "Atelier Sangita",
    img: designer1,
    desc: "Hand-woven dhaka motifs re-cut into sculptural evening silhouettes.",
  },
  {
    name: "Maroon Cascade",
    house: "Studio Himal",
    img: designer2,
    desc: "Avant-garde draping in maroon and antique gold, woven in the Terai.",
  },
];

const marqueeItems = [
  "Hetauda · Nepal",
  "Editorial",
  "Runway",
  "Couture",
  "Casting Open 2026",
  "Golden Hour Sessions",
];

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="font-display text-2xl font-semibold tracking-wide">
          APSARA<span className="text-gold">.</span>
        </a>
        <div className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground md:flex">
          <a href="#models" className="transition-colors hover:text-foreground">Models</a>
          <a href="#designers" className="transition-colors hover:text-foreground">Designers</a>
          <a href="#agency" className="transition-colors hover:text-foreground">Agency</a>
        </div>
        <a
          href="#casting"
          className="border border-foreground px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition-colors hover:bg-foreground hover:text-background"
        >
          Apply
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-28 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:pt-32">
        <div className="relative z-10">
          <p className="fade-up text-xs font-semibold uppercase tracking-[0.35em] text-gold">
            Hetauda · Nepal · Est. 2019
          </p>
          <h1 className="fade-up fade-up-delay-1 mt-6 font-display text-6xl font-medium leading-[0.95] text-balance md:text-8xl">
            The New Face of <em className="not-italic text-gold">Nepali</em> Fashion
          </h1>
          <p className="fade-up fade-up-delay-2 mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
            From the golden-hour valleys of the Mahabharat range, Apsara Models
            represents Nepal's finest talent — supermodels, editorial icons, and
            the designers dressing them.
          </p>
          <div className="fade-up fade-up-delay-3 mt-10 flex flex-wrap gap-4">
            <a
              href="#models"
              className="bg-foreground px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-background transition-opacity hover:opacity-85"
            >
              Meet the Models
            </a>
            <a
              href="#casting"
              className="border border-foreground px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] transition-colors hover:bg-foreground hover:text-background"
            >
              Open Casting
            </a>
          </div>
          <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              ["48+", "Signed Models"],
              ["120+", "Campaigns Shot"],
              ["12", "Design Houses"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="font-display text-3xl font-semibold">{n}</dt>
                <dd className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
        <figure className="relative">
          <div className="absolute -inset-4 -z-10 translate-x-4 translate-y-4 border border-gold/50" aria-hidden />
          <img
            src={heroModel}
            alt="Apsara cover model in contemporary streetwear against the Hetauda valley at golden hour"
            width={1024}
            height={1536}
            className="aspect-[2/3] w-full object-cover shadow-2xl"
            fetchPriority="high"
          />
          <figcaption className="absolute bottom-5 left-5 bg-background/85 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] backdrop-blur">
            Cover Story — Rooted, Yet Unstoppable
          </figcaption>
        </figure>
      </div>
      <div className="overflow-hidden border-y border-border bg-secondary py-4" aria-hidden>
        <div className="marquee-track flex w-max items-center gap-10">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-10 whitespace-nowrap font-display text-xl italic text-muted-foreground">
              {item}
              <span className="text-gold">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Models() {
  return (
    <section id="models" className="mx-auto max-w-7xl px-6 py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">The Board</p>
          <h2 className="mt-4 font-display text-5xl font-medium md:text-6xl">Our Supermodels</h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Hand-scouted across Nepal, trained to international standard, and
          booked for editorial, runway, and campaign work worldwide.
        </p>
      </div>
      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {models.map((m) => (
          <article key={m.name} className="group">
            <div className="relative overflow-hidden">
              <img
                src={m.img}
                alt={`${m.name}, ${m.tag} model at Apsara Models`}
                width={768}
                height={1024}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 bg-foreground/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-background">
                {m.tag}
              </span>
            </div>
            <div className="mt-5 flex items-start justify-between">
              <div>
                <h3 className="font-display text-2xl font-semibold">{m.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {m.height} · {m.city}
                </p>
              </div>
              <span className="mt-2 text-gold">→</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Designers() {
  return (
    <section id="designers" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">The Ateliers</p>
        <h2 className="mt-4 font-display text-5xl font-medium md:text-6xl">Designer Couture</h2>
        <p className="mt-6 max-w-lg text-sm leading-relaxed opacity-80">
          Exclusive pieces from Nepal's rising design houses — heritage weaving
          meeting modern silhouettes, worn by our board.
        </p>
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {designers.map((d) => (
            <article key={d.name} className="group grid gap-6 sm:grid-cols-[1fr_1.2fr] sm:items-end">
              <div className="overflow-hidden">
                <img
                  src={d.img}
                  alt={`${d.name} by ${d.house}`}
                  width={768}
                  height={1024}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="pb-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">{d.house}</p>
                <h3 className="mt-3 font-display text-3xl font-semibold">{d.name}</h3>
                <p className="mt-3 text-sm leading-relaxed opacity-75">{d.desc}</p>
                <a
                  href="#casting"
                  className="mt-6 inline-block border border-current px-6 py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors hover:bg-gold hover:border-gold hover:text-primary"
                >
                  Book a Fitting
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Agency() {
  return (
    <section id="agency" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">The Agency</p>
          <h2 className="mt-4 font-display text-5xl font-medium leading-tight text-balance md:text-6xl">
            Born in Hetauda. Booked Everywhere.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            Founded in the green heart of the Mahabharat foothills, Apsara
            Models pairs Nepal's natural beauty with world-class direction —
            scouting, training, and placing talent across South Asia and
            beyond.
          </p>
        </div>
        <ul className="grid gap-5 sm:grid-cols-2">
          {[
            ["Scouting & Development", "Open calls and street scouting across Hetauda, Kathmandu, and Pokhara."],
            ["Editorial Production", "Full-service shoots — location, styling, and golden-hour valley backdrops."],
            ["Runway & Shows", "Seasonal showcases with Nepal's leading design houses."],
            ["Global Placement", "Direct placement with partner agencies in Mumbai, Bangkok, and Milan."],
          ].map(([title, body]) => (
            <li key={title} className="border border-border bg-card p-6">
              <h3 className="font-display text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Casting() {
  return (
    <section id="casting" className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">Open Casting 2026</p>
        <h2 className="mt-4 font-display text-5xl font-medium text-balance md:text-6xl">
          Think You Have the Look?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          We're scouting new faces for our 2026 board. Send your digitals —
          no experience needed, just confidence and a story.
        </p>
        <form
          className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="casting-email" className="sr-only">Email address</label>
          <input
            id="casting-email"
            type="email"
            required
            placeholder="your@email.com"
            className="h-12 flex-1 border border-input bg-background px-4 text-sm outline-none placeholder:text-muted-foreground focus:border-gold"
          />
          <button
            type="submit"
            className="h-12 bg-foreground px-8 text-xs font-semibold uppercase tracking-[0.2em] text-background transition-opacity hover:opacity-85"
          >
            Apply Now
          </button>
        </form>
        <p className="mt-4 text-xs text-muted-foreground">
          Casting days: every first Saturday, Apsara Studio, Hetauda-4.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 text-sm text-muted-foreground md:flex-row">
        <p className="font-display text-xl font-semibold text-foreground">
          APSARA<span className="text-gold">.</span>
        </p>
        <p className="text-xs uppercase tracking-[0.2em]">
          Hetauda · Makwanpur · Nepal
        </p>
        <p className="text-xs">© 2026 Apsara Models. All rights reserved.</p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main>
      <Nav />
      <Hero />
      <Models />
      <Designers />
      <Agency />
      <Casting />
      <Footer />
    </main>
  );
}
