import { ExternalLink } from '#/ui/external-link';
import { FC } from 'react';

export const Page: FC = () => {
  return (
    <div className="space-y-9">
      <div className="prose prose-sm prose-invert max-w-none">
        <h1 className="text-xl font-thin text-gray-600">TU Graz DMP Tool</h1>
        <p className="text-l font-thin text-gray-600">
          TU Graz DMP Tool is based on an open source solution called DAMAP that
          serves as a tool for machine actionable DMPs (maDMPs). DAMAP was
          developed in collaboration with TU Wien and is under continuous
          improvement. DAMAP will be adapted to the institutional requirements
          of TU Graz (e.g. design, integration of existing databases) and will
          be available to all researchers for the creation of their data
          management plans. TU Graz DMP Tool is in an open testing phase for
          which we are still looking for volunteers. If you are interested or
          would like more information, please contact the RDM team.
        </p>

        <div className="flex gap-2">
          <ExternalLink href="https://madmps-test.tugraz.at/">
            DMP Tool
          </ExternalLink>
          <ExternalLink href="https://www.tugraz.at/sites/rdm/support/rdm-team">
            Support for DMP Tool
          </ExternalLink>
        </div>
      </div>
    </div>
  );
}
