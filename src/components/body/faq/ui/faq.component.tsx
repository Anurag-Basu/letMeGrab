interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const faqs: FAQItem[] = [
    {
      question: "How do I place an order?",
      answer:
        "You can place an order by visiting our website and selecting the products you want to purchase. Then, proceed to the checkout page to complete your order.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods, including credit/debit cards, PayPal, and online payment gateways. You can choose your preferred payment option during checkout.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to many countries. You can check the list of countries we ship to during the checkout process.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you will receive a tracking number via email. You can use this tracking number to monitor the status and location of your order.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We have a 30-day return policy. If you are not satisfied with your purchase, you can return the item within 30 days of delivery for a full refund or exchange.",
    },
  ];

  return (
    <div id="faq" className="py-20 text-white bg-gray-900">
      <div className="container flex mx-auto">
        <div className="w-1/2 pr-4">
          <h2 className="justify-center mb-6 text-4xl font-semibold text-center">
            Frequently <br /> Asked Questions
          </h2>
          <div className="justify-center text-center">
            Got a question? We've got the answers.
          </div>
        </div>
        <div className="w-1/2 pl-4">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <div className="mb-2 text-lg font-semibold text-white">
                {faq.question}
              </div>
              <div className="text-justify text-gray-500">{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
