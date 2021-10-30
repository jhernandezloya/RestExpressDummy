/**
 * Define App Locals & Configs
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import { Application } from 'express';
import * as path from 'path';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

/* Aca se cargan todas las variables de entorno */

class Locals {

	public static listFiles(): Map<string,string>  {
		let listConfiguration:Map<string,string> = new Map();
		const parsed = dotenv.parse(fs.readFileSync(path.join(__dirname, '../../.env.files'), { encoding: 'utf8' }))
        Object.keys(parsed).forEach(function (key) {
			listConfiguration.set(key,parsed[key]);
			//listConfiguration = [...listConfiguration,[key,parsed[key]]];
		  });
		  return listConfiguration;
	}


	//todo: la unica forma para trabajar con Async es con Promise
	public static timePromise<T>(tiempo: number): Promise<T> {
		return new Promise((resolve)=>setTimeout(resolve,tiempo));
	} 
	//todo: la unica forma para trabajar con Async es con Promise
	public static timePromiseException<T>(tiempo: number): Promise<T> {
		return new Promise((resolve,reject)=>setTimeout(()=>{reject('or nah');},tiempo));
	} 
	/**
	 * Makes env configs available for your app
	 * throughout the app's runtime
	 */
	public static config(): any {
		dotenv.config({ path: path.join(__dirname, '../../.env') });

		const url = process.env.APP_URL || `http://localhost:${process.env.PORT}`;
		const port = process.env.PORT || 4040;
		const maxUploadLimit = process.env.APP_MAX_UPLOAD_LIMIT || '50mb';
		const maxParameterLimit = process.env.APP_MAX_PARAMETER_LIMIT || '50mb';

		const name = process.env.APP_NAME || 'NodeTS Dashboard';
		const year = (new Date()).getFullYear();

		const isCORSEnabled = process.env.CORS_ENABLED || true;
		const apiPrefix = process.env.API_PREFIX || 'api';

		return {
			apiPrefix,
			isCORSEnabled,
			maxUploadLimit,
			maxParameterLimit,
			name,
			port,
			url,
		};
	}

	/**
	 * Injects your config to the app's locals
	 */
	public static init (_express: Application): Application {
		_express.locals.app = this.config();
		return _express;
	}
}

export default Locals;
