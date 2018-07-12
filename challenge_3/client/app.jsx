

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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    console.log('inside handleSubmit');
    console.log(e.target);
    // this.setState({
    //   formNum : 2
    // })
    console.log(this.state.acct);
  };


  render(){
    var display;
    if (this.state.formNum ===1) {
      display =       
        <div>
          <Form1 handleSubmit = {this.handleSubmit}/>
        </div>;
    } else if (this.state.formNum ===2) {
      display =       
        <div>
          <Form2 handleSubmit = {this.handleSubmit}/>
        </div>;
    } else if (this.state.formNum ===3) {
      display =       
        <div>
          <Form3 handleSubmit = {this.handleSubmit}/>
        </div>;
    } else if (this.state.formNum ===4) {
      display =       
        <div>
          <Form4 handleFinal = {this.handleFinal}/>
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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

  };

  handleSubmit(event){
    console.log (event.target);
  }
  handleInputChange(event) {
    var target = event.target;
    var value = target.value;
    var name = target.name;
 
    this.setState({
      [name]: value,
    })
  }

  render(){
    return(
     <form onSubmit = {this.handleSubmit}>
        <label>
          Username:
          <input 
            name = 'name'
            type = 'text'
            onChange = {this.handleInputChange} 
            value = {this.state.name}
          />
        </label>
        <br />
        <label>
          Email:
          <input 
            name = 'email'
            type = 'text'
            onChange = {this.handleInputChange} 
            value = {this.state.email}
          />
        </label>
        <br />
        <label>
          Email:
          <input 
            name = 'password'
            type = 'text'
            onChange = {this.handleInputChange} 
            value = {this.state.password}
          />
        </label>
        <br />
        <input type = "submit" value = "Submit"/>
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
