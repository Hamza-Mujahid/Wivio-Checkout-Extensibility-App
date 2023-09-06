import {
  reactExtension,
  BlockStack,
  Image,
  useSettings,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const { image_url1 } = useSettings();
  return (
    <>
      <BlockStack inlineAlignment={'end'}>
        <Image fit={'cover'} loading='lazy'
          // @ts-ignore
          source={image_url1}>
        </Image>
      </BlockStack>
    </>
  );
}