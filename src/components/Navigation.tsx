import { Client, Content, isFilled } from '@prismicio/client';
import { PrismicLink } from '@prismicio/react';

export const Navigation = async ({
  client,
}: {
  client: Client<Content.AllDocumentTypes>;
}): Promise<JSX.Element> => {
  const navigation = await client.getSingle('navigation');

  return (
    <nav className="font-bold text-xl self-center">
      <ul>
        {isFilled.group(navigation.data.menuitems) && navigation.data.menuitems.map((item, i) => {
          return (
            <li key={i}>
              <PrismicLink field={item.link}>
                {item.label}
              </PrismicLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};