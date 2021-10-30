/**
 * Primary file for your Clustered API Server
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

//import * as kue from 'kue';
import * as path from 'path';
import * as dotenv from 'dotenv';

import Express from './Express';

 //todo: aca se cargan todas las configuraciones para el proyecto 

class App {
	// Clear the console
	public clearConsole (): void {
		process.stdout.write('\x1B[2J\x1B[0f');
	}

	// Loads your dotenv file
	public loadConfiguration (): void {

		dotenv.config({ path: path.join(__dirname, '../../.env') });
	}

	// Loads your Server
	public loadServer (): void {

		Express.init();
	}

	// Loads the Worker Cluster
	public loadWorker (): void {
	}

}

export default new App;
