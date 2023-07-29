import { Card as RewardsCard } from 'ccg-rewards';
import Image from 'next/image';

export const TwoColumnSection = (props) => {
  const { img: masterImg, cardData } = props;
  const { src: masterSrc, alt: masterAlt } = masterImg;
  return (
    <div className="md:container mx-auto pad my-8" data-sb-object-id={props.id}>
      {cardData?.map((data, idx) => {
        const { id, topImg, linkText, linkUrl, ...restProps } = data;
        const { src, alt } = topImg;
        return (
          <RewardsCard
            key={`card-data-${idx}`}
            topImg={src}
            imgSRText={alt}
            footer={
              <a className="mt-[1.125rem]" href={linkUrl}>
                {linkText}
              </a>
            }
            {...restProps}
          />
        );
      })}
      <Image src={masterSrc} alt={masterAlt} />
    </div>
  );
};
