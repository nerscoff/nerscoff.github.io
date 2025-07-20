import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel as BaseCarousel,
  CarouselItem,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import type { ImageMetadata } from 'astro'

type Props = {
  name?: string
  images: string[]
}

export function Carousel({ name, images }: Props) {
  return (
    <BaseCarousel
      plugins={
        [
          // Autoplay({
          //   delay: 5000,
          // }),
        ]
      }
    >
      <CarouselContent className="h-[calc(100vh-var(--spacing)*16)] w-screen">
        {images.map((image, index) => (
          <CarouselItem key={image} className="h-full w-full">
            <img
              src={image}
              style={index === 0 ? { viewTransitionName: name } : undefined}
              loading={index === 0 ? 'eager' : 'lazy'}
              className="h-full w-full object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-6 bg-amber-50" />
      <CarouselNext className="right-6 bg-amber-50" />
    </BaseCarousel>
  )
}
