

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
      formNum: 1,
    }
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(e) {
    console.log('inside handleUpdate');
  };


  render(){
    var display;
    if (this.state.formNum ===1) {
      display =       
        <div>
          <Form1 handleUpdate = {this.handleUpdate}/>
        </div>;
    } else if (this.state.formNum ===2) {
      display =       
        <div>
          <Form2 handleUpdate = {this.handleUpdate}/>
        </div>;
    } else if (this.state.formNum ===3) {
      display =       
        <div>
          <Form3 handleUpdate = {this.handleUpdate}/>
        </div>;
    } else if (this.state.formNum ===4) {
      display =       
        <div>
          <Form4 handleUpdate = {this.handleUpdate}/>
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
        name: '',
        email: '',
        password: '',
      }, 
    };
    
    this.handleInputChange = this.handleInputChange.bind(this);

  };
  handleInputChange(event) {
    var target = event.target;
    var value = target.value;
    var name = target.name;

    this.setState({
      [name]: value,
    })
    console.log(this.state);
  }
  render(){
    return(

      <form>
        <label>
          Username:
          <input 
            name = 'name'
            type = 'text'
            onChange = {this.handleInputChange} 
          />
        </label>
        <br />
        <label>
          Email:
          <input 
            name = 'email'
            type = 'text'
            onChange = {this.handleInputChange} 
          />
        </label>
        <br />
        <label>
          Email:
          <input 
            name = 'password'
            type = 'text'
            onChange = {this.handleInputChange} 
          />
        </label>


      </form>

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












ReactDOM.render(<App />, document.getElementById('app'));
