import {
  useApi,
  useTranslate,
  Grid,
  reactExtension,
  BlockLayout,
  Image,
  Text,
  useSettings,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const { text, indicatorUrl, image_text_space, image_size } = useSettings();

  return (
    <BlockLayout
      rows={['fill']}
      border={'base'}
      borderRadius={'base'}
      spacing={image_text_space}
      blockAlignment={'center'}
      cornerRadius={'loose'}
      overflow='hidden'
      inlineAlignment={'center'}
    >
      <Grid columns={[`${image_size}%`, 'auto']} inlineAlignment={'center'} padding={'base'}>
        <Text >
          {// @ts-ignore
            <Image source={indicatorUrl} fit={'contain'} />
          }
        </Text>
        <Text >{text}</Text>
      </Grid>
    </BlockLayout>
  );
}