import React, { useState } from 'react';
import './App.css';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import useClipboard from 'react-use-clipboard';

const App = () => {
  console.log('abcd');
  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy);

  const startListening = () =>
    SpeechRecognition.startListening({
      continuous: true,
      language: 'en-IN',
    });

  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <>
      <div className="container">
        <h2> speech to text converter</h2>
        <br />
        <p>
          A react hook that converts speech from the microphone to the text amd
          makes is available to your react component
        </p>

        <div className="main-content" onClick={() => setTextToCopy(transcript)}>
          {transcript}
        </div>
        <div className="btn-style">
          <button onClick={setCopied}>
            {isCopied ? 'copied!' : 'copy to clipboard'}
          </button>
          <button onClick={startListening}>start Listening</button>
          <button onClick={SpeechRecognition.stopListening()}>
            Stop Listening
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
