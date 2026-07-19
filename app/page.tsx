import { Logo } from '@/components/logo';
import { site } from '@/data/site';

export default function Home() {
  return (
    <main className="bg-background-neutral-default flex min-h-dvh flex-col items-center justify-center">
      <Logo className="size-40" />
      <a
        href={site.reservation.link}
        target="_blank"
        rel="noopener"
        className="text-body-small border-border-neutral-inverse hover:bg-background-neutral-inverse hover:text-foreground-neutral-inverse rounded-xs border bg-transparent px-6 py-4 font-medium tracking-[0.2em] uppercase transition duration-200"
      >
        Reservar mesa
      </a>
      <address className="text-body-small absolute bottom-10 not-italic transition duration-200">
        <a
          href={site.contact.address.link}
          target="_blank"
          rel="noopener"
          className="text-foreground-neutral-faded hover:text-foreground-neutral-default"
        >
          {site.contact.address.label}
        </a>
        <span aria-hidden="true"> · </span>
        <a
          href={site.contact.phone.link}
          className="text-foreground-neutral-faded hover:text-foreground-neutral-default"
        >
          {site.contact.phone.label}
        </a>
      </address>
    </main>
  );
}
