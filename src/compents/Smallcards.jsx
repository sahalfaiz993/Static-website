import React from 'react'

export const Smallcards = () => {
  return (
    <div><section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="data:image/jpeg;base64,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"/>
          </a>
          <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">DIYANA</h3>
            <h2 class="text-gray-900 title-font text-lg font-medium">SEE THIS MOVIE</h2>
            <p class="mt-1"></p>
          </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="data:image/jpeg;base64,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"/>
          </a>
          <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">KALNIN</h3>
            <h2 class="text-gray-900 title-font text-lg font-medium">SEE THIS MOVIE</h2>
            <p class="mt-1"></p>
          </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoIF98V6Gc_4aR_BFkgMBAJNp-zFa4jRXftQ&usqp=CAU"/>
          </a>
          <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">FOXI</h3>
            <h2 class="text-gray-900 title-font text-lg font-medium">SEE THE YODA</h2>
            <p class="mt-1"></p>
          </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9oU9CU0ao1O9WVPcihU0y_GENaI_ymPEBKg&usqp=CAU"/>
          </a>
          <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">DANY</h3>
            <h2 class="text-gray-900 title-font text-lg font-medium">PLEASE SIT DOWN</h2>
            <p class="mt-1"></p>
          </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="data:image/png;base64,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"/>
          </a>
          <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">DAVID</h3>
            <h2 class="text-gray-900 title-font text-lg font-medium">THIS MOVIE IS OSAM</h2>
            <p class="mt-1"></p>
          </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="data:image/jpeg;base64,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"/>
          </a>
          <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">PETER</h3>
            <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
            <p class="mt-1"></p>
          </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkV6UL4JJZBvwsTSz4npm0CBUWktKnfKQQSO5W1soBI8LxFyHo3468OOA9tDkYAwfbNLw&usqp=CAU"/>
          </a>
          <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">SIMON</h3>
            <h2 class="text-gray-900 title-font text-lg font-medium">AMAZING </h2>
            <p class="mt-1"></p>
          </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFqIHgHaGFcIrL0PFZyMcvTVzJuhreUZXFlQ&usqp=CAU"/>
          </a>
          <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">ELON MUSK</h3>
            <h2 class="text-gray-900 title-font text-lg font-medium">THIS MOVIE SHOW THE SPACE TRAVEL </h2>
            <p class="mt-1"></p>
          </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}
