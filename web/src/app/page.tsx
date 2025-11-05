import Link from 'next/link';
import { Section } from '@/components/Section';

export default function Page() {
  return (
    <div className="space-y-8">
      <div className="prose prose-zinc max-w-none dark:prose-invert">
        <h1>General Relativity, Philosophically</h1>
        <p>
          General relativity (GR) is a physical theory of gravity; it is also a profound rethinking of space, time,
          motion, and explanation. This guide focuses on the philosophical ideas that GR forces us to clarify: what
          counts as a structure of the world, how measurements gain meaning, and why geometry can explain dynamics.
        </p>
        <p>
          Start with the high-level principles below, or dive into focused topics: <Link href="/principles">Principles</Link>,{' '}
          <Link href="/spacetime">Spacetime</Link>, <Link href="/measurement">Measurement</Link>,{' '}
          <Link href="/causality">Causality</Link>, and <Link href="/epistemology">Epistemology</Link>.
        </p>
      </div>

      <Section title="1. The Equivalence Principle">
        <p>
          Einstein elevates a striking empirical regularity?the equality of inertial and gravitational mass?into a
          principle: locally, a freely falling frame erases gravitational effects. Philosophically, this licenses the
          identification of gravity with the geometry of spacetime rather than with a Newtonian force. The key move is
          conceptual: treat uniform free fall as ?inertial,? and require the laws of physics to take their simplest form
          in such frames.
        </p>
      </Section>

      <Section title="2. Geometry as Physical Structure">
        <p>
          GR asserts that spacetime geometry is not a fixed stage but a dynamical field. The metric and connection are
          physical structures constrained by field equations and matter. This blurs distinctions between background and
          dynamics, between kinematics and causes, and recasts explanation: curvature explains gravitational phenomena
          because bodies follow geodesics determined by the metric they also help to shape.
        </p>
      </Section>

      <Section title="3. General Covariance and Invariance">
        <p>
          General covariance is, by itself, a formal symmetry: the equations retain form under smooth coordinate changes.
          Its philosophical bite comes from linking symmetry to representational redundancy. Physical content lives in
          diffeomorphism-invariant quantities or equivalence classes of models. This guides ontology: individuate what is
          physically real by its invariants, not by coordinate labels.
        </p>
      </Section>

      <Section title="4. Determination and Dynamics">
        <p>
          Einstein\'s equations tie matter-energy to curvature: geometry responds to, and constrains, matter. The
          interdependence raises questions about determinism, initial data, and the status of gravitational energy. GR is
          locally causal yet globally permissive; topology and boundary conditions matter. Philosophically, laws relate
          to global structure as much as to local mechanisms.
        </p>
      </Section>

      <Section title="5. Measurement and Meaning">
        <p>
          Because rods and clocks are physical systems, operational meaning is theory-laden: metrics are inferred from
          the behavior of matter satisfying the same laws. This replaces absolute standards with dynamical ones and makes
          ?what time it is? a question about the metric field, observers, and processes that define simultaneity and
          duration.
        </p>
      </Section>

      <div className="prose prose-zinc max-w-none dark:prose-invert">
        <h2>Continue learning</h2>
        <ul>
          <li>
            Read the <Link href="/principles">guiding principles</Link> and how they narrow theory space.
          </li>
          <li>
            See how <Link href="/spacetime">spacetime structure</Link> grounds explanation without absolute space.
          </li>
          <li>
            Explore the <Link href="/measurement">operational meaning</Link> of distance and time in GR.
          </li>
          <li>
            Consider <Link href="/causality">causality</Link> in curved spacetimes and global constraints.
          </li>
          <li>
            Reflect on <Link href="/epistemology">realism</Link>, models, and invariants.
          </li>
        </ul>
      </div>
    </div>
  );
}
