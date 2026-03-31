import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { BOOKING_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-bg-secondary py-12">
      <Container className="text-center">
        <p className="font-heading text-lg font-bold italic text-text-primary">
          Biznis Putovanje
        </p>
        <p className="mt-2 text-sm text-text-tertiary max-w-md mx-auto">
          Tromesečno mentorstvo za žene preduzetnice koje žele da izgrade biznis koji je ekstenzija njih samih.
        </p>
        <div className="mt-6 flex items-center justify-center gap-6">
          <Link
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-secondary hover:text-accent-secondary transition-colors"
          >
            Instagram
          </Link>
        </div>
        <p className="mt-8 text-xs text-text-tertiary">
          &copy; {new Date().getFullYear()} Biznis Putovanje. Sva prava zadržana.
        </p>
      </Container>
    </footer>
  );
}
