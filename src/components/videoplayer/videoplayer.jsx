import React from "react";
import PropTypes from "prop-types";
import {getHumanizedTime} from "../../utils/get-humanized-time";

class Videoplayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  onExit() {
    this.videoRef.current.pause();
    this.props.setFullscreen(false);
    this.props.onExit();
  }

  onFullscreen() {
    if (this.videoRef.current.requestFullScreen) {
      this.videoRef.current.requestFullScreen();
    } else if (this.videoRef.current.mozRequestFullScreen) {
      this.videoRef.current.mozRequestFullScreen();
    } else if (this.videoRef.current.webkitRequestFullScreen) {
      this.videoRef.current.webkitRequestFullScreen();
    }
    this.props.setFullscreen(true);
  }

  onFullscreenExit() {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
    this.props.setFullscreen(false);
  }

  initVideoplayer() {
    this.videoRef.current.play();
  }

  onTimeUpdate() {
    const currentTime = this.videoRef.current.currentTime;
    const totalTime = this.videoRef.current.duration;
    this.props.setEstimatedTime(totalTime - currentTime);
  }

  onPlayPauseToggle() {
    if (this.videoRef.current.paused) {
      this.videoRef.current.play();
    } else {
      this.videoRef.current.pause();
    }
  }

  render() {
    return this.props.isActiveState ? (
      <div className="player">
        <video
          src={this.props.source}
          poster={this.props.poster}
          onLoadedMetadata={this.initVideoplayer.bind(this)}
          onTimeUpdate={this.onTimeUpdate.bind(this)}
          onClick={this.onPlayPauseToggle.bind(this)}
          ref={this.videoRef}
          className="player__video"
        />

        <button type="button" className="player__exit" onClick={this.props.onExit}>Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress
                className="player__progress"
                value={this.videoRef.current ? this.videoRef.current.currentTime : 0}
                max={this.videoRef.current ? this.videoRef.current.duration : 100}
              />
              <div className="player__toggler" style={{
                left: `${this.videoRef.current ? this.videoRef.current.currentTime / this.videoRef.current.duration * 100 : 0}%`
              }}>Toggler</div>
            </div>
            <div className="player__time-value">{getHumanizedTime(this.props.estimatedTime)}</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">{this.props.title}</div>

            <button type="button" className="player__full-screen" onClick={this.onFullscreen.bind(this)}>
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    ) : null;
  }
}

Videoplayer.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  isActiveState: PropTypes.bool,
  onExit: PropTypes.func,
  isFullscreen: PropTypes.bool,
  setFullscreen: PropTypes.func,
  estimatedTime: PropTypes.number,
  setEstimatedTime: PropTypes.func,
};

export default Videoplayer;
