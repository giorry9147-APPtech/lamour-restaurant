export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-lg font-semibold mb-4">Lamour</h3>
          <p className="text-sm text-neutral-400">
            An intimate space where flavor, detail and love for cooking come together.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Opening Hours</h4>
          <p className="text-sm text-neutral-400">
            Monday – Sunday <br />
            7:00 PM – 3:00 AM
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Location</h4>
          <p className="text-sm text-neutral-400">
            Verlengde Gompersstraat 207 <br />
            Next to Soluna Bar
          </p>
        </div>

      </div>

      <div className="text-center text-sm text-neutral-500 pb-6">
        © {new Date().getFullYear()} Lamour Cafe Restaurant
      </div>
    </footer>
  );
}