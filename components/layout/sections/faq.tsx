import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What kind of brands do you work with?",
    answer: "We collaborate with a wide range of clients—from emerging startups to established brands and MNCs—who are looking to authentically engage with Gen Z and college youth through creative campaigns and cultural activations.",
    value: "item-1",
  },
  {
    question: "How does Malted Vision execute youth-focused marketing?",
    answer: "We combine online virality (through social media, micro-influencers, and digital campaigns) with offline engagement (like onground campaigns, college fest activations, contests, and brand stalls) to create a 360° impact that resonates with today's youth.",
    value: "item-2",
  },
  {
    question: "Do you run UGC campaigns or work with micro-influencers?",
    answer: "Yes! We specialize in User-Generated Content (UGC) campaigns that drive authenticity and peer influence. Our network of student creators and campus micro-influencers helps your brand spark viral, relatable content that builds trust and drives real engagement.",
    value: "item-3",
  },
  {
    question: "Do you offer custom marketing packages for startups or small brands?",
    answer: "Yes. We believe powerful marketing doesn't have to be expensive. Our startup-friendly packages combine creativity, affordability, and measurable results—whether you want a one-time campaign or a long-term youth engagement strategy.",
    value: "item-4",
  },
  {
    question: "What makes Malted Vision different from other marketing agencies?",
    answer: "At Malted Vision, we don’t just follow youth culture—we help shape it. Unlike traditional agencies, we co-create authentic, unfiltered experiences that turn students into passionate brand advocates. Our community-first approach and tailored strategies ensure every campaign resonates with the real interests of young audiences.

What sets us apart is our data-driven edge. Every activation is guided by deep audience insights and real-time analytics, allowing us to plan, optimize, and deliver measurable ROI. We go beyond execution—providing brands with actionable recommendations to maximize impact.

Looking ahead, data analytics is our game-changer. With predictive insights and real-time feedback, we help brands anticipate trends, personalize engagement, and stay ahead of the curve. Malted Vision is where cultural intuition meets analytical precision—delivering campaigns that truly connect with the next generation.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQs
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
