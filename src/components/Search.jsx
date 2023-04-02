import React,{useState,useContext} from "react";
import {AiOutlineSearch} from 'react-icons/ai'



//import {ourContainerFunction, ourContextData} from '../context/context'


export const Search = () => {
  const [searchData, setSearchData] = useState("");

// const { ourContainerFunction,searchUser} = useContext(ourContextData);

  const onSearchHandler = () => {
    console.log(searchData);
    console.log(searchData.length);
 //searchGithubUsers(searchData)
 //console.log(searchUser)
    // setSearchData('')
  };
  return (
    <div className=" shadow-lg mt-5 mb-5 flex flex-row justify-center items-center flex-wrap bg-slate-100 w-fit ">
        <AiOutlineSearch className="text-gray-500 text-3xl px-1 "/>
      <input
        type="text"
        name="search"
        autoFocus={true}
        value={searchData}
        placeholder="search the github user..."
        onChange={(e) => {
          setSearchData(e.target.value);
        }}
        className="bg-slate-100 outline-none border-none placeholder-gray-500"
      />
      <button
        type="submimt"
        onClick={onSearchHandler}
        className="bg-blue-400 text-white text-center p-1  px-4 
        "
      >
        Search
      </button>
    </div>
  );
};
