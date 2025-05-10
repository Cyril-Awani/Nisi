export default function PlansGrid() {
  const plans = [
    {
      name: "Basic",
      speed: "5 Mbps",
      devices: "Up to 5 Devices",
      price: "₦13,922/mo",
      features: ["Unlimited data", "Free installation", "24/7 support"]
    },
    {
      name: "Standard",
      speed: "10 Mbps",
      devices: "Up to 10 Devices",
      price: "₦18,222/mo",
      features: ["Unlimited data", "Free modem", "Priority support"],
      popular: true
    },
    {
      name: "Premium",
      speed: "20 Mbps",
      devices: "Up to 20 Devices",
      price: "₦38,499/mo",
      features: ["Unlimited data", "Free modem & router", "VIP support"]
    },
     {
      name: "Premium",
      speed: "50 Mbps",
      devices: "Up to 50 Devices",
      price: "₦50,000/mo",
      features: ["Unlimited data", "Free modem & router", "VVIP support"]
    }
  ];

  return (
    <div className="grid md:grid-cols-4 gap-8 my-8">
      {plans.map((plan, index) => (
        <div 
          key={index} 
          className={`border rounded-lg p-6 ${plan.popular ? 'border-blue-500 shadow-lg' : 'border-gray-200'}`}
        >
          {plan.popular && (
            <div className="bg-blue-500 text-white text-center py-1 px-3 rounded-full text-sm font-semibold -mt-8 mb-4 mx-auto w-3/4">
              MOST POPULAR
            </div>
          )}
          <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
          <p className="text-[14px] font-normal mb-4">{plan.devices}</p>
          <p className="text-4xl font-bold mb-4">{plan.price}</p>
          <p className="text-lg mb-6">{plan.speed} Download Speed</p>
          <ul className="space-y-2 mb-6">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Select Package
          </button>
        </div>
      ))}
    </div>
  );
}
