// app/programs/page.tsx
export default async function ProgramsPage() {
  // Placeholder list – DB wiring in next steps
  const sample = [
    { name: 'NordVPN', commission: '40%+', cookie: '30 days' },
    { name: 'Hostinger', commission: '60%', cookie: '30 days' },
  ];

  return (
    <section>
      <h1 className="text-2xl font-semibold">Programs</h1>
      <p className="mt-2 text-slate-600">Directory will be powered by Supabase (coming next).</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sample.map((p) => (
          <div key={p.name} className="rounded-lg border p-4">
            <h3 className="font-medium">{p.name}</h3>
            <p className="text-sm text-slate-600">Commission: {p.commission}</p>
            <p className="text-sm text-slate-600">Cookie: {p.cookie}</p>
          </div>
        ))}
      </div>
    </section>
  );
}