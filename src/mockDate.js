export function getImages() {
  const data = [
    {
      url: "https://nssdc.gsfc.nasa.gov/planetary/image/saturn.jpg",
      name: "Saturn big",
      description: "large pic of Saturn",
      category: "tilt"
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/1200px-Saturn_during_Equinox.jpg",
      name: "Saturn edge on",
      description: "edge on pic of Saturn",
      category: "tilt"
    },
    {
      url: "https://i0.wp.com/foreverconscious.com/wp-content/uploads/2017/05/saturn-and-galactic-center.jpg?fit=600%2C407",
      name: "Saturn colorful",
      description: "colorful pic of Saturn",
      category: "futuristic"
    },
    {
      url: "https://saturn.jpl.nasa.gov/internal_resources/279/",
      name: "multiple pics of Saturn",
      description: "multi-pic of Saturn",
      category: "multiple"
    }
  ];
  
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve (data)
    },1000)  
  })
}
