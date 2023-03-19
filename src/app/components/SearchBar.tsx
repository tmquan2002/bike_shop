import React, { useState, useEffect } from 'react';
import { Input } from 'semantic-ui-react';

interface Props {
  size?: 'mini' | 'small' | 'large' | 'big' | 'huge' | 'massive';
  onChange?: (searchValue: string) => void;
}

const SearchBar: React.FC<Props> = (props) => {
  const {
    size = 'mini',
    onChange = (): void => { },
  } = props;

  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(searchValue);
    }, 300);

    return (): void => {
      clearTimeout(timeout);
    };
  }, [searchValue, onChange]);

  return (
    <div style={{ marginLeft: 'auto', marginRight: 0, width: '20%' }}>
      <Input
        fluid
        size={size}
        placeholder="Search..."
        onChange={(e, { value }): void => {
          setSearchValue(value.trim().toLowerCase());
        }}
      />
    </div>
  );
};

export default SearchBar;
