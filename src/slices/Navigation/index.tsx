// ./src/slices/Navigation/index.tsx

import { Content, FilledContentRelationshipField } from '@prismicio/client';
import {
  PrismicLink,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react';
import { RichComponents } from '../RichText';

/**
 * Props for `Navigation`.
 */
export type NavigationProps = SliceComponentProps<Content.NavigationSlice>;

/**
 * Component for "Navigation" Slices.
 */
const Navigation = ({ slice }: NavigationProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="font-bold text-xl self-center"
    >
      {slice.items.map((item, i) => {
        const link = item.page as FilledContentRelationshipField;

        return (
          <PrismicLink
            href={link.url || ''}
            key={link.id}
            className="hover:opacity-75 duration-300 ease-in-out transition-all"
          >
            <PrismicRichText field={item.label} components={RichComponents} />
          </PrismicLink>
        );
      })}
    </section>
  );
};

export default Navigation;