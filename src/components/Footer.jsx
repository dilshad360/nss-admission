import {
    Typography
} from "@material-tailwind/react";

function Footer() {
  return (
    <footer className="w-full  p-8">     
      <Typography color="blue-gray" className="text-center font-thin text-xs opacity-70">
      Developed by <a className="font-semibold" href="https://www.linkedin.com/in/dilshad360/">Dilshad</a>  & <a className="font-semibold" href="https://www.linkedin.com/in/amjxd-aj/">Amjad</a>
      </Typography>
    </footer>
  )
}

export default Footer