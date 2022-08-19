export const getComponents = (dataObject) => {
    //clean up data
    const moduleNames = Object.keys(dataObject.data.attributes)
    const cleanComponentNames = moduleNames.filter(attr => {
      if( attr ==="createdAt" || attr ===  'updatedAt' || attr === 'publishedAt' || attr === 'Meta'){
        return false;
      }else{
        return true;
      }
    })
    //import/require components from components folder
    const components = cleanComponentNames.map(component => {
      try{
        return require(`../components/${component}Component.jsx`).default;
      }catch(err){
        console.log(`${component} component does not exist`);
      }
    }).filter(component => component);

    return components;
  }