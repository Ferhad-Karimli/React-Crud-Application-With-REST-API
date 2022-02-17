import { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Loading from "../components/Loading";
import { AppProvider } from "./AppProvider";

const HomePage = lazy(() => import("../pages/home"));
const PostPage = lazy(() => import("../pages/posts/index"));
const PostDetailedPage = lazy(() => import("../pages/detailed/index"));

const App = () => {
  return (
    <AppProvider>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/posts" component={PostPage} />
          <Route path="/posts/id=:id?" component={PostDetailedPage} />
        </Switch>
      </Suspense>
    </AppProvider>
  );
};

export default App;
