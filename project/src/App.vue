<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'

const slides = [
  {
    title: 'Лендинг RuComp',
    image: 'https://cdn-edge.kwork.ru/files/portfolio/t0_r/45/a8cb0fba607fbca5379afbc1c50fbbf56a98e07a-1687965703.webp'
  },
  {
    title: 'Лендинг RuComp',
    image: 'https://cdn-edge.kwork.ru/files/portfolio/t0_r/73/1609e7a47af0bb0c33113e7bc50e488f331ee59e-1687965705.webp'
  },
  {
    title: 'Социальная сеть',
    image: 'https://cdn-edge.kwork.ru/files/portfolio/t0_r/41/c67de7905c6ab5c5562a00f1f7df2561ce7cbcb9-1687965489.webp'
  },
  {
    title: 'Социальная сеть',
    image: 'https://cdn-edge.kwork.ru/files/portfolio/t0_r/74/cc85f4961dd868dcf9a9f8d03c51eb4b733718e1-1687965488.webp'
  },
]
</script>

<template>
  <header id="start" class=" relative header flex justify-center items-center w-full h-screen min-h-[800px] bg-black">
    <div class="max-w-[1000px] flex flex-col items-center gap-12">
        <p class="font-bold">&copy; 2023</p>
        <h1 class="logo text-4xl md:text-8xl shadow-2xl">
            Arthur Pechenkin
        </h1>
        <p class="max-w-xl italic md:not-italic md:text-center">
            Я опытный веб-дизайнер и разработчик коммерческих сайтов. Сделаю ваш сайт красивым и заставлю его продавать.
        </p>
        <div class="flex gap-2 font-bold italic">
            <a href="#about" class="hover:underline">Обо мне</a>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
            </svg>
            <a href="#demo" class="hover:underline">Мои работы</a>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
            </svg>
            <a href="#contact" class="hover:underline">Контакты</a>
        </div>
        <div class="arrow-down absolute bottom-6">
            <span></span>
        </div>
    </div>
  </header>

  <main>
      <section class="flex justify-center items-center w-full h-screen min-h-[800px]" id="about">
        <div class="max-w-[1000px] flex flex-col gap-10">
            <h2 class="text-4xl md:text-8xl italic">Обо мне</h2>
            <div class="grid grid-cols-2 gap-10">
                <p class=" text-justify text-lg">
                    Я студент второго курса, отделения фундаментальной информатики Новосибирского государственного университета экономики и управления. Во время учебы в университете, я успешно освоил основы маркетинга в веб-пространстве и продолжаю развиваться в этой области. Кроме того, я занимаюсь разработкой продающих лендингов и за этот период времени реализовал уже несколько успешных проектов. Я уверен, что это только начало моего пути в компьютерных науках и я готов к дальнейшему жизненному и профессиональному росту.
                </p>
                <div >
                    <p class="italic text-2xl mb-8">Быстро учусь, самостоятельно нахожу информацию и использую ее для дальнейшей работы.</p>
                    <p>
                        Стэк технологий: <br>
                        FRONTEND:<br>
                        CSS + TAILWIND<br>
                        JS + VUE<br>
                        BACKEND:<br>
                        PYTHON + DJANGO
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section class="demo flex justify-center items-center w-full h-screen min-h-[800px]" id="demo">
        <div class="max-w-[1000px] flex flex-col gap-10">
            <h2 class="text-4xl md:text-8xl italic">Mои работы</h2>
        </div>
    </section>
    <section class="demo">
        <vueper-slides fixed-height="900px">
            <vueper-slide
                v-for="(slide, i) in slides"
                :key="i"
                :image="slide.image" />
        </vueper-slides>
    </section>
    <section class="flex justify-center items-center w-full h-screen min-h-[800px]" id="contact">
        <div class="max-w-[1000px] flex flex-col justify-center items-center gap-10">
            <h2 class="text-4xl md:text-8xl italic">Mои контакты</h2>
            <a class=" text-justify text-3xl hover:underline" href="https://vk.com/machineee">
                VK
            </a>
            <a class=" text-justify text-3xl hover:underline" href="https://t.me/Freeeakn">
                Telegram
            </a>
            <a class=" text-justify text-3xl hover:underline" href="https://github.com/freeeakn">
                Github
            </a>
        </div>
    </section>
  </main>
  <footer>
    <div class="flex justify-center items-center w-full py-10" id="footer">
        <div class="max-w-[1000px] flex flex-col justify-center items-center gap-5">
            <h2 class="logo text-3xl">Arthur Pechenkin</h2>
            <p class="text-justify text-xl">
                &copy; Copyright 2023
            </p>
        </div>
    </div>
  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caprasimo&family=Montserrat:ital,wght@0,200;0,400;0,700;1,700&display=swap');
* {
    font-family: 'Montserrat', sans-serif;
}

header {
    color: #38B000;
}

.logo {
    font-family: 'Caprasimo', cursive;
    letter-spacing: .3rem;
}

#about,
#contact {
    background: #004B23;
    color: #9EF01A;
}

#footer {
    background: #000;
    color: #38B000;
}

.demo {
    background: #CCFF33;
    color: black;
}

.arrow-down {
    margin: 30px;
}
.arrow-down span {
    display: block;
    width: 30px;
    height: 30px;
    border-bottom: 2px solid #38B000;
    border-right: 2px solid #38B000;
    transform: rotate(45deg);
    margin: -16px;
    animation: arrow-down 2s infinite;
}
.arrow-down span:nth-child(2){
    animation-delay: -0.2s;
}
.arrow-down span:nth-child(3){
    animation-delay: -0.4s;
}
@keyframes arrow-down {
    0%{
        opacity: 0;
        transform: rotate(45deg) translate(-20px,-20px);
    }
    50%{
        opacity: 1;
    }
    100%{
        opacity: 0;
        transform: rotate(45deg) translate(20px,20px);
    }
}
</style>
