"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

type Question = {
  question: string;
  answers: string[];
};

const questions: Question[] = [
  {
    question: "What makes a Madeira pole dance retreat special?",
    answers: [
      "A pole dance retreat in Madeira always has an artistic touch. Activities include outdoor photoshoots in scenic locations, special editions with violin concerts combined with pole dancing, and boat trips with a hanging pole — a unique activity exclusive to the retreat. Transfers to all activities are usually included. This retreat is perfect for travelers seeking a creative and active pole dance holiday in Madeira.",
    ],
  },
  {
    question: "Are these holidays suitable for solo travelers?",
    answers: [
      "Yes! Many guests join our retreats alone. You'll train alongside other travelers and have plenty of opportunities to socialize during meals, activities, and excursions, making it ideal for solo travelers or groups.",
    ],
  },
  {
    question: "What skill level do I need to be?",
    answers: [
      "This retreat is suitable for beginner, intermediate, and advanced pole dancers. However, we do not accept complete beginners who have never tried pole dance before. If you find out about this event in advance, we encourage you to start practicing now and join us once you have at least 5 months of pole experience. We also offer other events for non-polers and absolute beginners — please check our website for more information.",
    ],
  },
  {
    question: "Are all breakfasts and dinners included?",
    answers: [
      "All breakfasts are included in the price, as well as two group dinners: one dinner at a local restaurant and one outdoor picnic experience. We will also make a stop at a shopping center during the retreat, and you will have access to a fully equipped kitchen in the villa if you wish to prepare your own meals.",
    ],
  },
  {
    question: "How do payment plans work?",
    answers: [
      "You can secure your spot with a €500 deposit and pay the remaining balance in several installments. Payment plans depend on when you book your ticket, but we generally offer flexible payment options. Additionally, if you join with a pole friend, each of you will receive a €50 discount.",
    ],
  },
  {
    question: "What is your cancellation policy?",
    answers: [
      "You may cancel your booking up to 3 months before the retreat start date. After this period, cancellations are not refundable due to our commitments to on-site suppliers. However, you may transfer your spot to another person if you are able to find a replacement. Refunds are typically processed within 4 to 6 weeks after the request.",
    ],
  },
  {
    question: "What should I bring?",
    answers: [
      "We recommend bringing your pole wear, swimsuit, sun protection, sunglasses, mosquito repellent, and comfortable hiking shoes. Please note that some light hiking activities are included in the retreat program.",
    ],
  },
  {
    question: "Can you accommodate dietary restrictions?",
    answers: [
      "Participants may indicate their dietary preferences, which will be communicated to our catering supplier.",
      "However, if specific dietary requirements involve additional sourcing, preparation, or special arrangements beyond the standard offering, supplementary fees may apply depending on the nature of the request.",
    ],
  },
];

function FaqItem({ question, answers }: Question) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded px-6 shadow-lg">
      <button
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer"
      >
        <span className="font-ws text-green-2 text-sm md:text-base font-bold tracking-tight">
          {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-green-2 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-160 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-3 pb-5 font-i text-green-2 text-sm leading-relaxed opacity-70">
          {answers.map((answer) => (
            <p key={answer}>{answer}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  return (
    <div id="faq" className="bg-white-1 px-6 md:px-8 py-6 md:py-8 xl:py-16 w-screen flex flex-col">
      <div className="mx-auto w-full max-w-6xl flex flex-col lg:flex-row gap-10 lg:gap-16">
        <div className="w-full lg:w-80 lg:shrink-0">
          <div className="flex items-center font-sm text-green-2 uppercase tracking-tight text-sm">
            <div className="h-px w-8 bg-yellow-1 mr-3 shrink-0" />
            <p>FAQ</p>
          </div>

          <h2 className="mt-4 font-ws text-green-2 text-4xl md:text-5xl font-black uppercase leading-[0.85] opacity-80">
            Frequently asked questions
          </h2>

          <p className="mt-6 font-i text-green-2 text-sm md:text-base leading-relaxed">
            Still have questions? Email us at{" "}
            <a
              href="mailto:madeiracreativevillage@gmail.com"
              className="underline underline-offset-2 hover:text-green-1 transition-colors"
            >
              madeiracreativevillage@gmail.com
            </a>
          </p>
        </div>

        <div className="flex flex-1 flex-col gap-3">
          {questions.map((item) => (
            <FaqItem key={item.question} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
