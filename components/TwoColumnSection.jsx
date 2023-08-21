import { TwoColumnSection as RewardTwoColumnSection } from 'ccgx-rewards';

export const TwoColumnSection = (props) => {
  return (
    <div className="md:container mx-auto flex" data-sb-object-id={props.id}>
      <RewardTwoColumnSection {...props} containerStyle='custom-twoColumnSection'/>
    </div>
  );
};
