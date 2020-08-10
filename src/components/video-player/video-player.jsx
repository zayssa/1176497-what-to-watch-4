import React from "react";
import PropTypes from "prop-types";
import {getHumanizedTime} from "../../utils/get-humanized-time";
import {IFilm} from '../../types/film';

class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
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

  initVideoPlayer() {
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
      this.props.setPaused(false);
    } else {
      this.videoRef.current.pause();
      this.props.setPaused(true);
    }
  }

  onExit() {
    this.props.history.push(`/films/${this.props.match.params.filmId}`);
  }

  render() {
    return (
      <>
        <div className="visually-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><symbol id="add" viewBox="0 0 19 20">
            <title>+</title>
            <desc>Created with Sketch.</desc>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <polygon id="+" fill="#EEE5B5" points="10.777832 11.2880859 10.777832 19.5527344 8.41650391 19.5527344 8.41650391 11.2880859 0.627929688 11.2880859 0.627929688 8.92675781 8.41650391 8.92675781 8.41650391 0.662109375 10.777832 0.662109375 10.777832 8.92675781 18.5664062 8.92675781 18.5664062 11.2880859"/>
            </g>
          </symbol><symbol id="full-screen" viewBox="0 0 27 27">
            <path fillRule="evenodd" clipRule="evenodd" d="M23.8571 0H16V3.14286H23.8571V11H27V3.14286V0H23.8571Z" fill="#FFF9D9" fillOpacity="0.7"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M27 23.8571V16H23.8571V23.8571H16V27H23.8571H27L27 23.8571Z" fill="#FFF9D9" fillOpacity="0.7"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M0 3.14286L0 11H3.14286L3.14286 3.14286L11 3.14286V0H3.14286H0L0 3.14286Z" fill="#FFF9D9" fillOpacity="0.7"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M3.14286 27H11V23.8571H3.14286L3.14286 16H0L0 23.8571V27H3.14286Z" fill="#FFF9D9" fillOpacity="0.7"/>
          </symbol><symbol id="in-list" viewBox="0 0 18 14">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.40513 5.35353L6.1818 8.90902L15.5807 0L18 2.80485L6.18935 14L0 8.17346L2.40513 5.35353Z" fill="#EEE5B5"/>
          </symbol><symbol id="pause" viewBox="0 0 14 21">
            <title>Artboard</title>
            <desc>Created with Sketch.</desc>
            <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <polygon id="Line" fill="#EEE5B5" fillRule="nonzero" points="0 -1.11910481e-13 4 -1.11910481e-13 4 21 0 21"/>
              <polygon id="Line" fill="#EEE5B5" fillRule="nonzero" points="10 -1.11910481e-13 14 -1.11910481e-13 14 21 10 21"/>
            </g>
          </symbol></svg>
        </div>

        <div className="player">
          <video
            src={this.props.film.videoLink}
            poster={this.props.film.poster}
            onLoadedMetadata={this.initVideoPlayer.bind(this)}
            onTimeUpdate={this.onTimeUpdate.bind(this)}
            onClick={this.onPlayPauseToggle.bind(this)}
            ref={this.videoRef}
            className="player__video"
          />

          <button type="button" className="player__exit" onClick={this.onExit.bind(this)}>Exit</button>

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
              {this.props.paused ? (
                <button type="button" className="player__play" onClick={this.onPlayPauseToggle.bind(this)}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
              ) : (
                <button type="button" className="player__play" onClick={this.onPlayPauseToggle.bind(this)}>
                  <svg viewBox="0 0 14 21" width="14" height="21">
                    <use xlinkHref="#pause"></use>
                  </svg>
                  <span>Pause</span>
                </button>
              )}
              <div className="player__name">{this.props.film.title}</div>

              <button type="button" className="player__full-screen" onClick={this.onFullscreen.bind(this)}>
                <svg viewBox="0 0 27 27" width="27" height="27">
                  <use xlinkHref="#full-screen"></use>
                </svg>
                <span>Full screen</span>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

VideoPlayer.propTypes = {
  film: IFilm,
  isFullscreen: PropTypes.bool,
  setFullscreen: PropTypes.func,
  estimatedTime: PropTypes.number,
  setEstimatedTime: PropTypes.func,
  history: PropTypes.any,
  match: PropTypes.any,
  paused: PropTypes.bool,
  setPaused: PropTypes.func
};

export default VideoPlayer;
