import React, { useState } from 'react';
import axios from 'axios';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const IndexPage = () => {
const [input, setInput] = useState('');
const [url, setUrl] = useState('');
const [show, setShow] = useState(false);
const [error, setError] = useState(false);
// const [copy, setCopy] = useState(false);


  const getUrl = async (input) => {
    try {
      const res = await axios.post('https://koppi.link/unreg', {
      url: input
    });
    setShow(true);
    setUrl(res.data.result);
  } catch(error){
    setError(true);
  }
}


  const onSubmit = e => {
    e.preventDefault();
    setShow(false);
    setError(false);
    getUrl(input)
    setInput('');

  };


  return (
    //bg-gradient-to-r from-green-400 to-blue-500
    <body class=" h-screen bg-blue-100 rounded-xl p-8 flex flex-col items-center">
    <main>
      <title>Koppi.link</title>
      <div> 
      <form class="w-full max-w-sm" onSubmit={onSubmit}>
      <div class="flex items-center border-b border-pink-500 py-2">
      <input class="appearance-none bg-transparent border-none w-full placeholder-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Add a link" aria-label="Url"
        required
        id="Name"
        value={input}
        autoComplete="off"
        onChange={(e) => { setInput(e.target.value); }}
        onFocus={(e) => { e.target.placeholder = ''; }}
        onBlur={(e) => { e.target.placeholder = 'Add a link'; }}
       />
      <button class="flex-shrink-0 bg-green-500 hover:bg-green-700 border-green-500 hover:border-green-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
        Fetch shortend url
      </button>
       </div>
      </form>
      </div>
      <br></br>

      {show === true ?
      <div class="flex place-content-evenly items-center bg-blue-500 text-white text-sm font-bold px-4 py-3" role="alert">
      <p>{url}</p>
      <br></br>
      <CopyToClipboard text={url}
        // onCopy={() => setCopy(true)}
        >
        <button class="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Copy</button>
      </CopyToClipboard>
      </div>
      
      : <></>}

      {error === true ?
          <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative flex flex-col items-center" role="alert">
          <strong class="font-bold">Please use a valid URL</strong>
          <span class="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
          </div>
          : <></>}

    </main>
    </body>
  )
}

export default IndexPage
