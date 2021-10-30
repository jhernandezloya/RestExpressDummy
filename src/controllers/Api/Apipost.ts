/**
 * Define the API base url
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import Locals from '../../providers/Locals';
import * as path from 'path';
import * as fs from 'fs';
import Http from '../../middlewares/Http';

class Apipost {

	public static async perform(req, res, next): Promise<void>  {
		//console.log(`Inicio: ${req.params}`);
		//console.log(`Params: ${req.body.smartMeterId}`);
		let pathMethod = Http.getPath(req);
		let parsed:string = '{"message": "No existe elementos "}';
		/* pendiente el tema de los parametros
		for (var param in req.body) {
			console.log(`Nombre del parametro: ${param}`, `Nombre del Valor: ${req.body[param]}`);
		 }*/
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

		
	}
}

export default Apipost;
