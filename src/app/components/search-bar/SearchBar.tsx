import { useString } from '@app/hooks/use-state-custom';
import React, { useEffect } from 'react';
import { Input } from 'semantic-ui-react';
import './searchBar.less'

interface Props {
  /**Size of taskbar */
  size?: 'mini' | 'small' | 'large' | 'big' | 'huge' | 'massive';
  /**Run your function and get searchValue whenever searchValue change */
  onChange?: (searchValue: string) => void;
  /**Align the searchbar */
  align?: 'left' | 'right'
  /**Custom placeholder */
  placeholder?: string
}

const SearchBar: React.FC<Props> = (props) => {
  const {
    size = 'mini',
    onChange = (): void => { },
    align = 'right',
    placeholder = 'Search...'
  } = props;

  const [searchValue, setSearchValue] = useString('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(searchValue);
    }, 300);

    return (): void => {
      clearTimeout(timeout);
    };
  }, [searchValue, onChange]);

  return (
    <div className={`search-bar-container ${align}`}>
      <Input
        fluid
        size={size}
        placeholder={placeholder}
        onChange={(e, { value }): void => {
          setSearchValue(value.trim().toLowerCase());
        }}
      />
    </div>
  );
};

export default SearchBar;
