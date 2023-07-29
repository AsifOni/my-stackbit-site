import { Card as RewardsCard } from 'ccg-rewards';

export const Card = (props) => {
  const { id, topImg, ...restProps } = props;
  const { src, alt } = topImg;
  return (
    <div data-sb-object-id={id}>
      <RewardsCard topImg={src} imgSRText={alt} {...restProps} />
    </div>
  );
};
