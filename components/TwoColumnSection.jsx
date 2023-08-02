import { Card as RewardsCard } from 'ccg-rewards';
import { Button } from './Button';
import Image from 'next/image';

export const TwoColumnSection = (props) => {
  const { img: masterImg = {}, cardData={} } = props;
  const { src: masterSrc, alt: masterAlt } = masterImg;
  const { id, topImg={}, buttonText, linkText, linkUrl, ...restProps } = cardData;
  const { src, alt } = topImg;

  return (
    <div className="md:container mx-auto my-8 flex justify-between" data-sb-object-id={props.id}>
      <RewardsCard
        style={'w-1/3'}
        topImg={src}
        imgSRText={alt}
        footer={<Button label={buttonText} sbDataAttr={{ label: 'buttonText' }} />}
        {...restProps}
      />
      <Image src={masterSrc} alt={masterAlt} width={520} height={412} />
    </div>
  );
};
