

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      acct: {
        name: 'SOMENAME',
        email: 'anemeail',
        password: 'somepass',
      },
      addy: {
        add1: 'someadd1',
        add2: 'secondline',
        city: 'thecity',
        state: 'thestate',
        zip: 43324,
        phone: '5101231234',
      },
      payment: {
        card: '44444444444',
        exp: '12/01/21',
        cvv: 123,
        zip2: 242424
      },
      formNum: 4,

    }
  }


  render(){
    var display;
    if (this.state.formNum ===1) {
      display =       
        <div>
          <Form1 />
        </div>;
    } else if (this.state.formNum ===2) {
      display =       
        <div>
          <Form2 />
        </div>;
    } else if (this.state.formNum ===3) {
      display =       
        <div>
          <Form3 />
        </div>;
    } else if (this.state.formNum ===4) {
      display =       
        <div>
          <Form4 />
        </div>;
    } 





    return(
      <div>
        {display}
      </div>
    )
  }
};



class Form1 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      acct: {
        name: 'SOMENAME',
        email: 'anemeail',
        password: 'somepass',
      }
    }
  }

  render(){
    return(
      <h1>Thisisform 1</h1>

    )
  }
};


class Form2 extends React.Component{
  constructor(props){
    super(props);
  };

  render() {
    return(
      <h1>Thisisform 2</h1>

    )
  }
};



class Form3 extends React.Component{
  constructor(props){
    super(props);
  };

  render() {
    return(
      <h1>Thisisform 3</h1>

    )
  }
};

class Form4 extends React.Component{
  constructor(props){
    super(props);
  };

  render() {
    return(
      <h1>form 4.</h1>

    )
  }
};





        // <div>
        //   <Form1 />
        // </div>

        // <div>
        //   <Form2 />
        // </div>

        // <div>
        //   <Form3 />
        // </div>

        // <div>
        //   <Form4 />
        // </div>













ReactDOM.render(<App />, document.getElementById('app'));
