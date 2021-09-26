import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { $colorMode, $cookies } from '~/utils/nuxt-instance';

@Module({ name: 'modules/theme', stateFactory: true, namespaced: true })
export default class Theme extends VuexModule {
	/*
		ACTIONS -> MUTATIONS -> STATE
	*/

	/*
		STATE
	*/
	theme = 'dark' as unknown as Theme;

	get $theme() {
		return this.theme;
	}

	/*
		MUTATIONS -> MUTATE STATE VARIABLES
	*/
	@Mutation
	public SET_THEME(theme: Theme) {
		this.theme = theme;
	}

	/*
		ACTIONS -> CALL MUTATIONS OR SOME FUNCTIONS
	*/
	@Action
	public update(theme: string) {
		this.context.commit('SET_THEME', theme);

		$colorMode.preference = theme;

		$cookies.set('theme', theme, {
			maxAge: 60 * 60 * 24 * 30 * 6 // 30 days
		});
	}

	@Action
	public toggle() {
		if (this.$theme === ('dark' as unknown as Theme)) {
			this.update('light');
		} else {
			this.update('dark');
		}
	}

	@Action
	public updateTheme() {
		const theme = $cookies.get('theme') || 'dark';

		this.context.commit('SET_THEME', theme);
		$colorMode.preference = theme;
	}
}
