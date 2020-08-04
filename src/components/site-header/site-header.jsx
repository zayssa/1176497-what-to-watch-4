import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getAuthStatus} from "../../reducer/selectors";


const SiteHeader = ({authorizationStatus}) => {
  return (
    <>
      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <div className="logo">
          <a className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="user-block">
          {authorizationStatus === `NO_AUTH` ? (
            <a href="sign-in.html" className="user-block__link">Sign in</a>
          ) : (
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          )}
        </div>
      </header>
    </>
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthStatus(state)
});

const mapDispatchToProps = () => ({});

SiteHeader.propTypes = {
  authorizationStatus: PropTypes.string.isRequired
};

export {SiteHeader};
export default connect(mapStateToProps, mapDispatchToProps)(SiteHeader);
