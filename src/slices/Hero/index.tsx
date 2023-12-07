import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { RichText } from '@/components/RichText';
import { PrismicNextImage } from '@prismicio/next';

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section className="flex flex-col gap-4 max-w-3xl"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
          {isFilled.image(slice.primary.image) ? (
            <PrismicNextImage
              field={slice.primary.image}
              sizes="100vw"
              className="w-full max-w-[100px] max-h-full rounded-md object-cover"
            />
          ) : null}
          <div className="flex flex-col gap-2">
            <RichText field={slice.primary.title} />
            <RichText field={slice.primary.description} />
          </div>
        </section>
  );
};

export default Hero;
