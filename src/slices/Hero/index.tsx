import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicText } from "@prismicio/react";
import { RichText } from "@/components/RichText";
import { PrismicNextImage } from "@prismicio/next";

//Props for `Hero`.
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

//Component for "Hero" Slices.
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      className="flex flex-col gap-4 max-w-3xl w-full"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicNextImage
        field={slice.primary.image}
        sizes="100vw"
        className="w-full max-w-[100px] max-h-full rounded-md object-cover"
      />
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-4xl">
          <PrismicText field={slice.primary.title} />
        </h1>
        <RichText field={slice.primary.description} />
      </div>
    </section>
  );
};

export default Hero;
