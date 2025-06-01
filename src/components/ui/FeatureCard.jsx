export default function FeatureCard() {
  const FeatureData = [
    {
      title: "Fast Delivery",
      description:
        "Get your products delivered quickly with our express shipping options.",
      icon: "🚀",
      bgColor: "bg-blue-700",
      textColor: "bg-blue-50",
    },
    {
      title: "Secure Shopping",
      description:
        "Shop with confidence knowing your data and payments are secure.",
      icon: "🛡️",
      bgColor: "bg-green-600",
      textColor: "bg-green-50",
    },
    {
      title: "Quality Products",
      description:
        "Curated selection of high-quality products from trusted brands.",
      icon: "💎",
      bgColor: "bg-purple-600",
      textColor: "bg-purple-50",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Why Choose <span className="text-orange-600">ShoppyGlobe </span>?
        </h2>
        <p className="text-gray-600 text-lg">
          Experience the best in online shopping with our premium features
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover-lift"> */}
        {FeatureData.map((feature, index) => (
          <div
            key={index}
            className={`text-center p-8 rounded-2xl hover-lift shadow hover:shadow-xl transition ${feature.textColor}`}
          >
            <div
              className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${feature.bgColor}`}
            >
              <span className="text-white text-2xl">{feature.icon}</span>
            </div>
            <h3 className={`text-xl font-semibold mb-3 text-gray-800`}>
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
        {/* </div> */}
      </div>
    </div>
  );
}
