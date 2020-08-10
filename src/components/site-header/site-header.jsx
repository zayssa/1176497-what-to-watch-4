import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getAuthStatus} from "../../reducer/selectors";
import {IUser} from "../../types/user";


const SiteHeader = ({authorizationStatus, userInfo}) => {
  return (
    <>
      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="user-block">
          {authorizationStatus === `NO_AUTH` ? (
            <Link to="/login" className="user-block__link">Sign in</Link>
          ) : (
            <div className="user-block__avatar">
              <Link to="/mylist">
                <img src={`https://4.react.pages.academy${userInfo.avatar_url}`} alt="User avatar" width="63" height="63" />
              </Link>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

SiteHeader.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  userInfo: IUser
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthStatus(state)
});

const mapDispatchToProps = () => ({});

export {SiteHeader};
export default connect(mapStateToProps, mapDispatchToProps)(SiteHeader);
