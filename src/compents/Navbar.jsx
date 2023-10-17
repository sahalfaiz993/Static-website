import { colors } from "@mui/material"


export const Navbar = () => {
  return (
    <div>
        <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src="https://media.printables.com/media/prints/172914/images/1626986_0552411d-9d8e-497d-8460-93f043b66949/thumbs/inside/1280x960/png/src_1.webp" alt=""  height={20} width={70}/>
      <span class="ml-3 text-xl" >YODA</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900">HOME</a>
      <a class="mr-5 hover:text-gray-900">ABOUT</a>
      <a class="mr-5 hover:text-gray-900">CONTACT</a>
      <a class="mr-5 hover:text-gray-900">EMAIL</a>
    </nav>
    
  </div>
</header>
  
  </div>
  )
}
