import React,{Component} from "react";
import { render } from "react-dom";
import Picky from "react-picky";
import './reactPicky.css';


const bigList = [
  'JAVA',
  'BIGDATA',
  'HADOOP',
  'DATABASE',
  'OOPS'
];


class ReactPicky extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      arrayValue: [],
      roles: ['TRAINER','EVALUATOR']
    };
    this.selectOption = this.selectOption.bind(this);
    this.selectMultipleOption = this.selectMultipleOption.bind(this);
  }

  selectOption(value) {
    console.log("Vals", value);
    this.setState({ value });
  }
  selectMultipleOption(value) {
    console.count('onChange')
    console.log("Val", value);
    this.setState({ arrayValue: value });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            
           {this.state.roles.map((role)=> <Picky
              value={this.state.arrayValue}
              options={bigList}
              onChange={this.selectMultipleOption}
          
              valueKey="id"
              labelKey="name"
              multiple={true}
            
              includeFilter={true}
              dropdownHeight={600}
           /> )}
          </div>
          
        </div>
      </div>
    );
  }
}


export default ReactPicky;