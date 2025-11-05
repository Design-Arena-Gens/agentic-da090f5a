import { Section } from '@/components/Section';

export default function EpistemologyPage() {
  return (
    <div className="space-y-6">
      <div className="prose prose-zinc max-w-none dark:prose-invert">
        <h1>Realism, Models, and Explanation</h1>
        <p>
          GR invites a structural realist stance: be realist about invariant structure and patterns rather than about
          coordinates or gauge-dependent features. Explanation often proceeds via constraints and symmetry, not forces.
        </p>
      </div>

      <Section title="What is Real?">
        <p>
          Invariants, causal structure, and curvature scalars provide objective content. Individuation of events is
          relational, not absolute?a departure from substantival space.
        </p>
      </Section>

      <Section title="How GR Explains">
        <p>
          GR explains by showing that phenomena are necessary given geometry and boundary conditions: Mercury\'s
          perihelion shift, gravitational lensing, and redshift follow from geodesics and curvature, not from forces
          pushing on bodies.
        </p>
      </Section>
    </div>
  );
}
