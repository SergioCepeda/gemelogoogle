import  Search  from "../Components/Search"
import React from 'react'
import { Link } from 'react-router-dom';
import "./SearchPage.css"
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';
import { selectTextString } from "../features/textSlice";
import { useSelector } from 'react-redux';
import useGoogleSearch from "../useGoogleSearch";
import Result from "../Components/Result";


const SearchPage = () => {
   
    const textString = useSelector(selectTextString);
    const {data} = useGoogleSearch(textString)
      console.log(data)

  return (
    <div className="searchPage">
       <div  className="searchPage__header">
         <Link to="/">
             <img className="searchPage__logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="logo"/>
         </Link>
        
        <div className="searchPage__headerCenter">
          <Search hideButtons/>
          <div className="searchPage__options">
            <div className="searchPage__optionLeft">
            <div className="searchPage__option">
              <SearchIcon/>
              <Link to="/all">All</Link>
              </div>

              <div className="searchPage__option">
              <DescriptionIcon/>
              <Link to="/news">News</Link>
              </div>

              <div className="searchPage__option">
              <ImageIcon/>
              <Link to="/images">Images</Link>
              </div>

              <div className="searchPage__option">
              <LocalOfferIcon/>
              <Link to="/shopping">shopping</Link>
              </div>

              <div className="searchPage__option">
              <RoomIcon/>
              <Link to="/maps">maps</Link>
              </div>

              <div className="searchPage__option">
              <MoreVertIcon/>
              <Link to="/more">more</Link>
              </div>


            </div>
            <div className="searchPage__optionRight">
            <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
            </div>
            <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
            </div>

            </div>
          </div>
        </div>
         <div className="searchPage__headerRight">
         <AppsIcon fontSize="small"/> 
         <Avatar className="headerRight__avatar"/>
         </div>
         </div>
            {textString && (
              <div className="searchPage__results">
                <p className="searchPage__resultCount"> 
                   About {data?.searchInformation.formattedTotalResults} results ({
                     data?.searchInformation.formattedSearchTime
                   } seconds)
                </p>
              {
                data?.items.map((item)=>(
                  <Result key={item.cacheId}  data={item}/>
                ))
              }
              </div>
            )
             
            
            

            }

                 
            
    </div>
  
   
   
  )
}

export default SearchPage