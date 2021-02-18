/**
 * Modifica las funciones para implementar la funcionalidad especificada.
 * Puedes añadir funciones adicionales si lo necesitas.
 * Este archivo debe ser ejecutable (no incluyas código inválido
 * o no relacionado con el ejercicio).
 */

function getVideosInfo(videos) {
  /* ... */
  let info = {
    "categories":{},
    "top_video": '',
    "duration_average": ''
  };
  let conteo = {};
  let i = 0;
  let aux ;
  let ultimo = videos.length;
  let promedio;
  videos.forEach((valor) => {
    console.log(valor.category);
      if(conteo[valor.category]){
          conteo[valor.category] += 1;
      } else {
          conteo[valor.category] = 1;
      }
      i++;
  });
  total = videos.reduce((total, item) => {
    return total + parseFloat(item.duration.slice(0,-3));
  }, 0);
  console.log('suma total = ' + total);
  aux = videos.sort((a, b) => {
    if (a.likes < b.likes){
      return -1;
    } else if(a.likes > b.likes){
      return 1;
    }else{
      return 0;
    }
  });
  promedio = total/videos.length;
  info.categories = conteo;
  info.top_video = aux[ultimo-1].title;
  info.duration_average = promedio;
  console.log(info);
}

function getCategoryDetails(videos, categoria) {
  /* ... */
  let obj = {
    "videos": '',
    "best_video": '',
    "total_views": 0,
    "duration_average": ''
  };
  let nro_videos;
  let media;
  nro_videos = videos.reduce((total, item) => (item.category == categoria ? total + 1 : total),0);

  total = videos.reduce((total, item) => (item.category == categoria ? total + parseFloat(item.duration.slice(0,-3)) : total),0);
  total_views = videos.reduce((total, item) => (item.category == categoria ? total + item.views : total),0);
  
  video = videos.filter(item => item.category === categoria).sort((a, b) => {return b.likes - a.likes});

  obj.videos = nro_videos;
  obj.best_video = video[0].id;
  obj.total_views  = total_views;
  obj.duration_average = total/nro_videos;

  console.log(obj);
}


