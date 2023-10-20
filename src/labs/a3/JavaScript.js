// import VariablesAndConstants from "./VariablesandConstants";
import VariableTypes from "./VariableTypes";
import BooleanTypes from "./BooleanTypes"
import IfElse from "./IfElse"
import TernaryOperator from "./TernaryOperator";
import WorkingWithFunctions from "./WorkingWithFunctions";
import WorkingWithArrays from "./WorkingWithArrays";
import TemplateLiterals from "./TemplateLiterals";
import House from "./House"
import Spread from "./Spread"
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";
import PathParameters from "./PathParameters";

function JavaScript() {
    return(
       <div>
          <h1>JavaScript</h1>
          {/* <VariablesAndConstants/> */}
          <VariableTypes/>
          <BooleanTypes/>
          <IfElse/>
          <TernaryOperator/>
          <WorkingWithFunctions/>
          <WorkingWithArrays/>
          <TemplateLiterals/>
          <House/>
         <Spread/>
         <Destructing/>
         <FunctionDestructing/>
         <PathParameters/>
       </div>
    );
 }
 export default JavaScript