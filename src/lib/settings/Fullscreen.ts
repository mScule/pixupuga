const isFullscreenEnabled = () =>
    new URLSearchParams(window.location.search).has("fullscreen");

export default isFullscreenEnabled;
