import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useTransition, animated } from "react-spring";

import useRouter from "./hooks/useRouter";
import Intro from "./features/Intro/Intro";
import CountIntro from "./features/CountIntro/CountIntro";

import { ImagesProvider } from "./contexts/ImagesContext";
import CountSelect from "./features/CountSelect/CountSelect";
import CountSelectButton from "./features/CountSelectButton/CountSelectButton";


function App(props) {
    
    const { location } = useRouter();
    const transitions = useTransition(location, location => location.pathname, {
        from: {
            opacity: location.pathname !== "/" ? 0 : 1,
            transform: "translateX(0%)"
        },
        enter: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(-20%)", delay: 0 }
    });
    return transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
            <Suspense fallback={""}>
              <Switch location={item}>
                <Route
                    path="/count-select-button"
                    exact
                    render={props => (
                      <ImagesProvider
                        r={require.context(
                          "./features/CountIntro/images/",
                          true,
                          /\.(png|jpe?g|svg)$/
                        )}
                      >
                        <CountSelectButton {...props} />
                      </ImagesProvider>
                    )}
                />
                <Route
                    path="/count-select"
                    exact
                    render={props => (
                      <ImagesProvider
                        r={require.context(
                          "./features/CountIntro/images/",
                          true,
                          /\.(png|jpe?g|svg)$/
                        )}
                      >
                        <CountSelect {...props} />
                      </ImagesProvider>
                    )}
                />
                <Route
                  path="/count-intro"
                  exact
                  render={props => (
                    <ImagesProvider
                      r={require.context(
                        "./features/CountIntro/images/",
                        true,
                        /\.(png|jpe?g|svg)$/
                      )}
                    >
                      <CountIntro {...props} />
                    </ImagesProvider>
                  )}
                />
                <Route
                  path="/"
                  exact
                  render={props => (
                    <ImagesProvider
                    intro={true}
                      r={require.context(
                        "./features/Intro/images/",
                        false,
                        /\.(png|jpe?g|svg)$/
                      )}
                    >
                      <Intro {...props} />
                    </ImagesProvider>
                  )}
                />
                <Redirect to="/" />
              </Switch>
            </Suspense>
        </animated.div>
    ));
}

export default App;
