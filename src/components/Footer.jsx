import {
    Typography
} from "@material-tailwind/react";

function Footer() {
  return (
    <footer className="w-full  p-8">     
      {/* <hr className="my-8 border-blue-gray-50" /> */}
      <Typography color="blue-gray" className="text-center font-thin text-xs">
      Crafted with ❤️ by Dilshad
      </Typography>
    </footer>
  )
}

export default Footer