import { Section } from '@/components/Section';

export default function MeasurementPage() {
  return (
    <div className="space-y-6">
      <div className="prose prose-zinc max-w-none dark:prose-invert">
        <h1>Measurement and Meaning</h1>
        <p>
          Rods and clocks are dynamical systems obeying the same laws as other matter. Hence operational meaning for
          distance and duration is theory-relative: GR predicts how idealized measuring devices behave.
        </p>
      </div>

      <Section title="Proper Time and Observers">
        <p>
          Proper time along a worldline is the invariant \"time read\" by an ideal clock. Observational claims must
          specify worldlines, simultaneity conventions, and the metric field?abandoning absolute time.
        </p>
      </Section>

      <Section title="Coordinate vs. Physical Quantities">
        <p>
          Coordinates are labels; physical quantities are diffeomorphism-invariant or defined relative to structures
          like worldlines and curvature scalars. This distinction underwrites objective content amid gauge freedom.
        </p>
      </Section>
    </div>
  );
}
