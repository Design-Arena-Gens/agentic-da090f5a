import { PropsWithChildren } from 'react';

export function Section({ title, id, children }: PropsWithChildren<{ title: string; id?: string }>) {
  return (
    <section id={id} className="prose prose-zinc max-w-none py-8 dark:prose-invert">
      <h2>{title}</h2>
      {children}
    </section>
  );
}
