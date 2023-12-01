// ./src/slices/RichText/index.tsx

import type { Content } from '@prismicio/client';
import {
  PrismicRichText,
  SliceComponentProps,
  JSXMapSerializer,
} from '@prismicio/react';

export const RichComponents: JSXMapSerializer = {
  label: ({ node, children }) => {
    if (node.data.label === 'codespan') {
      return <code>{children}</code>;
    }
  },
  heading1: ({ children }) => (
    <h1 className="font-bold text-4xl">{children}</h1>
  ),
  heading2: ({ children }) => <h2 className="font-bold text-xl">{children}</h2>,
  heading3: ({ children }) => <h3 className="font-bold text-lg">{children}</h3>,
  paragraph: ({ children }) => <p>{children}</p>,
  hyperlink: ({ children, node }) => (
    <a href={node.data.url} className="font-bold underline">
      {children}
    </a>
  ),
};

type RichTextProps = SliceComponentProps<Content.RichTextSlice>;

export default function RichText({ slice }: RichTextProps) {
  return (
    <section className="flex flex-col gap-2">
      <PrismicRichText
        field={slice.primary.content}
        components={RichComponents}
      />
    </section>
  );
}