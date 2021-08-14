import React from "react";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import "./SearchPage.css";
import Response from "../response";
import { Link } from "react-router-dom";
import Search from "./Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Description } from "@material-ui/icons";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);

  // const data = Response;
  // console.log(data);

  return (
    <div className="search-page">
      <div className="search-page__header">
        <Link to="/">
          <img
            className="search-page__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>

        <div className="search-page__header__body">
          <Search hideButtons />
          <div className="search-page__options">
            <div className="search-page__options__left">
              <div className="search-page__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="search-page__option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="search-page__option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="search-page__option">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="search-page__option">
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="search-page__option">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>

            <div className="search-page__options__right">
              <div className="search-page__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="search-page__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="search-page__results">
          <p className="search-page__result__count">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="search-page__result">
              
              <a className="search-page__result__link" href={item.link}>
                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0].src && (
                  <img className="search-page__result__image" src={item.pagemap?.cse_image[0]?.src} alt="" />
                )}

                {item.displayLink} V
              </a>
            <a className="search-page__result__title" href={item.link}>
              <h2>{item.title}</h2>
            </a>
            <p className="search-page__result__snippet">
              {item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
