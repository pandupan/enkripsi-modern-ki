"use client"

import { useState, useEffect } from "react";
var CryptoJS = require("crypto-js");
import { motion } from 'framer-motion'

const ProjectEAS = () => {
  const [message, setMessage] = useState("");
  const [key, setKey] = useState(
    CryptoJS.lib.WordArray.random(16).toString(CryptoJS.enc.Hex)
  );
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const validateHex = (input: string) => /^[0-9A-Fa-f]+$/g.test(input);

  const generateRandomMessage = () => {
    const randomMessages = [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    ];
    const randomIndex = Math.floor(Math.random() * randomMessages.length);
    setMessage(randomMessages[randomIndex]);
  };

  useEffect(() => {
    generateRandomMessage();
  }, []); // Run only once on component mount to set initial random message

  const generateKey = () => {
    const newKey = CryptoJS.lib.WordArray.random(16).toString(CryptoJS.enc.Hex);
    setKey(newKey);
    setError("");
  };

  const AESAlgorithm = () => {
    setError("");
    if (!key || !message) {
      setError("Key dan pesan harus diisi.");
      setResult("");
      return;
    }

    if (!validateHex(key)) {
      setError("Key harus dalam format heksadesimal.");
      setResult("");
      return;
    }

    try {
      const ciphertext = CryptoJS.AES.encrypt(
        message,
        CryptoJS.enc.Hex.parse(key),
        {
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7,
        }
      ).ciphertext.toString(CryptoJS.enc.Hex);
      setResult(ciphertext);
    } catch (error) {
      setError("Terjadi kesalahan saat melakukan enkripsi.");
      setResult("");
    }
  };

  const decryptAES = () => {
    setError("");
    if (!key || !result) {
      setError("Key dan ChiperText harus diisi.");
      setResult("");
      return;
    }

    if (!validateHex(key)) {
      setError("Key harus dalam format heksadesimal.");
      setResult("");
      return;
    }

    try {
      const bytes = CryptoJS.AES.decrypt(
        { ciphertext: CryptoJS.enc.Hex.parse(result) },
        CryptoJS.enc.Hex.parse(key),
        {
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7,
        }
      );
      const originalText = bytes.toString(CryptoJS.enc.Utf8);
      setResult(originalText);
    } catch (error) {
      setError("Terjadi kesalahan saat melakukan dekripsi.");
      setResult("");
    }
  };

  return (
    <div id="projects" className="w-full min-h-full flex flex-col justify-center items-center">
        <h1 className="text-3xl sm:text-3xl md:text-5xl uppercase flex flex-col lg:max-h-[150px] gap-2 mb-4 sm:mb-8">
          <motion.span
            className='font-semibold'
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            AES
          </motion.span>
          <motion.span
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className='font-bold text-blue-500'>Encryption</span>
          </motion.span>
        </h1>
      <div className="p-6 w-1/2 max-w-full mx-auto bg-blue-300 bg-opacity-25 backdrop-filter backdrop-blur-lg border border-blue-300 rounded-lg shadow-xl">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Plaintext / ChiperText</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
            value={message}
            placeholder="Enter message to encrypt/decrypt"
            onChange={(e) => setMessage(e.target.value)}
            style={{ height: "100px" }}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Key (16-byte hexadecimal)</label>
          <div className="flex items-center">
            <textarea
              className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
              value={key}
              placeholder="Enter Key in 16-byte hexadecimal format"
              onChange={(e) => {
                setKey(e.target.value);
                if (!validateHex(e.target.value)) {
                  setError("Key must be in hexadecimal format.");
                } else {
                  setError("");
                }
              }}
              style={{ height: "100px" }}
            />
            <button
              className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded ml-2 transition duration-300 ease-in-out transform hover:scale-105"
              onClick={generateKey}
            >
              Generate Key
            </button>
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Result</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
            value={result}
            placeholder="Result will be displayed here"
            style={{ height: "100px" }}
            readOnly
          />
        </div>
        <div className="flex justify-center">
          <button
            className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2 transition duration-300 ease-in-out transform hover:scale-105"
            onClick={AESAlgorithm}
          >
            Encrypt
          </button>
          <button
            className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded ml-2 transition duration-300 ease-in-out transform hover:scale-105"
            onClick={decryptAES}
          >
            Decrypt
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectEAS;
