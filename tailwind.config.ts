import flowbitePlugin from 'flowbite/plugin';

import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				// Primary: 밝고 생동감 있는 파스텔 블루 계열
				primary: {
					50: '#E0F7FA',
					100: '#B3ECF2',
					200: '#80DFEA',
					300: '#4DD2E2',
					400: '#26C6DA',
					500: '#00BCD4',  // 생동감 있는 파스텔 블루
					600: '#00A5BB',
					700: '#008C9E',
					800: '#006F7C',
					900: '#004D57',
				},
				// Secondary: 밝고 경쾌한 민트 계열
				secondary: {
					50: '#E6FFF7',
					100: '#C0FFEB',
					200: '#99FFDD',
					300: '#66FFCC',
					400: '#33FFBB',
					500: '#00F5A2',  // 경쾌한 파스텔 민트
					600: '#00D18A',
					700: '#00AA6E',
					800: '#008056',
					900: '#005C3F',
				},
				// 다크 모드에서도 동일한 색상 유지
				darkPrimary: {
					50: '#B3ECF2',
					100: '#80DFEA',
					200: '#4DD2E2',
					300: '#26C6DA',
					400: '#00BCD4',  // 동일한 파스텔 블루
					500: '#00A5BB',
					600: '#008C9E',
					700: '#006F7C',
					800: '#004D57',
					900: '#002A31',
				},
				darkSecondary: {
					50: '#C0FFEB',
					100: '#99FFDD',
					200: '#66FFCC',
					300: '#33FFBB',
					400: '#00F5A2',  // 동일한 파스텔 민트
					500: '#00D18A',
					600: '#00AA6E',
					700: '#008056',
					800: '#005C3F',
					900: '#003324',
				},
				// 기본 텍스트 대비 강화
				textPrimary: {
					light: '#1F2937',
					dark: '#E5E7EB',
				},
			}
		}
	},
	plugins: [flowbitePlugin]
} as Config;
