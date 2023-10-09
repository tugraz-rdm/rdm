import { ExternalLink } from '#/ui/external-link';
import { FC } from 'react';

export const Page: FC = () => {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <ul className="p-0 font-thin text-gray-700">
        <h1 className="text-xl font-thin text-gray-700">TU Graz DMP Tool</h1>
        TU Graz DMP Tool is based on an open source solution called DAMAP that
        serves as a tool for machine actionable DMPs (maDMPs). DAMAP was
        developed in collaboration with TU Wien and is under continuous
        improvement. DAMAP was adapted to the institutional requirements of TU
        Graz (e.g. design, integration of existing databases) and is available
        to all TU Graz members for the creation of their data management plans.
        TU Graz DMP Tool is availbale under the following link. We are also
        looking for volunteers who would like to test the new tool and give us
        feedback on improvements or similar. In the following video you can get
        a quick overview of DAMAP:
      </ul>

      <div className="flex gap-2 ">
        <ExternalLink href="https://dmp.tugraz.at//">
          TU Graz DMP Tool
        </ExternalLink>
      </div>
    </div>
  );
};
