'use client';

import { useState, useEffect } from 'react';

export default function FAQSection({ faqs }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="servicefaq pt-0" />;
  }

  return (
    <section className="servicefaq pt-0">
      <div className="container">
        <h3 className="sh text-center">Frequently Asked Questions</h3>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          {faqs?.map((item, index) => (
            <div className="accordion-item" key={item.id}>
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faq-service-${index + 1}`}
                  aria-expanded="false"
                  aria-controls={`faq-service-${index + 1}`}
                >
                  {item.question}
                </button>
              </h2>
              <div
                id={`faq-service-${index + 1}`}
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
