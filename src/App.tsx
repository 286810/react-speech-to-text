import React from 'react';

import useSpeechToText from 'Hooks/useSpeechToText';

import micIcon from './mic.svg';

import './App.css';

export default function App() {
  const {
    startCapturing,
    stopCapturing,
    isRecording,
    error,
    results
  } = useSpeechToText({
    timeout: 10000,
    continuous: true,
    crossBrowser: true,
    googleApiKey: process.env.REACT_APP_API_KEY
  });

  if (error) {
    return (
      <div
        style={{
          maxWidth: '600px',
          margin: '100px auto',
          textAlign: 'center'
        }}
      >
        <p>
          {error}
          <span style={{ fontSize: '3rem' }}>🤷‍</span>
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '100px auto',
        textAlign: 'center'
      }}
    >
      <h1>Recording: {isRecording.toString()}</h1>
      <button onClick={isRecording ? stopCapturing : startCapturing}>
        <span>{isRecording ? 'Stop Recording' : 'Start Recording'}</span>
        <img data-recording={isRecording} src={micIcon} alt="" />
      </button>
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
}