import { TwoColumnSection as RewardTwoColumnSection } from 'ccgx-rewards';

export const TwoColumnSection = (props) => {
  return (
    <div className="md:container mx-auto my-8 flex justify-between" data-sb-object-id={props.id}>
      <RewardTwoColumnSection {...props} />
    </div>
  );
};
