import "./App.scss";
import { Switch, Route } from "react-router-dom";
import NewsListPage from "./Pages/NewsListPage";
import NewsDetailsPage from "./Pages/NewsDetailsPage";
import MainPage from "./Pages/MainPage";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path={"/categories/:id/news"} component={NewsListPage} />
      <Route exact path={"/news/:id"} component={NewsDetailsPage} />
    </Switch>
  );
};

export default App;
