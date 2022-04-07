module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '(screen-16)': 'calc(100vw - 40rem)',
        content: 'fit-content',
        'c-form': '18.94rem',
      },
      colors: {
        faintGrey: '#888EA0',
        lightBlack: '#182754',
        linkBlue: '#005CD6',
      },
      fontSize: {
        nameSize: '23.86px',
        xlxs: '8px',
        xlgs: ['0.625rem, 2rem'],
        '3.5xl': ['2rem', '2.5rem'],
        '4.5xl': ['2.5rem', '3rem'],
        '5.5xl': '3.5rem',
      },
      width: {
        tiny: '1px',
        36: '9rem',
        'dashboard-content': 'calc(100vw - 15rem)',
        content: 'fit-content',
      },
      lineHeight:{
        nameLine: "33px",
        amount: "27px",
        links: "22px"
      },
      height: {
        content: 'fit-content',
      },
    },
  },
  plugins: [],
}
