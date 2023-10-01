import withMT from "@material-tailwind/react/utils/withMT"

export default 
  withMT({
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
      extend: {},
      colors:{
        "primary": "#31E1F7",
        "secondary": "#42495b"
      }
    },
    plugins: [],
  })

