<template>
	<div class="w-8 h-8 flex justify-center items-center">
		<div
			v-if="completed"
			class="flex justify-center items-center w-6 h-6 rounded-full ring-2 ring-opacity-30"
			:class="`bg-${color} ring-${color}`"
		>
			<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
				<path
					fill-rule="evenodd"
					d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
					clip-rule="evenodd"
				/>
			</svg>
		</div>
		<svg v-else class="w-full h-full">
			<circle class="inner w-full" cx="12" cy="12" r="12" />
			<circle class="percent w-full" :class="`stroke-${color}`" :style="`stroke-dashoffset: ${offset};`" cx="12" cy="12" r="12" />
		</svg>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	props: {
		current: {
			required: true,
			type: Number
		},
		color: {
			required: true,
			type: String
		}
	},
	computed: {
		offset(): number {
			return 150 - (75 * this.current) / 100;
		},
		completed(): boolean {
			return this.current >= 100 || isNaN(this.current);
		}
	}
});
</script>

<style lang="scss" scoped>
svg {
	circle {
		fill: none;
		stroke-width: 3px;
		stroke-linecap: round;
		transform: translate(5px, 5px);
	}

	.inner {
		stroke: #374151;
	}
}

.percent {
	transition: all 0.5s;
	stroke-width: 4px;
	stroke-dasharray: 150;
}

@keyframes load {
	from {
		stroke-dashoffset: 150;
	}
	to {
		stroke-dashoffset: 75;
	}
}
</style>
