/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			gridTemplateColumns: {
				"auto-fit-150": "repeat(auto-fit, minmax(150px, 1fr))",
			},
		},
	},
	plugins: [],
}
