"use client";
import { data } from "@/app/data/blogs";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel";

export function CarouselDisplay() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  return (
    <div className="w-full h-dvh py-5">
      <h2 className="text-xl  text-center md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Design Insight and Trends.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}
