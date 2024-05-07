'use client'

import { useState } from 'react';
const Blowfish = require('blowfish-node');

function Project() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [isEncoded, setIsEncoded] = useState(true); // Menyimpan status apakah teks sudah dienkripsi atau belum
  
  const handleTextChange = (event : any) => {
    setInputText(event.target.value);
    setOutputText(''); // Mengosongkan output saat pengguna mulai mengubah teks input
  };

  const handleEncrypt = () => {
    const bf = new Blowfish(secretKey, Blowfish.MODE.ECB, Blowfish.PADDING.NULL);
    const encoded = bf.encode(inputText);
    setOutputText(encoded);
    setIsEncoded(true); // Menandai bahwa teks sudah dienkripsi
  };

  const handleDecrypt = () => {
    const bf = new Blowfish(secretKey, Blowfish.MODE.ECB, Blowfish.PADDING.NULL);
    const decoded = bf.decode(inputText, Blowfish.TYPE.STRING);
    setOutputText(decoded);
    setIsEncoded(false); // Menandai bahwa teks belum dienkripsi
  };

  return (
    <section id="projects" className='relative'>
      <div className="max-w-md mx-auto bg-white border border-gray-300 p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Blowfish Encryption</h2>
        <div className="mb-4">
          <label htmlFor="inputText" className="block mb-1">Input Text:</label>
          <textarea
            id="inputText" 
            value={inputText} 
            onChange={handleTextChange} 
            className="w-full h-20 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="secretKey" className="block mb-1">Secret Key:</label>
          <input 
            type="text" 
            id="secretKey" 
            value={secretKey} 
            onChange={(e) => setSecretKey(e.target.value)} 
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="outputText" className="block mb-1">{isEncoded ? 'Encoded' : 'Decoded'} Text:</label>
          <textarea
            id="outputText" 
            value={outputText} 
            readOnly 
            className="w-full h-20 border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
          />
        </div>
        <button onClick={isEncoded ? handleEncrypt : handleDecrypt} className="w-full bg-blue-500 text-white py-2 rounded-md mb-2 hover:bg-blue-600">{isEncoded ? 'Encrypt' : 'Decrypt'}</button>
      </div>
    </section>
  )
}

export default Project;
