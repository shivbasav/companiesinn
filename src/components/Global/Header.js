import React from 'react';

import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { capitalize } from 'lodash';
import { Text } from '../../elements';

import Search from './Search';


// const Container = styled.div`
//   position: fixed;
//   width: 100%;
//   z-index: 1000;
//   height: 4rem;
//   background-color: ${({ theme: { colors } }) => colors.primaryColor};
//   over
// `;

// const Wrapper = styled.div`
//   margin: 0rem auto;
//   max-width: 1330px;
// `;

const NavBar = styled.nav`
  &&& {
    position: fixed;
    width: 100%;
    z-index: 1000;
    height: 4rem;
    .navbar-item.has-dropdown {
      align-items: center;
    }
    .navbar-item {
      padding: 0.6rem !important;
    }
    .button {
      height: 2.8em;
    }
    .navbar-item img {
      max-height: 3rem;
    }
    @media screen and (min-width: 1330px) {
      padding: 0rem 0rem;
    }
    @media screen and (min-width: 1370px) {
      padding: 0rem 1rem;
    }
    @media screen and (min-width: 1430px) {
      padding: 0rem 2rem;
    }
    @media screen and (min-width: 1470px) {
      padding: 0rem 4rem;
    }
    @media screen and (min-width: 1500px) {
      padding: 0rem 7rem;
    }
    @media screen and (min-width: 1550px) {
      padding: 0rem 9rem;
    }
    @media screen and (min-width: 1650px) {
      padding: 0rem 11rem;
    }
    @media screen and (min-width: 1700px) {
      padding: 0rem 13rem;
    }
    @media screen and (min-width: 2000px) {
      padding: 0rem 14rem;
    }
    /* padding: 0rem 24px; */
  }
`;

const NavbarLink = styled.a``;
const ImageWrapper = styled.span`
  &&& {
    width: 2.5rem;
    img {
      height: 2.5rem;
      border-radius: 30px;
      width: 2.5rem;
    }
  }
`;

const Header = ({ history }) => {
  const { setIsActiveDesktopLoginModal, setIsActiveDesktopSignInModal, logout } = useStoreActions(
    state => state.auth,
  );
  const { isLoggedIn, user, userImage } = useStoreState(state => state.auth);
  const usedLocation = useStoreState(state => state.global.usedLocation);

  return (
    <NavBar className="navbar  is-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <span>
            <Text color="white" size="big" weight="bold" letterSpacing="loose">
              Kraveln
            </Text>
            <p className="is-size-4 has-text-white">Create your experience</p>
          </span>
        </Link>

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end" />
        <Search history={history} usedLocation={usedLocation} />
        <div className="navbar-end">
          <div className="navbar-item has-dropdown is-hoverable">
            <NavbarLink className="navbar-link">
              <Text color="white" size="smaller">
                Add a Place
              </Text>
            </NavbarLink>

            <div className="navbar-dropdown">
              <div className="navbar-item navbar-brand">
                <Link to="/add-place">
                  <Text size="smaller" color="darkGrey" weight="semibold">
                    Add a Place
                  </Text>
                </Link>
              </div>
              <div className="navbar-item">
                <Link to="/search-place-for-claim">
                  <Text size="smaller" color="darkGrey" weight="semibold">
                    Claim a Place
                  </Text>
                </Link>
              </div>
            </div>
          </div>
         
            <>
              <a
                className="navbar-item"
                onClick={() => setIsActiveDesktopLoginModal({ value: true })}
              >
                <Text color="white" size="smaller">
                  Sign In
                </Text>
              </a>
              <div className="navbar-item">
                <Text color="white" size="smaller">
                  Or
                </Text>
              </div>
             
                <Text color="white" size="smaller">
                  Sign Up
                </Text>
             
            </>
        
          {isLoggedIn && (
            <div className="navbar-item has-dropdown is-hoverable">
              <NavbarLink className="navbar-link" style={{ height: '4rem' }}>
                <div className="is-flex">
                  <ImageWrapper className="icon">
                    {user && (
                      <GetImages
                        name={user.display_name}
                        maskProps={{ width: 40, height: 40 }}
                        maskTextProps={{
                          color: 'white',
                          weight: 'bold',
                          size: 'small',
                          letterSpacing: 'loose',
                        }}
                        borderRadius={25}
                        randomColorCode={user.color_code}
                        userImage={userImage}
                      />
                    )}
                  </ImageWrapper>
                  &nbsp;&nbsp;&nbsp;
                  <Text className="is-capitalized" color="white" size="small">
                    {user && `${capitalize(user.first_name)} `}
                    {/* ${user.last_name.substring(0, 1)} */}
                  </Text>
                </div>
              </NavbarLink>

              <div className="navbar-dropdown">
                <div className="navbar-item">
                  <Link to="/profile">
                    <Text size="smaller" color="darkGrey" weight="semibold">
                      My Profile
                    </Text>
                  </Link>
                </div>
                <div className="navbar-item">
                  <Link to="/profile/my-bookmarks">
                    <Text size="smaller" color="darkGrey" weight="semibold">
                      My Bookmarks
                    </Text>
                  </Link>
                </div>
                <div className="navbar-item">
                  <Link to="/profile/find-friends">
                    <Text size="smaller" color="darkGrey" weight="semibold">
                      Find Friends
                    </Text>
                  </Link>
                </div>
                <div className="navbar-item">
                  <Link to="/profile/my-orders">
                    <Text size="smaller" color="darkGrey" weight="semibold">
                      My Orders
                    </Text>
                  </Link>
                </div>
                <div className="navbar-item">
                  <Link to="/profile/my-badges">
                    <Text size="smaller" color="darkGrey" weight="semibold">
                      My Badges
                    </Text>
                  </Link>
                </div>
                <div className="navbar-item">
                  <Link to="/profile/settings">
                    <Text size="smaller" color="darkGrey" weight="semibold">
                      Settings
                    </Text>
                  </Link>
                </div>
                <div className="navbar-item" style={{ borderTop: '2px solid #f6f6f6' }}>
               
                    <Text size="smaller" color="darkGrey" weight="semibold">
                      Sign out
                    </Text>
                 
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </NavBar>
  );
};

export default withRouter(Header);
