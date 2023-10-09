import { Boundary } from '#/ui/boundary';

export default function NotFound() {
  return (
    <Boundary
      labels={['./[categorySlug]/[subCategorySlug]/not-found.tsx']}
      color="blue"
    >
      <div className="space-y-3 bg-red-tu">
        <h2 className="text-lg font-bold">Sub Category Not Found</h2>

        <p className="text-sm">Could not find requested resource</p>
      </div>
    </Boundary>
  );
}
