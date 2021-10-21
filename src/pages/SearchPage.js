import React from 'react';
import './SearchPage.css';
// import '../index.scss';
import Search from '../components/Search';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import Response from '../response';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/not-google.png';
import SearchIcon from '@material-ui/icons/Search';
import { Description } from '@material-ui/icons';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  // Live API call
    const { data } = useGoogleSearch(term);
  // const data = Response;
  console.log(data);

  return (
    <div className='searchPage'>
      <div className='searchPage__header'>
        <Link to='/'>
          <img className='searchPage__logo' src={Logo} alt='Search Page Logo' />
        </Link>

        <div className='searchPage__headerBody'>
          <Search hideButtons className="form"/>
          <div className='searchPage__options'>
            <div className='searchPage__optionsL'>
              <div className='searchPage__option'>
                <SearchIcon />
                <Link to='/all'>All</Link>
              </div>

              <div className='searchPage__option'>
                <Description />
                <Link to='/news'>News</Link>
              </div>

              <div className='searchPage__option'>
                <ImageIcon />
                <Link to='/images'>Images</Link>
              </div>

              <div className='searchPage__option'>
                <LocalOfferIcon />
                <Link to='/shopping'>Shopping</Link>
              </div>

              <div className='searchPage__option'>
                <RoomIcon />
                <Link to='/maps'>Maps</Link>
              </div>

              <div className='searchPage__option'>
                <MoreVertIcon />
                <Link to='/more'>More</Link>
              </div>
            </div>

            <div className='searchPage__optionsR'>
              <div className='searchPage__option'>
                <Link to='/settings'>Settings</Link>
              </div>
              <div className='searchPage__option'>
                <Link to='/tools'>Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {true && (
        <div className='searchPage__results'>
          <p className='searchPage__resultCount'>
            About {data?.searchInformation.formattedTotalResults} Results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className='searchPage__result'>
              <a href={item.link} className="searchPage__link">
                  {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                      <img className="searchPage__resultImage" src={item.pagemap?.cse_image[0]?.src} alt="" />
                  )}
                  {item.displayLink} ⌄</a>
              <a href={item.link} className='searchPage__resultTitle'>
               <h2>{item.title}</h2> 
              </a>
              <p className="searchPage__resultSnippet">
                  {item.snippet}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
