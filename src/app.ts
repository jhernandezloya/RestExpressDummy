/**
 * Bootstrap your App
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import App from './providers/App';


	/**
	 * Clear the console before the app runs
	 */
	App.clearConsole();

	/**
	 * Load Configuration
	 */
	App.loadConfiguration();

	/**
	 * Run the Server on Clusters
	 */
	App.loadServer();
