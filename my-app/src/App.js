
// const colorPickerOptions = [
//   {label:"red", color: "#F44336"},
//   {label:"green", color: "#4CAF50"},
//   {label: "blue", color: "#2196F3"},
//   {label: "grey", color: "#607D8B"},
//   {label: "pink", color: "#E91E63"},
//   {label: "indigo", color: "#3F51B5"}
// ];

function App() {
  return (
    <div style={containerStyles}>
      <AppBar/>
      <Switch>
        <Route path="/signup">
          <SignupForm/>
        </Route>
        <Route path="/colorpicker">
          <ColorPicker options={colorPickerOptions}/>
        </Route>
      <Route path="/couter">
        <Counter/>
      </Route>
      <Route path="/clock">
        <Clock/>
      </Route>
      <Route path="/pokemon">
        <PokemonView/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
