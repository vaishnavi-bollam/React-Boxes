const Box = props => {
  //  Write your code here.
  const  {text,color} = props;
  return(<div>
  <h1>Boxes</h1>
  <p className={color}>{text}</p></div>)
}

const element = (
  //  Write your code here. 
  <Box text="small" color="yellow" />
  <Box text="medium" color="blue" />
  <Box text="large" color="pink" />

)

ReactDOM.render(element, document.getElementById("root"));
