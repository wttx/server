/*
 * @copyright 2019 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author 2019 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import Apps from './apps'
import {AppConfig, appConfig} from './appconfig'
import appswebroots from './appswebroots'
import Backbone from './backbone'
import Config from './config'
import {
	PERMISSION_ALL,
	PERMISSION_CREATE,
	PERMISSION_DELETE,
	PERMISSION_NONE,
	PERMISSION_READ,
	PERMISSION_SHARE,
	PERMISSION_UPDATE,
	TAG_FAVORITE,
} from './constants'
import ContactsMenu from './contactsmenu'
import {currentUser, getCurrentUser} from './currentuser'
import Dialogs from './dialogs'
import EventSource from './eventsource'
import {get, set} from './get_set'
import {isUserAdmin} from './admin'
import L10N from './l10n'
import {
	generateUrl,
	getRootPath,
	filePath,
	linkTo,
	linkToOCS,
	linkToRemote,
	linkToRemoteBase,
} from './routing'
import msg from './msg'
import Notification from './notification'
import PasswordConfirmation from './password-confirmation'
import Plugins from './plugins'
import search from './search'
import Util from './util'
import {debug} from './debug'
import {redirect, reload} from './navigation'
import webroot from './webroot'

/** @namespace OC */
export default {
	/*
	 * Constants
	 */
	PERMISSION_ALL,
	PERMISSION_CREATE,
	PERMISSION_DELETE,
	PERMISSION_NONE,
	PERMISSION_READ,
	PERMISSION_SHARE,
	PERMISSION_UPDATE,
	TAG_FAVORITE,

	Apps,
	AppConfig,
	appConfig,
	appswebroots,
	Backbone,
	ContactsMenu,
	config: Config,
	/**
	 * Currently logged in user or null if none
	 *
	 * @type String
	 * @deprecated use {@link OC.getCurrentUser} instead
	 */
	currentUser,
	dialogs: Dialogs,
	EventSource,
	/**
	 * Returns the currently logged in user or null if there is no logged in
	 * user (public page mode)
	 *
	 * @since 9.0.0
	 */
	getCurrentUser,
	isUserAdmin,
	L10N,
	msg,
	Notification,
	PasswordConfirmation,
	Plugins,
	search,
	Util,
	debug,
	generateUrl,
	get: get(window),
	set: set(window),
	getRootPath,
	filePath,
	redirect,
	reload,
	linkTo,
	linkToOCS,
	linkToRemote,
	linkToRemoteBase,
	/**
	 * Relative path to Nextcloud root.
	 * For example: "/nextcloud"
	 *
	 * @type string
	 *
	 * @deprecated since 8.2, use OC.getRootPath() instead
	 * @see OC#getRootPath
	 */
	webroot,
}
