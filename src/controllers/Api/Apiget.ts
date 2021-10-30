/**
 * Define the API base url
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import Locals from '../../providers/Locals';
import * as path from 'path';
import * as fs from 'fs';
import Http from '../../middlewares/Http';

class Apiget {
	
	//todo para declarar un metodo asincrono en typescript se coloca async y dentro del codigo donde 
	//todo va a parar el metodo asincrono se coloca el await
/* 	public static async perform(req, res, next): Promise<void>  {
		let pathMethod = Http.getPath(req);
		let parsed:string = '{"message": "No existe elementos "}';
		// pendiente el tema de los parametros
		// for (var param in req.query) {
		// 	console.log(`Nombre del parametro: ${param}`, `Nombre del Valor: ${req.query[param]}`);
		//  }
		 let listaFiles:Map<string,string> = Locals.listFiles();
		 let key = pathMethod.onlyPath;

		  if(listaFiles.has(key)){
			let file:(string | undefined) = listaFiles.get(key);
			typeof file !== 'undefined' && (parsed = fs.readFileSync(path.join(__dirname, file), { encoding: 'utf8' , flag:'r'}));
		  }
		  const jsonParsed = JSON.parse(parsed);
		  let {time,body} = jsonParsed;
		  typeof time === 'undefined' && (time = 1000);
		  typeof body!== 'undefined' && (body = parsed);
		  await Locals.timePromise(time);
		  return res.json(body);
	} */

	public static perform(req, res, next): void {
		let pathMethod = Http.getPath(req);
		let parsed:string = '{"message": "No existe elementos "}';
		// pendiente el tema de los parametros
		// for (var param in req.query) {
		// 	console.log(`Nombre del parametro: ${param}`, `Nombre del Valor: ${req.query[param]}`);
		//  }
		 let listaFiles:Map<string,string> = Locals.listFiles();
		 let key = pathMethod.onlyPath;

		  if(listaFiles.has(key)){
			let file:(string | undefined) = listaFiles.get(key);
			typeof file !== 'undefined' && (parsed = fs.readFileSync(path.join(__dirname, file), { encoding: 'utf8' , flag:'r'}));
		  }
		  const jsonParsed = JSON.parse(parsed);
		  let {time,body} = jsonParsed;
		  typeof time === 'undefined' && (time = 1000);
		  typeof body!== 'undefined' && (body = parsed);
		//   Locals.timePromise(time)
		// 	  .then( (result)=> { 
		// 		  return res.json(body)} 
		// 	  );
		  Locals.timePromiseException(time)
			  .then( (result)=> { 
				  // es el resultado del jbody Json
				  return res.json(body)} 
			  )
			  .catch((reason)=>{ 
				  console.log('Caida del servicio');
				  return res.json('{"message": "No existe elementos "}');
								});
		  
	}

}

export default Apiget;
