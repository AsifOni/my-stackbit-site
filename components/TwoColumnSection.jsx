import { Card as RewardsCard } from 'ccg-rewards';
import Image from 'next/image';

export const TwoColumnSection = (props) => {
  const { img: masterImg, cardData } = props;
  const { src: masterSrc, alt: masterAlt } = masterImg;
  const { id, topImg, linkText, linkUrl, ...restProps } = cardData;
  const { src, alt } = topImg;

  return (
    <div className="md:container mx-auto my-8 flex justify-between" data-sb-object-id={props.id}>
      <RewardsCard
        style={"w-1/3"}
        topImg={src}
        imgSRText={alt}
        footer={
          <a className="mt-[1.125rem]" href={linkUrl}>
            {linkText}
          </a>
        }
        {...restProps}
      />
      <Image src={masterSrc} alt={masterAlt} width={520} height={412} />
    </div>
  );
};
