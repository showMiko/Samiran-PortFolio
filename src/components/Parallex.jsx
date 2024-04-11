import React from 'react'
import insta from "../assets/instagram.png"
import mail from "../assets/gmail-logo.png"
const Parallex = () => {
  return (
    <>
    <header class="bg-header flex items-center justify-center h-screen pb-12">
  <div class="bg-transparent font-serif mx-4 p-4 text-center md:p-8">

    <h1 class="text-5xl uppercase text-white">
      Image Gallery
    </h1>
    <p class="text-lg myfont text-white">
      Samiran Banik
    </p>

    
    <div class="text-lg flex justify-center text-white">
      <a href='https://www.instagram.com/samiran.banik_?igsh=aTJpbmk2djYwYmRz' target='_blank'>
      <img src={insta} className='h-5 max-w-full m-2 filter invert'/>
      </a>
      <a href='mailto:baniksamiran.02@gmail.com' target='_blank'>
      <img src={mail} className='h-5 max-w-full m-2 filter invert'/>
      </a>
    </div>
  </div>
</header>

<div class="font-serif leading-normal mx-auto py-12 px-4 max-w-lg">
    <p className='font-serif leading-normal mx-auto py-0 px-4 max-w-lg text-3xl'>About me</p>
    <hr/>
    <p class="mb-4 text-lg">Hi, I'm Samiran, a photographer and aspiring filmmaker based in Bardhaman. With experience as a freelance photographer for renowned establishments such as Madam G, Soyyumindia, and Naalayak, along with various campaigns, I bring a keen eye for capturing the essence of diverse environments.
?</p>

</div>

<div class="bg-quote container flex items-center justify-center h-screen mx-auto">
  <blockquote class="bg-black font-serif mx-4 p-4 text-center text-white md:p-8">
    <p class="font-bold italic text-3xl">
      &ldquo;Only do $h!t you believe in&rdquo;
    </p>
  </blockquote>
</div>

<div class="font-serif leading-normal mx-auto py-12 px-4 max-w-lg">
  <p class="mb-4 text-lg">My passion for photography has been a lifelong journey, culminating in a profound realization during my documentary project in 2020, focusing on the people of Samshernagar, a village nestled in the Sunderbans. This experience solidified my dedication to the art form and its ability to unveil the beauty in the ordinary.
</p>
  <p class="mb-4 text-lg">My portfolio encompasses a wide range of subjects, as I believe in embracing the spontaneity of life without confining myself to any specific genre. From the bustling energy of concerts to the intimate moments in restaurants, I strive to encapsulate the unique narratives that unfold before my lens. Welcome to my world of capturing moments that transcend the mundane and celebrate the extraordinary.</p>
</div>
    </>

  )
}

export default Parallex