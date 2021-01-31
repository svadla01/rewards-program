import './App.css';
import {TxTable} from "./components/TxTable";
import {GetAvailableRewards} from "./components/Rewards";
import {Grid} from "@material-ui/core";


export const App = () =>{
  return (
    <div className="App">

        <Grid>
            <Grid>
                <TxTable/>
            </Grid>
            <Grid>
                <GetAvailableRewards/>
            </Grid>
        </Grid>
    </div>
  );
}
