/**
  Takes in the element's identity as a string and type of identity. 
  Element must be called via full JS camelCase match or kebab-case
  format. Returns a matching DOM Object, if possible.
  **/
 
function getDomComponent({name: id, getType: type}) {
  this.capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);
  this.camelToHyphen = (key) => key.replace( /([A-Z])/g, "-$1").toLowerCase();
  this.capitalize.bind(this)
  this.camelToHyphen.bind(this)

  this.components = {
    [id+'Id']: document.getElementById(`${id}`),
    [id+'Class']: document.getElementsByClassName(`${id}`),
  }

  return this.components[`${this.camelToHyphen(id)}${this.capitalize(type)}`];
};

this.getDomComponent.bind(this) // is this necessary? To bind getDomComponent to Document? No idea.-