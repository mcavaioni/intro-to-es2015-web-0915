
class Programmer{
  constructor(name, language="RUBY"){
    this.name = name;
    this.language = language;
  }
  evangelize(){
  return `${this.name}: ${this.language.toUpperCase()} IS THE BEST LANGUAGE EVER`;
  }
}


var bestLanguages = ["Ruby", "Elixir"];


function addJavaScript(language){
  return language + "JavaScript";
}


// export function evangelize (){
//   return "${this.name}: ${this.language.toUpperCase} IS THE BEST LANGUAGE EVER";
// }

export default Programmer;
export {addJavaScript};
export var bestLanguages;

// export function evangelize(){
//   return "${this.name}: ${this.language.toUpperCase} IS THE BEST LANGUAGE EVER";
// }
