import { Button as RewardsButton } from 'ccg-rewards';

export const Button = (props) => {
  const { label, id } = props;
  return <RewardsButton label={label} sbDataAttr={{ label: 'label' }} data-sb-object-id={props.id} />;
};
