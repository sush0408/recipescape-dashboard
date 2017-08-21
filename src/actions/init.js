import axios from 'axios'

const BASE_URL = "https://recipe.hyeungshikjung.com/recipe/"

async function initialize(dishname = 'potatosalad') {
  // console.time('init')
  const recipes_resp = await axios.get(BASE_URL + `recipes/${dishname}`)
                             .then(resp => resp.data)
  const recipes = {}
  for (let {origin_id, ...recipeInfo} of recipes_resp) {
    recipes[origin_id] = {...recipeInfo, origin_id}
  }

  const clusters_resp = await axios.get(BASE_URL + `clusters/${dishname}`)
                                    .then(resp => resp.data)
  const clusters = {}
  const activeClusters = {}

  for (let cluster of clusters_resp) {
    clusters[cluster.title] = {}
    for (let {recipe_id, ...coords} of cluster.points) {
      clusters[cluster.title][recipe_id] = {...coords, recipe_id, recipeName: recipes[recipe_id]}
      activeClusters[coords.cluster_no] = true
    }
    clusters[cluster.title] = {
      points: Object.keys(clusters[cluster.title]).map(key => clusters[cluster.title][key]),
      buttons: Object.keys(activeClusters).map(key => activeClusters[key]),
      centers: Object.keys(cluster.centers).map(key => cluster.centers[key])
    }
    // clusters[cluster.title].activeClusters = activeClusters;
  }

  return clusters;
  // console.timeEnd('init') about 700ms
}

export default initialize;
