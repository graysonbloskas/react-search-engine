import React from 'react';
import './SearchPage.css';
import Search from '../components/Search'
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import Response from '../response';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/not-google.png';

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  //Live API call
  //   const { data } = useGoogleSearch(term);
  const data = Response;
  console.log(data);

  return (
    <div className='searchPage'>
      <div className='searchPage__header'>
        <Link to='/'>
          <img className='searchPage__logo' src={Logo} alt='Search Page Logo' />
        </Link>

        <div className="searchPage__headerBody">
            <Search hideButtons />
        </div>
      </div>

      <div className='searchPage__results'></div>
    </div>
  );
}

export default SearchPage;
