/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		screens: {
  			'2xl': '1600px',
  			'3xl': '1736px',
  			'4xl': '1936px'
  		},
  		'shiny-text': {
  			'0%': {
  				backgroundPosition: '0% 50%'
  			},
  			'100%': {
  				backgroundPosition: '500% 50%'
  			}
  		},
  		backgroundImage: {
  			'project-underline': 'linear-gradient(90deg, #060618 -3.62%, #2E2688 6.76%, #01B0EA 10.22%, #FFFFFF 13.68%, #FFFFFF 15.41%, #01B0EA 17.14%, #2E2688 20.6%, #06061800 0%)',
  			'project-underline-mobile': 'linear-gradient(90deg, #060618 -3.62%, #2E2688 5.76%, #01B0EA 20.22%, #FFFFFF 40.68%, #FFFFFF 54.41%, #01B0EA 67.14%, #2E2688 71.6%, #060618 76.98%)',
  			'navbar-gradient': 'linear-gradient(180deg, rgba(6, 6, 24, 0.2) 0%, rgba(255, 255, 255, 0.08) 100%)',
  			'active-link-gradient': 'linear-gradient(90deg, #060618 37.95%, #2E2688 52.58%, #01B0EA 57.46%, #FFFFFF 62.34%, #FFFFFF 64.77%, #01B0EA 67.21%, #2E2688 72.09%, #060618 86.72%)'
  		},
  		dropShadow: {
  			shadow: '4px solid #D0B721',
  			'hero-shadow': '0px 4px 250px 8px #00000014'
  		},
  		colors: {
  			'enquire-border': 'rgba(255, 255, 255, 0.1)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			'shadow-border': '2px solid',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			enquire: '32.4898px',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		boxShadow: {
  			button: '50px solid #FFFFFF1A',
  			'custom-bottom-shadow': '0 10px 15px rgba(211, 211, 211, 0.5)',
  			'custom-light': '0px 5.2px 14.55px 0px #FFE23552',
  			'custom-strong': '0px 22.86px 57.02px 0px #FFE23547',
  			'hero-shadow': '0px 4px 250px 8px #00000014',
  			figma: '0px 22.86px 57.02px rgba(255, 226, 53, 0.28), 0px 5.2px 14.55px rgba(255, 226, 53, 0.32)'
  		},
  		keyframes: {
  			marquee: {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				}
  			},
  			'marquee-vertical': {
  				from: {
  					transform: 'translateY(0)'
  				},
  				to: {
  					transform: 'translateY(calc(-100% - var(--gap)))'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'automation-zoom-in': {
  				'0%': {
  					transform: 'translateY(-30px) scale(0.2)'
  				},
  				'100%': {
  					transform: 'transform: translateY(0px) scale(1)'
  				}
  			},
  			flip: {
  				to: {
  					transform: 'rotate(360deg)'
  				}
  			},
  			rotate: {
  				to: {
  					transform: 'rotate(90deg)'
  				}
  			},
  			'rotate-new': {
  				'0%': {
  					transform: 'rotate(0deg) scale(10)'
  				},
  				'100%': {
  					transform: 'rotate(-360deg) scale(10)'
  				}
  			},
  			shimmer: {
  				from: {
  					backgroundPosition: '0 0'
  				},
  				to: {
  					backgroundPosition: '-200% 0'
  				}
  			},
  			'border-beam': {
  				'100%': {
  					'offset-distance': '100%'
  				}
  			},
  			'shimmer-slide': {
  				to: {
  					transform: 'translate(calc(100cqw - 100%), 0)'
  				}
  			},
  			'spin-around': {
  				'0%': {
  					transform: 'translateZ(0) rotate(0)'
  				},
  				'15%, 35%': {
  					transform: 'translateZ(0) rotate(90deg)'
  				},
  				'65%, 85%': {
  					transform: 'translateZ(0) rotate(270deg)'
  				},
  				'100%': {
  					transform: 'translateZ(0) rotate(360deg)'
  				}
  			},
  			'shiny-text': {
  				'0%, 90%, 100%': {
  					'background-position': 'calc(-100% - var(--shiny-width)) 0'
  				},
  				'30%, 60%': {
  					'background-position': 'calc(100% + var(--shiny-width)) 0'
  				}
  			},
  			grid: {
  				'0%': {
  					transform: 'translateY(-50%)'
  				},
  				'100%': {
  					transform: 'translateY(0)'
  				}
  			}
  		},
  		animation: {
  			marquee: 'marquee var(--duration) linear infinite',
  			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
  			'shimmer-slide': 'shimmer-slide var(--speed) ease-in-out infinite alternate',
  			'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
  			'shiny-text': 'shiny-text 8s infinite',
  			grid: 'grid 15s linear infinite'
  		},
  		fontFamily: {
  			montserrat: [
  				'var(--font-montserrat)',
  				'Montserrat',
  				'sans-serif'
  			],
  			poppins: [
  				'var(--font-poppins)',
  				'Poppins',
  				'sans-serif'
  			]
  		},
  		fontSize: {
  			'display-sm': ['clamp(2rem, 4vw + 1rem, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
  			'display-md': ['clamp(2.5rem, 5vw + 1rem, 3.75rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
  			'display-lg': ['clamp(3rem, 6vw + 1rem, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
  			'display-xl': ['clamp(3.5rem, 7vw + 1rem, 5.5rem)', { lineHeight: '1.0', letterSpacing: '-0.02em' }]
  		},
  		transitionTimingFunction: {
  			'fb-ease-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
  			'fb-ease-in-out': 'cubic-bezier(0.83, 0, 0.17, 1)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
