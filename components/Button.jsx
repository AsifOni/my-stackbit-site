import { Button as RewardsButton } from 'ccgx-rewards';

export const Button = (props) => {
  const { label, id } = props;
  return (
    <div data-sb-object-id={id}>
      <RewardsButton label={label} sbDataAttr={{ label: 'label' }} />
    </div>
  );
};
