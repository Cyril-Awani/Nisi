export default function Hero() {
  return (
    <section className="bg-blue-900 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Lightning Fast Internet for Your Home
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          NISI delivers reliable, high-speed internet to keep you connected with what matters most.
        </p>
        <div className="space-x-4">
          <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100">
            View Plans
          </button>
          <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800">
            Check Coverage Availability
          </button>
        </div>
      </div>
    </section>
  );
}