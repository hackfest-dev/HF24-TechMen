import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Documentation() {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          <CarouselItem><p>This documentaion page1</p></CarouselItem>
          <CarouselItem><p>This documentaion page2</p></CarouselItem>
          <CarouselItem>...</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
