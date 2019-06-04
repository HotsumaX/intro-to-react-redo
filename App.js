const Pet = ({name,animal,breed}) => {
  return React.createElement("div",{},[
    React.createElement("h1",{},name),
    React.createElement("h2",{},animal),
    React.createElement("h2",{},breed)
  ])
}
const App = () =>{

  return (
  React.createElement("div",{},[
  React.createElement("h1",{},"Adopt Me!"),
  React.createElement(Pet, {name:"luna",animal:'dog',breed:'havanese'}),
  React.createElement(Pet, {name:"cow",animal:'cow2',breed:'havanese1'})
  ]))
}
ReactDOM.render(React.createElement(App),document.getElementById('root'))