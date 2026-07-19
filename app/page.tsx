import { Logo } from '@/components/logo';

export default function Home() {
  return (
    <main className="bg-background-neutral-default flex min-h-dvh flex-col items-center justify-center">
      <Logo className="size-40" />
      <a
        href="https://widget.thefork.com/80f72e41-deeb-4abc-bffe-a1bf9384cab5"
        target="_blank"
        rel="noopener"
        className="text-body-small border-border-neutral-inverse hover:bg-background-neutral-inverse hover:text-foreground-neutral-inverse rounded-xs border bg-transparent px-6 py-4 font-medium tracking-[0.2em] uppercase transition duration-200"
      >
        Reservar mesa
      </a>
      <address className="text-body-small absolute bottom-10 not-italic transition duration-200">
        <a
          href="https://maps.app.goo.gl/KQCjDUDqye59iVUQ8"
          target="_blank"
          rel="noopener"
          className="text-foreground-neutral-faded hover:text-foreground-neutral-default"
        >
          Rua Central 35, 3220-336 Rio Vide
        </a>
        <span aria-hidden="true"> · </span>
        <a
          href="tel:+351924733556"
          className="text-foreground-neutral-faded hover:text-foreground-neutral-default"
        >
          (+351) 924 733 556
        </a>
      </address>
    </main>
  );
}
