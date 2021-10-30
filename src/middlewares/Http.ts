/**
 * Defines all the requisites in HTTP
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

//import * as cors from 'cors';
import { Application } from 'express';
import * as flash from 'express-flash';
//import * as compress from 'compression';
//import * as connect from 'connect-mongo';
import * as bodyParser from 'body-parser';
// import * as session from 'express-session';
// import * as expressValidator from 'express-validator';

import Log from './Log';
import Locals from '../providers/Locals';

//const MongoStore = connect(session);

interface PathElement {
	onlyPath:string;
	listQueryElementos:string[];
 };

class Http {
	 

	public static getPath(req: any): PathElement{
		let pathMethod:String ='';
		const apiPrefix = Locals.config().apiPrefix;
		let pathRoot:String = req.originalUrl;

		let posIni = pathRoot.indexOf(apiPrefix);
		pathMethod = pathRoot.substr(posIni+apiPrefix.length+1,pathRoot.length-1);

		let listaElementos = pathMethod.split('?');

		let onlyPath  = listaElementos.shift();
		let listQuery = listaElementos.shift();

		onlyPath = typeof onlyPath!== 'undefined'? onlyPath.split('/').join('_'):'';
		let listQueryElementos = typeof listQuery!== 'undefined'? listQuery.split('&'):[];

		return {onlyPath,listQueryElementos};
	}
	public static mount(_express: Application): Application {
		Log.info('Booting the \'HTTP\' middleware...');

		// Enables the request body parser
		_express.use(bodyParser.json({
			limit: Locals.config().maxUploadLimit
		}));

		_express.use(bodyParser.urlencoded({
			limit: Locals.config().maxUploadLimit,
			parameterLimit: Locals.config().maxParameterLimit,
			extended: false
		}));

		// Disable the x-powered-by header in response
		_express.disable('x-powered-by');


		// Enables the request payload validator
		//_express.use(expressValidator());

		// Enables the request flash messages
		// _express.use(flash());

		/**
		 * Enables the session store
		 *
		 * Note: You can also add redis-store
		 * into the options object.
		 */
		const options = {
			resave: true,
			saveUninitialized: true,
			cookie: {
				maxAge: 1209600000 // two weeks (in ms)
			},
		/* 	store: new MongoStore({
				url: process.env.MONGOOSE_URL,
				autoReconnect: true
			}) */
		};

		//_express.use(session(options));

		// Enables the CORS
		//_express.use(cors());

		// Enables the "gzip" / "deflate" compression for response
		//_express.use(compress());

		return _express;
	}
}

export default Http;
