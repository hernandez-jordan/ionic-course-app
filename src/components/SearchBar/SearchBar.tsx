import React, { useState } from 'react';
import {IonSearchbar} from '@ionic/react';
import './SearchBar.css'


const SearchBar: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <>
      <IonSearchbar border-radius={50} value={searchText} className="searchBar" placeholder="Looking for" onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
    </>
  );
};

export default SearchBar;