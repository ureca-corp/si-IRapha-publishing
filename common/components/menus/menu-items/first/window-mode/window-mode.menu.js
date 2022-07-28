import { BaseMenuItem } from "../../base/base-menu-item.js";

export class WindowModeMenu extends BaseMenuItem {
  constructor() {
    super({
      data: {
        title: "Window Mode",
        name: "Mode",
        icon: svgIcon,
      },
      options: { outlined: true },
    });
  }
}

const svgIcon = `
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<g id="그룹_52" transform="translate(-770 -12.367)">
	<path id="패스_73" fill="#646464" d="M1252.352,13.367h-205v512h205.393c16.955-0.533,29.933-15.328,29.515-32.416l-0.01-447.737
		C1282.666,28.124,1269.308,13.899,1252.352,13.367z M1150.017,243.342c7.048,4.477,14.714,7.909,22.74,10.147
		c7.629,2.448,15.012,5.539,22.136,9.22c5.838,2.997,11.207,6.846,15.936,11.456c4.125,4.099,7.404,8.991,9.646,14.378
		c2.262,5.768,3.354,11.912,3.26,18.094c0.111,6.619-1.244,13.188-3.957,19.219c-2.601,5.556-6.442,10.412-11.247,14.209
		c-5.253,4.058-11.205,7.07-17.575,8.871c-7.462,2.149-15.204,3.19-22.965,3.096c-5.086-0.021-10.172-0.493-15.201-1.422
		c-4.976-0.91-9.833-2.371-14.505-4.328c-4.542-1.916-8.855-4.359-12.829-7.303c-3.92-2.9-7.385-6.391-10.271-10.338
		c-3.013-4.135-5.326-8.721-6.87-13.596c-1.718-5.427-2.546-11.101-2.491-16.809h31.781c-0.133,4.307,0.621,8.592,2.205,12.594
		c1.337,3.264,3.467,6.146,6.178,8.367c2.845,2.238,6.142,3.83,9.647,4.663c4.065,1.024,8.271,1.5,12.468,1.462
		c3.602,0.059,7.18-0.417,10.646-1.402c2.731-0.777,5.272-2.107,7.496-3.891c1.904-1.555,3.41-3.547,4.39-5.822
		c0.943-2.335,1.432-4.839,1.411-7.359c0.06-2.636-0.338-5.254-1.149-7.775c-0.901-2.467-2.466-4.666-4.5-6.335
		c-2.787-2.354-5.877-4.326-9.176-5.843c-4.935-2.277-10.001-4.271-15.162-5.955c-6.785-2.297-13.434-4.99-19.894-8.084
		c-5.897-2.788-11.398-6.352-16.354-10.621c-4.573-3.926-8.342-8.724-11.095-14.094c-2.822-5.802-4.216-12.215-4.067-18.683
		c-0.188-12.955,5.707-25.228,15.9-33.155c5.368-4.137,11.452-7.285,17.934-9.258c7.402-2.275,15.125-3.396,22.869-3.319
		c7.872-0.094,15.692,1.177,23.133,3.775c6.597,2.277,12.658,5.842,17.858,10.508c4.896,4.438,8.779,9.901,11.396,15.988
		c2.714,6.412,4.089,13.317,4.013,20.278h-31.684c0.037-3.242-0.473-6.467-1.529-9.54c-0.957-2.845-2.578-5.424-4.687-7.55
		c-2.262-2.18-4.957-3.849-7.914-4.894c-3.597-1.231-7.386-1.819-11.19-1.745c-3.654-0.074-7.309,0.417-10.832,1.461
		c-2.771,0.816-5.351,2.201-7.589,4.04c-1.959,1.652-3.505,3.737-4.542,6.07c-1.019,2.353-1.541,4.875-1.523,7.436
		C1142.275,235.185,1145.217,240.421,1150.017,243.342z"/>
	<path id="패스_74" fill="#5A963C" d="M801.514,13.367c-16.973,0.532-30.329,14.756-29.896,31.848l0.391,448.306
		c-0.433,17.089,12.923,31.314,29.896,31.847h202.928v-512L801.514,13.367L801.514,13.367z M932.908,208.174h-25.772v109.673h25.772
		v30.121h-92.083v-30.121h25.753V208.174h-25.753v-30.121h92.083V208.174z"/>
</g>
</svg>
`;