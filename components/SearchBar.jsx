import { Button as RButton } from 'ccg-rewards';

export const SearchBar = () => {
  return (
    <div className="flex p-8 justify-center bg-caa-pink">
      <div className="w-[625px]">
        <div className='bg-white'>
            <input type='text' placeholder='Search by name, keyword' aria-label='Search benefits'/>
            <select>
                <option></option>
                <option></option>
                <option></option>
            </select>

        </div>
        <RButton label="Find Offers"/>
      </div>
    </div>
  );
};
