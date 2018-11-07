// import Grid from '@material-ui/core/Grid';
import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import './App.css';
import Test from './test/test';
import SideBar from './side.bar/SideBar'



class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const user = {

      name: 'test',
      age: 18,
    };
    return (
      <div>
        <Grid container={true} spacing={16} >
          <Grid item={true} xs={12}>
            <Test />
          </Grid>
        </Grid>
        <Grid container={true} spacing={16} >
          <Grid item={true} xs={2} >
            <SideBar name={user.name} />
          </Grid>
          <Grid item={true} xs={10}  >
            <div>{user.name}</div>
          </Grid>
        </Grid>
      </div>
    );
  }
}



export default App;
