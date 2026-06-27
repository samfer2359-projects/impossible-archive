function VideoBackground() {
  return (
    <video
      className="background-video"
      autoPlay
      muted
      loop
      playsInline
    >
      <source
        src="/background.mp4"
        type="video/mp4"
      />
    </video>
  );
}

export default VideoBackground;