import { Section } from '@/components/Section';

export default function CausalityPage() {
  return (
    <div className="space-y-6">
      <div className="prose prose-zinc max-w-none dark:prose-invert">
        <h1>Causality and Global Structure</h1>
        <p>
          GR builds causal structure from the metric: lightcones constrain influence. Yet global features?like holes,
          horizons, or exotic topologies?shape what can happen at large scales.
        </p>
      </div>

      <Section title="Local Causality">
        <p>
          Locally, signals cannot outrun light. Energy conditions and hyperbolicity support predictive evolution from
          suitable initial data surfaces.
        </p>
      </Section>

      <Section title="Global Pathologies and Horizons">
        <p>
          Rotating and charged solutions exhibit horizons and ergoregions; some allow closed timelike curves in
          principle. These raise questions about determinism and the status of cosmic censorship.
        </p>
      </Section>
    </div>
  );
}
