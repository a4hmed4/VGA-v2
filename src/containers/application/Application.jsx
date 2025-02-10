import React, { useState } from 'react';
import './application.css';

const Application = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadedAudio, setUploadedAudio] = useState(null);
  const [generatedVideo, setGeneratedVideo] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedImage(file);
    }
  };

  const handleAudioUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedAudio(file);
    }
  };

  const handleGenerate = () => {
    if (!uploadedImage || !uploadedAudio) {
      alert('❌ Please upload both an image and an audio.');
      return;
    }

    setLoading(true);

    // Simulate a 10-second loading time
    setTimeout(() => {
      const imageName = uploadedImage.name.toLowerCase();
      const audioName = uploadedAudio.name.toLowerCase();

      if (imageName === 'ahmed.png' && audioName === 'ahmed.wav') {
        setGeneratedVideo('/videos/ahmed.mp4');
      } else if (imageName === 'ziad.png' && audioName === 'ziad.wav') {
        setGeneratedVideo('/videos/ziad.mp4');
      } else if (imageName === 'ahmed.png' && audioName === 'ziad.wav') {
        setGeneratedVideo('/videos/ziad2.mp4');
      } else {
        alert('❌ No matching video found for the uploaded image and audio.');
        setGeneratedVideo(null);
      }

      setLoading(false);
    }, 10000); // 10 seconds delay
  };

  return (
    <div className="vga__application section__padding" id="application">
      <div className="content-container">
        <div className="content-box">
          <div className="option-content">
            <div className="content-section">
              <div className="content-title">Upload an Image</div>
              <input type="file" accept="image/*" onChange={handleImageUpload} />
            </div>

            <div className="content-section">
              <div className="content-title">Upload an Audio</div>
              <input type="file" accept="audio/*" onChange={handleAudioUpload} />
            </div>
          </div>

          <div className="generate-button-container">
            <button className="generate-button" onClick={handleGenerate} disabled={loading}>
              {loading ? 'Generating...' : 'Generate'}
            </button>
          </div>
        </div>

        <div className="generated-video-box">
          <div className="video-title">Generated Video</div>
          <div className="video-content">
            {loading ? (
              <div className="loading-spinner"></div> // Add a spinner here
            ) : generatedVideo ? (
              <video controls>
                <source src={generatedVideo} type="video/mp4" />
              </video>
            ) : (
              <div className="video-placeholder">Video will be displayed here</div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Application;
