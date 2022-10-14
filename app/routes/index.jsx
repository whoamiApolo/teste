export default function Index() {
  return (
    <main>
      <header>
        <nav>
          <div className="mx-0 px-2 sm:px-6 lg:px-8 bg-black">
            <div className="relative flex h-16 items-center justify-between">
              {/*  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button type="button" class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>

                  <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>

          <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
                </button>
              </div> */}

              <div className="flex flex-1 items-center justify-start">
                <div>
                  <img
                    class="h-8 w-auto lg:hidden rounded-full"
                    src="https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q95/wp-content/uploads/2022/04/legiao_OZTlaWFfI0Km.jpg.webp"
                    alt="Your Company"
                  />

                  <img
                    class="hidden h-8 w-auto lg:block rounded-full"
                    src="https://midias.correiobraziliense.com.br/_midias/jpg/2021/11/23/675x450/1_super_choque_1_56121-7101822.jpg?20211123153833?20211123153833"
                    alt="Your Company"
                  />
                </div>

                <div className="hidden sm:ml-8 sm:block">
                  <div className="flex space-x-4">
                    <a
                      href="https://www.gooogle.com"
                      className="text-gray-400 px-4 py-2 hover:bg-gray-900 hover:text-white rounded-md text-base"
                      aria-current="page"
                    >
                      Dashboard
                    </a>
                    <a
                      href="https://www.google.com"
                      class="text-gray-400 hover:bg-gray-900 hover:text-white px-4 py-2 rounded-md text-base"
                    >
                      Team
                    </a>
                    <a
                      href="https://www.google.com"
                      class="text-gray-400 hover:bg-gray-900 hover:text-white px-4 py-2 rounded-md text-base"
                    >
                      Projects
                    </a>
                    <a
                      href="https://www.google.com"
                      class="text-gray-400 hover:bg-gray-900 hover:text-white px-4 py-2 rounded-md text-base"
                    >
                      Calendar
                    </a>
                  </div>
                </div>
              </div>

              <div className="absolute right-0 flex items-center pr-2">
                <button
                  type="button"
                  class="rounded-full bg-black p-1 text-gray-400 hover:text-white hover:bg-gray-900"
                >
                  <span class="sr-only">View notifications</span>
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                </button>

                <div className="relative ml-4">
                  <div>
                    <button
                      type="button"
                      className="flex rounded-full bg-gradient-to-tr from-yellow-300 to-fuchsia-800 p-1 "
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        src="https://source.unsplash.com/random/?face"
                        alt=""
                        className="h-8 w-8 hover:w-10 hover:h-10 rounded-full object-cover"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sm:hidden bg-gray-900" id="mobile-menu">
            <div className="space-y-1 px-4 py-2 text-center">
              <a
                href="https://www.google.com.br"
                class="text-white hover:bg-black hover:text-gray-200 block px-4 py-2 rounded-md text-base"
              >
                Dashboard
              </a>

              <a
                href="https://www.google.com.br"
                class="text-white hover:bg-black hover:text-gray-200 block px-4 py-2 rounded-md"
              >
                Team
              </a>

              <a
                href="https://www.google.com.br"
                class="text-white hover:bg-black hover:text-gray-200 block px-4 py-2 rounded-md"
              >
                Projects
              </a>

              <a
                href="https://www.google.com.br"
                class="text-white hover:bg-black hover:text-gray-200 block px-4 py-2 rounded-md"
              >
                Calendar
              </a>
            </div>
          </div>
        </nav>

        <div className="bg-gradient-to-b from-[#F9C66A] to-[#849CD8] p-10 "></div>
      </header>

      <section className="bg-[#849CD8] min-h-screen px-6 md:px-12 xl:px-32">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima error
          architecto molestias distinctio corporis eius, inventore vel iusto
          magnam, cupiditate expedita? Accusantium non, alias expedita assumenda
          molestiae quos nihil ea mollitia dolor, nobis porro soluta ipsa iusto
          earum cupiditate? Autem nam a voluptatum sint repellendus aliquid
          laborum tempora eius placeat ex! Odio enim at accusamus iure nisi
          tenetur, dolorum neque earum recusandae provident autem! Rerum, quo
          iste. Quibusdam enim sapiente ab veniam, voluptatem adipisci assumenda
          maxime rem? Doloremque ab ducimus at asperiores, nam ex facilis culpa
          mollitia? Enim quas deleniti quo, ex repudiandae fugiat laboriosam
          neque itaque ad. Quia, quo.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eius
          minus ratione voluptas iste earum magnam quibusdam nobis aliquid
          veritatis. Nemo repellendus quae laboriosam impedit, reiciendis
          eligendi odio. Qui rem aspernatur harum iusto doloremque culpa
          praesentium, accusantium corrupti voluptate. Officia deserunt mollitia
          voluptates ea perferendis odio laboriosam, dolorem optio ratione iusto
          fugit dolores voluptatum dolore ducimus omnis, blanditiis autem rem
          vel delectus culpa, illo eveniet. Aliquam commodi provident autem
          eaque, iusto ex. Odit eius exercitationem inventore harum sit vero
          pariatur, mollitia numquam beatae eaque illum recusandae eveniet culpa
          assumenda libero rerum impedit. Eius quasi beatae totam animi.
          Voluptates dignissimos unde aliquid similique iusto alias minus porro
          nam officiis iste rerum, pariatur voluptatibus sit, est, labore harum.
          Assumenda eos optio aliquid illo sapiente. Ullam deserunt omnis
          exercitationem sit libero est provident nobis minima vel eius laborum,
          similique dolor rem incidunt delectus, dolores explicabo voluptatibus
          deleniti ipsam itaque? Ex hic officia maiores illum eius, aliquid
          dignissimos deleniti voluptas nesciunt, iste ab vitae natus modi
          tempora sit veniam vero. Quasi consequuntur magni libero, doloremque
          illum saepe, reprehenderit explicabo architecto nesciunt amet aperiam
          tempora. Nesciunt voluptatum qui quae quasi itaque facere animi error.
          Ducimus necessitatibus provident officia hic? Quaerat consequatur
          veritatis aspernatur nihil cum.
        </p>
      </section>














     

<section>
  <button>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

  </button>
</section>























  <section id="video" className="h-screen px-6 md:px-12 xl:px-32">
        <div className="p-8">
          <span class="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-4 py-2 text-4xl  flex justify-center">
            Hello World
          </span>

          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/1PTs1mqrToM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
  </section>

  <section id="cards" className="flex flex-col justify-center py-20 px-6 md:px-12 xl:px-32">
        <h2 className="text-center mb-4 text-2xl font-bold md:text-4xl">
          Tailus Block
        </h2>
        <p className="lg:w-2/3 lg:mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          dignissimos sint est quas vel pariatur, optio dicta labore. Culpa
          tempore quis ratione? Pariatur fugit distinctio ea, aliquid sapiente
          recusandae deserunt facere. Laborum quod maiores accusantium.
        </p>
        <div className="flex flex-col px-4 py-2 items-center gap-12 text-center mt-16 md:flex-row md:justify-center">
          <div>
            <img
              className="w-64 h-64 object-cover rounded-xl shadow-2xl md:w-40 md:h-40 lg:w-64 lg:h-64 hover:w-72 md:hover:w-48 lg:hover:w-72"
              src="https://tailus.io/sources/blocks/classic/preview/images/woman1.jpg"
              alt=""
            />
            <div className="w-64 h-auto break-all mt-4 md:w-40 lg:w-64">
              <h4 className="text-2xl md:text-lg lg:text-2xl">Nami </h4>
              <span>Pirata</span>
            </div>
          </div>
          <div>
            <img
              className="w-64 h-64 object-cover rounded-xl shadow-2xl md:w-48 md:h-64 lg:w-64 lg:h-80 hover:w-72 md:hover:w-52 lg:hover:w-72"
              src="https://tailus.io/sources/blocks/classic/preview/images/man.jpg"
              alt=""
            />
            <div className="w-64 md:w-48 lg:w-64 break-all mt-4">
              <h4 className="text-2xl md:text-lg lg:text-2xl">Luffy</h4>
              <span>Pirata</span>
            </div>
          </div>
          <div>
            <img
              className="w-64 h-64 object-cover rounded-xl shadow-2xl md:w-40 md:h-40 lg:w-64 lg:h-64 hover:w-72 md:hover:w-48 lg:hover:w-72"
              src="https://tailus.io/sources/blocks/classic/preview/images/woman.jpg"
              alt=""
            />
            <div className="w-64 h-auto break-all mt-4 md:w-40 lg:w-64">
              <h4 className="text-2xl md:text-lg lg:text-2xl">Saul Goodman</h4>
              <span>Ator</span>
            </div>
          </div>
        </div>
  </section>

  <section id="accordion">
        <div className="max-w-2xl mx-auto bg-[#849CD8] px-4 py-2 sm:hidden">
          <div id="accordion-collapse" data-accordion="collapse">
            <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                class="flex items-center justify-between p-5 w-full rounded-xl"
                data-accordion-target="#accordion-collapse-body-1"
              >
                <span className="text-black font-bold">Tópico</span>

                <svg
                  data-accordion-icon
                  class="w-6 h-6 shrink-0 rotate-180"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>

            <div
              className=""
              id="accordion-collapse-body-1"
              aria-labelledby="accordion-collapse-heading-1"
            >
              <ul className="px-10 text-gray-700">
                <li>
                  <a href="">1.1 opcao 1</a>
                </li>
                <li>
                  <a href="">1.2 opcao 2</a>
                </li>
                <li>
                  <a href="">1.3 opcao 3</a>
                </li>
              </ul>
            </div>
            <h2 id="accordion-collapse-heading-2">
              <button
                type="button"
                class="flex items-center justify-between p-5 w-full rounded-xl"
                data-accordion-target="#accordion-collapse-body-2"
              >
                <span className="text-black font-bold">Tópico</span>

                <svg
                  data-accordion-icon
                  class="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-2"
              class="hidden"
              aria-labelledby="accordion-collapse-heading-2"
            >
             
                <ul className="px-10 text-gray-700">
                  <li>
                    <a href="">2.1 opcao 1</a>
                  </li>
                  <li>
                    <a href="">2.2 opcao 2</a>
                  </li>
                  <li>
                    <a href="">2.3 opcao 3</a>
                  </li>
                </ul>
            
            </div>

            <h2 id="accordion-collapse-heading-3">
              <button
                type="button"
                class="flex items-center justify-between p-5 w-full rounded-xl"
                data-accordion-target="#accordion-collapse-body-3"
              >
                <span className="text-black font-bold">Tópico</span>

                <svg
                  data-accordion-icon
                  class="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div id="accordion-collapse-body-3" class="hidden">
                <ul className="px-10 text-gray-700">
                  <li>
                    <a href="">3.1 opcao 1</a>
                  </li>
                  <li>
                    <a href="">3.2 opcao 2</a>
                  </li>
                  <li>
                    <a href="">3.3 opcao 3</a>
                  </li>
                </ul>
              
            </div>
          </div>

          <p class="mt-5">Documentation</p>
          <script src="https://unpkg.com/flowbite@1.3.3/dist/flowbite.js"></script>
        </div>
  </section>

      <div className="bg-gradient-to-t from-[#F9C66A] to-[#849CD8] p-10 "></div>
      
  <footer id="footerSM" className="sm:grid sm:grid-rows-1 bg-[#F9C66A] md:px-12 xl:px-32">
        <div className="hidden sm:block col-span-6 h-11 w-full">Logo11</div>

        <div className="hidden sm:flex col-span-6 m-auto sm:gap-8 gap-4 flex-wrap justify-start">
          <ul className="bg-yellow-100 py-2 px-4">
            <h2 className="font-bold">Tópico</h2>
            <li>texto de uma linha/texto de uma linha</li>
            <li>texto de uma linha</li>
            <li>texto de uma linha</li>
          </ul>
          <ul className="bg-red-500 py-2 px-4">
            <h2 className="font-bold">Tópico</h2>
            <li>texto de uma linha</li>
            <li>texto de uma linha</li>
            <li>texto de uma linha</li>
          </ul>
          <ul className="">
            <h2 className="font-bold py-2 px-4">Tópico</h2>
            <li>texto de uma linha</li>
            <li>texto de uma linha</li>
            <li>texto de uma linha</li>
          </ul>
          <ul className="">
            <h2 className="font-bold py-2 px-4">Tópico</h2>
            <li>texto de uma linha</li>
            <li>texto de uma linha</li>
            <li>texto de uma linha</li>
          </ul>
          <ul className="">
            <h2 className="font-bold py-2 px-4">Tópico</h2>
            <li>texto de uma linha</li>
            <li>texto de uma linha</li>
            <li>texto de uma linha</li>
          </ul>
          <ul className="">
            <h2 className="font-bold py-2 px-4">Tópico</h2>
            <li>texto de uma linha</li>
            <li>texto de uma linha</li>
            <li>texto de uma linha</li>
          </ul>
        </div>

        {/* accordion */}

        {/* accordion */}

        <div className="flex flex-col items-center sm:grid sm:grid-cols-2 sm:col-span-6 sm:mx-12">
          <ul className="flex justify-start sm:gap-4 px-2 pt-4">
            <li>
              <a
                href="https://www.facebook.com"
                className=" p-2 font-semibold text-slate-600 inline-flex items-center space-x-2 rounded"
              >
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com"
                className=" p-2 font-semibold text-slate-600 inline-flex items-center space-x-2 rounded"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M27.26 27.271h-4.733v-7.427c0-1.771-0.037-4.047-2.475-4.047-2.468 0-2.844 1.921-2.844 3.916v7.557h-4.739v-15.271h4.552v2.083h0.061c0.636-1.203 2.183-2.468 4.491-2.468 4.801 0 5.692 3.161 5.692 7.271v8.385zM7.115 9.912c-1.527 0-2.751-1.235-2.751-2.756 0-1.516 1.229-2.749 2.751-2.749s2.755 1.233 2.755 2.749c0 1.521-1.233 2.756-2.755 2.756zM9.489 27.271h-4.749v-15.271h4.749zM29.636 0h-27.276c-1.303 0-2.36 1.031-2.36 2.307v27.387c0 1.276 1.057 2.307 2.36 2.307h27.271c1.301 0 2.369-1.031 2.369-2.307v-27.387c0-1.276-1.068-2.307-2.369-2.307z" />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="www.youtube.com.br"
                className=" p-2 font-semibold text-slate-600 block items-center space-x-2 rounded"
              >
                <svg
                  class="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com"
                className=" p-2 font-semibold text-slate-600 block items-center space-x-2 rounded"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.946 5.29a6.606 6.606 0 0 0-.418-2.185 4.412 4.412 0 0 0-1.039-1.594A4.412 4.412 0 0 0 14.895.472a6.606 6.606 0 0 0-2.184-.418C11.75.01 11.444 0 9 0S6.25.01 5.29.054a6.606 6.606 0 0 0-2.185.418A4.412 4.412 0 0 0 1.51 1.511 4.412 4.412 0 0 0 .472 3.105a6.606 6.606 0 0 0-.418 2.184C.01 6.25 0 6.556 0 9s.01 2.75.054 3.71a6.606 6.606 0 0 0 .418 2.185 4.412 4.412 0 0 0 1.039 1.594 4.411 4.411 0 0 0 1.594 1.039 6.606 6.606 0 0 0 2.184.418C6.25 17.99 6.556 18 9 18s2.75-.01 3.71-.054a6.606 6.606 0 0 0 2.185-.418 4.602 4.602 0 0 0 2.633-2.633 6.606 6.606 0 0 0 .418-2.184C17.99 11.75 18 11.444 18 9s-.01-2.75-.054-3.71zm-1.62 7.347a4.978 4.978 0 0 1-.31 1.67 2.98 2.98 0 0 1-1.708 1.709 4.979 4.979 0 0 1-1.671.31c-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052a4.979 4.979 0 0 1-1.67-.31 2.788 2.788 0 0 1-1.036-.673 2.788 2.788 0 0 1-.673-1.035 4.978 4.978 0 0 1-.31-1.671c-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637a4.979 4.979 0 0 1 .31-1.67 2.788 2.788 0 0 1 .673-1.036 2.788 2.788 0 0 1 1.035-.673 4.979 4.979 0 0 1 1.671-.31c.95-.043 1.234-.052 3.637-.052s2.688.009 3.637.052a4.979 4.979 0 0 1 1.67.31 2.788 2.788 0 0 1 1.036.673 2.788 2.788 0 0 1 .673 1.035 4.979 4.979 0 0 1 .31 1.671c.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637zM9 4.378A4.622 4.622 0 1 0 13.622 9 4.622 4.622 0 0 0 9 4.378zM9 12a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm5.884-7.804a1.08 1.08 0 1 1-1.08-1.08 1.08 1.08 0 0 1 1.08 1.08z" />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="https://twitter.com"
                className=" p-2 font-semibold text-slate-600 inline-flex items-center space-x-2 rounded"
              >
                <svg
                  class="w-5 h-5 fill-current"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </li>
          </ul>
          <ul className="hidden sm:flex justify-end sm:gap-4 gap-20 px-2 sm:pt-4 pt-4">
            <li>imagem 1</li>
            <li>imagem 2</li>
          </ul>
        </div>
        <div className="pt-8 sm:pt-4 sm:pb-12 sm:col-span-6 flex justify-center">
          copyright - Marcelo Apolinário
        </div>
        <div className="bg-gradient-to-b from-[#F9C66A] to-[#849CD8] p-8 sm:hidden"></div>
      </footer>
    </main>
  );
}

/* px-6 md:px-12 xl:px-32 */
