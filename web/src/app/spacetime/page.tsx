import { Section } from '@/components/Section';

export default function SpacetimePage() {
  return (
    <div className="space-y-6">
      <div className="prose prose-zinc max-w-none dark:prose-invert">
        <h1>Spacetime and Geometry</h1>
        <p>
          In GR, spacetime is a four-dimensional manifold endowed with a Lorentzian metric and a compatible connection.
          This structure is not merely representational; it is a physical field that interacts with matter.
        </p>
      </div>

      <Section title="Metric and Geodesics">
        <p>
          The metric determines lengths, times, and lightcones; freely falling bodies trace geodesics. Explanation takes
          a geometric form: trajectories are \"straight\" given the curved geometry.
        </p>
      </Section>

      <Section title="Curvature as Gravity">
        <p>
          Curvature encodes gravitational effects: geodesic deviation describes tidal phenomena as relative acceleration
          of nearby geodesics. Gravity is not a force but the manifestation of spacetime geometry.
        </p>
      </Section>

      <Section title="Background Independence">
        <p>
          GR minimizes fixed background structure. Philosophically, this shifts ontology from objects-in-space to
          relational fields whose patterns determine spatial and temporal relations.
        </p>
      </Section>
    </div>
  );
}
