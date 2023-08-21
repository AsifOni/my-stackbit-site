import { ThreeColumnCard as RewardsThreeColumnCard } from 'ccgx-rewards';

export const ThreeColumnCard = (props) => {
  return (
    <div className="md:container mx-auto pad my-8" data-sb-object-id={props.id}>
      <RewardsThreeColumnCard
        {...props}
        containerStyle='custom-threeColumnCard'
        sbDataAttr={{
          title: 'title',
          subText: 'subText',
        }}
      />
    </div>
  );
};
