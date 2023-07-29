import { Card as RewardsCard } from 'ccg-rewards';

export const Card = (props) => {
  const { id, topImg, linkText, linkUrl, ...restProps } = props;
  const { src, alt } = topImg;

  return (
    <div data-sb-object-id={id}>
      <RewardsCard
        topImg={src}
        imgSRText={alt}
        footer={
          <a className="mt-[1.125rem]" href={linkUrl}>
            {linkText}
          </a>
        }
        {...restProps}
      />
    </div>
  );
};
