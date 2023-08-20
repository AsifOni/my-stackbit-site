import { Hero as RewardsHero } from 'ccgx-rewards';

export const Hero = (props) => {
  const { id, img = {}, ...restProps } = props;
  const { src, alt } = img;
  return (
    <div data-sb-object-id={id}>
      <RewardsHero
        img={src}
        imgAltText={alt}
        {...restProps}
        className="benefit-hero"
        sbDataAttr={{ heading: 'heading', body: 'body' }}
      />
    </div>
  );
};
