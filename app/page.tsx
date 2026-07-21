import { Logo } from '@/components/logo';
import { site } from '@/data/site';

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col items-center">
      <div className="flex flex-1 flex-col items-center justify-center">
        <Logo className="size-40" />
        <a
          href={site.reservation.link}
          target="_blank"
          rel="noopener"
          className="text-body-small border-border-neutral-inverse hover:bg-background-neutral-inverse hover:text-foreground-neutral-inverse rounded-xs border bg-transparent px-6 py-4 font-medium tracking-[0.2em] uppercase transition duration-200"
        >
          Reservar mesa
        </a>
      </div>
      <address className="text-body-small flex flex-col items-center gap-3 pb-10 not-italic transition duration-200">
        <span>
          <a
            href={site.social.instagram.link}
            target="_blank"
            rel="noopener"
            className="text-foreground-neutral-faded hover:text-foreground-neutral-default"
          >
            {site.social.instagram.handle}
          </a>
          <span aria-hidden="true"> · </span>
          <a
            href={site.contact.email.link}
            target="_blank"
            rel="noopener"
            className="text-foreground-neutral-faded hover:text-foreground-neutral-default"
          >
            {site.contact.email.label}
          </a>
        </span>
        <span>
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
        </span>
      </address>
    </main>
  );
}
