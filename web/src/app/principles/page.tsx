import { Section } from '@/components/Section';

export default function PrinciplesPage() {
  return (
    <div className="space-y-6">
      <div className="prose prose-zinc max-w-none dark:prose-invert">
        <h1>Guiding Principles</h1>
        <p>
          General relativity is steered by methodological commitments rather than derived from a single experiment. The
          following principles constrain admissible theories of gravity and motivate GR\'s distinctive ontology.
        </p>
      </div>

      <Section title="Equivalence">
        <p>
          Local experiments in free fall reproduce special-relativistic outcomes. Treat free-falling frames as inertial
          and identify gravity with deviations from straightness in spacetime, not with a force field on a background.
        </p>
      </Section>

      <Section title="Locality and Minimal Structure">
        <p>
          Laws depend on local fields and their derivatives. Avoid fixed, absolute structures unless demanded by
          explanatory need; let geometry be dynamical where possible.
        </p>
      </Section>

      <Section title="General Covariance as Redundancy">
        <p>
          Coordinate freedom signals descriptive redundancy. The physically meaningful content lies in diffeomorphism
          invariants or isomorphism classes of models, guiding interpretation and comparison between solutions.
        </p>
      </Section>

      <Section title="Continuity with Special Relativity">
        <p>
          Recover special relativity in the appropriate limit (weak fields, small regions). Methodologically, this
          anchors GR to well-confirmed kinematics and clarifies where genuinely new structure enters.
        </p>
      </Section>
    </div>
  );
}
